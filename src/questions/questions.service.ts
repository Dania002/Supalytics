import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SectionOneEntity } from './entities/sectionOne.entity';
import { Repository } from 'typeorm';
import { SectionOneDto } from './dto/section-one.dto';
import { UserEntity } from 'src/auth/entities/user.entity';
import { SectionTwoEntity } from './entities/sectionTwo.entity';
import { SectionTwoDto } from './dto/section-two.dto';
import { extname } from 'path';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { SectionFourEntity } from './entities/sectionFour.entity';
import { SectionThreeEntity } from './entities/sectionThree.entity';
import { SectionFourDto } from './dto/section-four.dto';
import { SectionThreeDto } from './dto/section-three.dto';
import { SectionFiveDto } from './dto/section-five.dto';
import { SectionFiveEntity } from './entities/sectionFive.entity';
import { SectionSixDto } from './dto/section-six.dto';
import { SectionSixEntity } from './entities/sectionSix.entity';
import { SectionSevenDto } from './dto/section-seven.dto';
import { SectionSevenEntity } from './entities/sectionSeven.entity';
import { SectionEightEntity } from './entities/sectionEight.entity';
import { SectionNineDto } from './dto/section-nine.dto';
import { SectionNineEntity } from './entities/sectionNine.entity';
import { SectionEightDto } from './dto/section-eight.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(SectionOneEntity)
    private sectionOneEntity: Repository<SectionOneEntity>,

    @InjectRepository(SectionTwoEntity)
    private sectionTwoRepo: Repository<SectionTwoEntity>,

    @InjectRepository(SectionThreeEntity)
    private sectionThreeRepo: Repository<SectionThreeEntity>,

    @InjectRepository(SectionFourEntity)
    private sectionFourRepo: Repository<SectionFourEntity>,

    @InjectRepository(SectionFiveEntity)
    private sectionFiveRepo: Repository<SectionFiveEntity>,

    @InjectRepository(SectionSixEntity)
    private sectionSixRepo: Repository<SectionSixEntity>,

    @InjectRepository(SectionSevenEntity)
    private sectionSevenRepo: Repository<SectionSevenEntity>,

    @InjectRepository(SectionEightEntity)
    private sectionEightRepo: Repository<SectionEightEntity>,

    @InjectRepository(SectionNineEntity)
    private sectionNineRepo: Repository<SectionNineEntity>,
  ) { }

  async sectionOne(sectionOneDto: SectionOneDto, user: UserEntity) {
    const section = this.sectionOneEntity.create({
      ...sectionOneDto,
      userId: user.id,
      user: user,
    });

    return await this.sectionOneEntity.save(section);
  }

  async sectionTwo(dto: SectionTwoDto, file: Express.Multer.File, user: UserEntity) {
    if (!file) {
      throw new Error('File is missing');
    }

    const uploadDir = './uploads';
    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir);
    }

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`;
    const filePath = `${uploadDir}/${filename}`;

    writeFileSync(filePath, file.buffer);

    const section = this.sectionTwoRepo.create({
      ...dto,
      upload: filename,
      userId: user.id,
      user: user,
    });

    return await this.sectionTwoRepo.save(section);
  }

  async sectionThree(dto: SectionThreeDto, user: UserEntity) {
    const section = this.sectionThreeRepo.create({
      ...dto,
      userId: user.id,
      user,
    });

    return this.sectionThreeRepo.save(section);
  }

  async sectionFour(dto: SectionFourDto, user: UserEntity) {
    const section = this.sectionFourRepo.create({
      ...dto,
      userId: user.id,
      user,
    });

    return this.sectionFourRepo.save(section);
  }

  async sectionFive(dto: SectionFiveDto, user: UserEntity) {
    const section = this.sectionFiveRepo.create({
      ...dto,
      userId: user.id,
      user,
    });

    return this.sectionFiveRepo.save(section);
  }

  async sectionSix(dto: SectionSixDto, user: UserEntity) {
    const section = this.sectionSixRepo.create({
      ...dto,
      userId: user.id,
      user,
    });

    return this.sectionSixRepo.save(section);
  }

  async sectionSeven(dto: SectionSevenDto, user: UserEntity) {
    const section = this.sectionSevenRepo.create({
      ...dto,
      userId: user.id,
      user,
    });

    return this.sectionSevenRepo.save(section);
  }

  async sectionEight(dto: SectionEightDto, user: UserEntity) {
    const section = this.sectionEightRepo.create({
      ...dto,
      userId: user.id,
      user,
    });

    return this.sectionEightRepo.save(section);
  }

  async sectionNine(dto: SectionNineDto, user: UserEntity) {
    const section = this.sectionNineRepo.create({
      ...dto,
      userId: user.id,
      user,
    });

    return this.sectionNineRepo.save(section);
  }
}
