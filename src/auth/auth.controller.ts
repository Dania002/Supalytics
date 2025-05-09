import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserSignUpDto } from './dto/user-signup.dto';
import { UserLogInDto } from './dto/user-login.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    ) { }

    @Post('signup')
    async signup(@Body() userSignUpDto: UserSignUpDto) {
        return await this.authService.signup(userSignUpDto);
    }

    @Post('login')
    async signin(@Body() userLogInDto: UserLogInDto) {
        return this.authService.login(userLogInDto);
    }
}