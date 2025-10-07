import { Injectable } from '@nestjs/common';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Projects } from './entities/project.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Projects)
    private repository: Repository<Projects>,
  ) {}

  async create(dto: CreateProjectDto) {
    const entity = new Projects();
    Object.assign(entity, dto);
    const project = this.repository.create(entity);
    const response = await this.repository.save(project);
    return {
      success: true,
      data: response,
    };
  }

  async findAll() {
    const response = await this.repository.find();
    response.sort((a, b) => a.order - b.order);
    return {
      success: true,
      data: response,
    };
  }

  async findOne(id: string) {
    const response = await this.repository.findOne({
      where: { _id: new ObjectId(id) } as any,
    });
    return {
      success: true,
      data: response,
    };
  }

  async update(id: string, dto: UpdateProjectDto) {
    const response = await this.repository.update(id, dto);
    return {
      success: true,
      data: await this.findOne(id),
    };
  }

  async remove(id: string) {
    const response = await this.repository.delete(id);
    return {
      success: true,
      data: response,
    };
  }
}
