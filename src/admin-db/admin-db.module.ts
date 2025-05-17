import { Module } from '@nestjs/common';
import { AdminDbController } from './admin-db.controller';
import { AdminDbService } from './admin-db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './entities/admin.entity';
import { CompanyEntity } from 'src/company/entity/company.entity';
import { UserEntity } from 'src/auth/entities/user.entity';
import { QuestionsModule } from 'src/questions/questions.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminEntity, CompanyEntity, UserEntity]),
    QuestionsModule,
    AuthModule
  ],
  controllers: [AdminDbController],
  providers: [AdminDbService]
})

export class AdminDbModule { }
