import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { CreateTechStackDto } from './dto/create-tech-stack.dto';
import { UpdateTechStackDto } from './dto/update-tech-stack.dto';
import { TechStack } from './entities/tech-stack.entity';

@Injectable()
export class TechStackService {
  constructor(
    @InjectRepository(TechStack)
    private techStackRepository: Repository<TechStack>,
  ) {}

  async create(createTechStackDto: CreateTechStackDto) {
    const entity = new TechStack();

    Object.assign(entity, createTechStackDto);

    const techStack = this.techStackRepository.create(entity);
    return {
      success: true,
      data: await this.techStackRepository.save(techStack),
    };
  }

  async findAll() {
    const response = await this.techStackRepository.find();
    return {
      success: true,
      data: response,
    };
  }

  async findOne(id: string) {
    try {
      const response = await this.techStackRepository.findOne({
        where: { _id: new ObjectId(id) } as any,
      });
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      console.error('::: Error finding tech stack:', error);
      throw new NotFoundException('Tech stack not found');
    }
  }

  async update(id: string, updateTechStackDto: UpdateTechStackDto) {
    await this.techStackRepository.update(
      { _id: new ObjectId(id) } as any,
      updateTechStackDto,
    );
    return await this.findOne(id);
  }

  async remove(id: string) {
    const techStack = await this.findOne(id);
    await this.techStackRepository.delete({ _id: new ObjectId(id) } as any);
    return techStack;
  }
}
