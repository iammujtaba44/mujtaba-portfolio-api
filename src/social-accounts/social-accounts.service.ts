import { Injectable } from '@nestjs/common';
import { CreateSocialAccountDto } from './dto/create-social-account.dto';
import { UpdateSocialAccountDto } from './dto/update-social-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SocialAccount } from './entities/social-account.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class SocialAccountsService {
  constructor(
    @InjectRepository(SocialAccount)
    private repository: Repository<SocialAccount>,
  ) {}

  async create(dto: CreateSocialAccountDto) {
    const entity = new SocialAccount();
    Object.assign(entity, dto);
    const account = this.repository.create(entity);
    const response = await this.repository.save(account);
    return {
      success: true,
      data: response,
    };
  }

  async findAll() {
    const response = await this.repository.find();
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

  async update(id: string, dto: UpdateSocialAccountDto) {
    await this.repository.update({ _id: new ObjectId(id) } as any, dto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    const response = await this.findOne(id);
    await this.repository.delete({ _id: new ObjectId(id) } as any);
    return response;
  }
}
