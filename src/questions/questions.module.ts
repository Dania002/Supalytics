import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { SectionOneEntity } from './entities/sectionOne.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionTwoEntity } from './entities/sectionTwo.entity';
import { SectionThreeEntity } from './entities/sectionThree.entity';
import { SectionFourEntity } from './entities/sectionFour.entity';
import { SectionFiveEntity } from './entities/sectionFive.entity';
import { SectionSixEntity } from './entities/sectionSix.entity';
import { SectionSevenEntity } from './entities/sectionSeven.entity';
import { SectionEightEntity } from './entities/sectionEight.entity';
import { SectionNineEntity } from './entities/sectionNine.entity';
import { UserEntity } from 'src/auth/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    UserEntity,
    SectionOneEntity,
    SectionTwoEntity,
    SectionThreeEntity,
    SectionFourEntity,
    SectionFiveEntity,
    SectionSixEntity,
    SectionSevenEntity,
    SectionEightEntity,
    SectionNineEntity
  ])
],
  controllers: [QuestionsController],
  providers: [QuestionsService],
  exports: [QuestionsService]
})

export class QuestionsModule { }
