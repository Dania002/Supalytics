import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserSignUpDto } from './dto/user-signup.dto';
import { hash } from "bcryptjs";
import * as bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { Roles } from 'utility/common/roles.enum';
import { UserLogInDto } from './dto/user-login.dto';
import { CompanyEntity } from 'src/company/entity/company.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        @InjectRepository(CompanyEntity)
        private companyRepository: Repository<CompanyEntity>,
    ) { }

    async signup(userSignUpDto: UserSignUpDto) {
        const emailExists = await this.findUserByEmail(userSignUpDto.email);
        if (emailExists) throw new ConflictException('Email already exists.');

        if ((userSignUpDto.password !== userSignUpDto.confirmPassword)) throw new BadRequestException('Passwords do not match.');

        userSignUpDto.password = await hash(userSignUpDto.password, 10);

        let user = this.userRepository.create({
            ...userSignUpDto,
            role: Roles.SUPLIER
        });

        const company = await this.companyRepository.findOneBy({ name: userSignUpDto.companyName });
        if (!company) {
            throw new BadRequestException('Company does not exist');
        }
        user.company = company;

        user = await this.userRepository.save(user);

        const { password, ...result } = user;

        return {
            user: result,
            accessToken: await this.accessToken(user),
        };
    }

    async login(userLogInDto: UserLogInDto) {
        const userExists = await this.findUserByEmail(userLogInDto.email);
        if (!userExists) throw new NotFoundException('Email is not available.');

        const isPasswordValid = await bcrypt.compare(userLogInDto.password, userExists.password);
        if (!isPasswordValid) throw new BadRequestException('Incorrect password.');

        const accessToken = await this.accessToken(userExists);

        return {
            "token": accessToken
        };
    }

    async accessToken(user: UserEntity) {
        return sign(
            { id: user.id, email: user.email },
            Buffer.from(process.env.ACCESS_TOKEN_SECRET_KEY || "default-secret"),
            { expiresIn: Number(process.env.ACCESS_TOKEN_EXPIRE_TIME_IN_MINUTS) * 60 }
        );
    }

    async findUserByEmail(email: string) {
        return await this.userRepository.findOneBy({ email });
    }
}
