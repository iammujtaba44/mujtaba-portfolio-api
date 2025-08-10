import { Module } from '@nestjs/common';
import { ExperiencesService } from './experiences.service';
import { ExperiencesController } from './experiences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experiences } from './entities/experience.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Experiences])],
  controllers: [ExperiencesController],
  providers: [ExperiencesService],
})
export class ExperiencesModule {}
