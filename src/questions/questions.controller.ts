import { Body, Controller, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { SectionOneDto } from './dto/section-one.dto';
import { UserEntity } from 'src/auth/entities/user.entity';
import { JwtAuthGuard } from 'utility/guards/JwtAuth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { SectionTwoDto } from './dto/section-two.dto';
import { Express } from 'express';
import { SectionThreeDto } from './dto/section-three.dto';
import { SectionFourDto } from './dto/section-four.dto';
import { SectionFiveDto } from './dto/section-five.dto';
import { SectionSixDto } from './dto/section-six.dto';
import { SectionSevenDto } from './dto/section-seven.dto';
import { SectionEightDto } from './dto/section-eight.dto';
import { SectionNineDto } from './dto/section-nine.dto';

@Controller('questions')
export class QuestionsController {
    constructor(private readonly questionservice: QuestionsService) { }

    @UseGuards(JwtAuthGuard)
    @Post('SectionOne')
    async sectionOne(@Body() dto: SectionOneDto, @Request() req: { user: UserEntity }) {
        return this.questionservice.sectionOne(dto, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('SectionTwo')
    @UseInterceptors(FileInterceptor('upload'))
    async sectionTwo(
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: SectionTwoDto,
        @Request() req: { user: UserEntity },
    ) {
        return this.questionservice.sectionTwo(dto, file, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('sectionThree')
    async sectionThree(@Body() dto: SectionThreeDto, @Request() req: { user: UserEntity }) {
        return this.questionservice.sectionThree(dto, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('sectionFour')
    async sectionFour(@Body() dto: SectionFourDto, @Request() req: { user: UserEntity }) {
        return this.questionservice.sectionFour(dto, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('sectionFive')
    async sectionFive(@Body() dto: SectionFiveDto, @Request() req: { user: UserEntity }) {
        return this.questionservice.sectionFive(dto, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('sectionSix')
    async sectionSix(@Body() dto: SectionSixDto, @Request() req: { user: UserEntity }) {
        return this.questionservice.sectionSix(dto, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('sectionSeven')
    async sectionSeven(@Body() dto: SectionSevenDto, @Request() req: { user: UserEntity }) {
        return this.questionservice.sectionSeven(dto, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('sectionEight')
    async sectionEight(@Body() dto: SectionEightDto, @Request() req: { user: UserEntity }) {
        return this.questionservice.sectionEight(dto, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('sectionNine')
    async sectionNine(@Body() dto: SectionNineDto, @Request() req: { user: UserEntity }) {
        return this.questionservice.sectionNine(dto, req.user);
    }
}
