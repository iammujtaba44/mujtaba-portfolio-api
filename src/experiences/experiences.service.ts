import { Injectable } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Repository } from 'typeorm';
import { Experiences } from './entities/experience.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class ExperiencesService {
  constructor(
    @InjectRepository(Experiences)
    private repository: Repository<Experiences>,
  ) {}

  async create(createExperienceDto: CreateExperienceDto) {
    try {
      const entity = new Experiences();
      Object.assign(entity, createExperienceDto);
      const data = this.repository.create(entity);
      const response = await this.repository.save(data);
      return {
        success: true,
        date: response,
      };
    } catch (error) {
      return {
        success: false,
        date: error,
      };
    }
  }

  async findAll() {
    const response = await this.repository.find();
    return {
      success: true,
      date: response,
    };
  }

  async findOne(id: string) {
    const response = await this.repository.findOne({
      where: { _id: new ObjectId(id) },
    });
    return {
      success: true,
      date: response,
    };
  }

  async update(id: string, updateExperienceDto: UpdateExperienceDto) {
    const response = await this.repository.update(id, updateExperienceDto);
    return {
      success: true,
      date: response,
    };
  }

  async remove(id: string) {
    const response = await this.repository.delete(id);
    return {
      success: true,
      date: response,
    };
  }
}
