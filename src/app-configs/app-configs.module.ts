import { Module } from '@nestjs/common';
import { AppConfigsService } from './app-configs.service';
import { AppConfigsController } from './app-configs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfig } from './entities/app-config.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppConfig])],
  controllers: [AppConfigsController],
  providers: [AppConfigsService],
})
export class AppConfigsModule {}
