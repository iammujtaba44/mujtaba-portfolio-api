import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppConfigDto } from './dto/create-app-config.dto';
import { UpdateAppConfigDto } from './dto/update-app-config.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AppConfig } from './entities/app-config.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class AppConfigsService {
  constructor(
    @InjectRepository(AppConfig)
    private readonly appConfigRepository: MongoRepository<AppConfig>,
  ) {}

  async create(createAppConfigDto: CreateAppConfigDto) {
    const { key, value, isPublic = false, description } = createAppConfigDto;
    const existing = await this.appConfigRepository.findOne({ where: { key } });

    if (existing) {
      existing.value = this.mergeValues(existing.value, value);
      if (typeof isPublic === 'boolean') existing.isPublic = isPublic;
      if (typeof description !== 'undefined')
        existing.description = description;
      const data = await this.appConfigRepository.save(existing);
      return {
        success: true,
        data,
      };
    }

    const created = this.appConfigRepository.create({
      key,
      value,
      isPublic,
      description,
    });
    const data = await this.appConfigRepository.save(created);
    return {
      success: true,
      data,
    };
  }

  async findAll() {
    const data = await this.appConfigRepository.find();
    return {
      success: true,
      data,
    };
  }

  async findOne(key: string) {
    const config = await this.appConfigRepository.findOne({ where: { key } });
    if (!config)
      throw new NotFoundException(`Config with key '${key}' not found`);
    return {
      success: true,
      data: config,
    };
  }

  async update(key: string, updateAppConfigDto: UpdateAppConfigDto) {
    const existing = await this.appConfigRepository.findOne({ where: { key } });
    if (!existing)
      throw new NotFoundException(`Config with key '${key}' not found`);

    const { value, isPublic, description } = updateAppConfigDto;

    if (typeof value !== 'undefined') {
      existing.value = this.mergeValues(existing.value, value);
    }

    if (typeof isPublic === 'boolean') existing.isPublic = isPublic;
    if (typeof description !== 'undefined') existing.description = description;

    const data = await this.appConfigRepository.save(existing);
    return {
      success: true,
      data,
    };
  }

  async remove(key: string) {
    const result = await this.appConfigRepository.delete({ key: key as any });
    if (!result.affected) {
      throw new NotFoundException(`Config with key '${key}' not found`);
    }
    return {
      success: true,
      data: { deleted: true },
    };
  }

  private mergeValues(existingValue: any, incomingValue: any) {
    if (
      this.isPlainObject(existingValue) &&
      this.isPlainObject(incomingValue)
    ) {
      return { ...existingValue, ...incomingValue };
    }
    return incomingValue;
  }

  private isPlainObject(value: any): value is Record<string, any> {
    return (
      value !== null &&
      typeof value === 'object' &&
      (value.constructor === Object || Object.getPrototypeOf(value) === null)
    );
  }
}
