import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { SocialAccountsModule } from './social-accounts/social-accounts.module';
import { TechStackModule } from './tech-stack/tech-stack.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { AppConfigsModule } from './app-configs/app-configs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DATABASE_URL,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProjectsModule,
    SocialAccountsModule,
    TechStackModule,
    ExperiencesModule,
    AppConfigsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
