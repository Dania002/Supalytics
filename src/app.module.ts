import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { QuestionsModule } from './questions/questions.module';
import { CompanyModule } from './company/company.module';
import { AdminDbModule } from './admin-db/admin-db.module';
import dataSource from './database/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...dataSource.options,
        autoLoadEntities: true,
      }),
    }),
    AuthModule,
    QuestionsModule,
    CompanyModule,
    AdminDbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
