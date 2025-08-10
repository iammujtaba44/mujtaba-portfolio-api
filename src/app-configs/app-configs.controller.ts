import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppConfigsService } from './app-configs.service';
import { CreateAppConfigDto } from './dto/create-app-config.dto';
import { UpdateAppConfigDto } from './dto/update-app-config.dto';

@Controller('app-configs')
export class AppConfigsController {
  constructor(private readonly appConfigsService: AppConfigsService) {}

  @Post()
  create(@Body() createAppConfigDto: CreateAppConfigDto) {
    return this.appConfigsService.create(createAppConfigDto);
  }

  @Get()
  findAll() {
    return this.appConfigsService.findAll();
  }

  @Get(':key')
  findOne(@Param('key') key: string) {
    return this.appConfigsService.findOne(key);
  }

  @Patch(':key')
  update(
    @Param('key') key: string,
    @Body() updateAppConfigDto: UpdateAppConfigDto,
  ) {
    return this.appConfigsService.update(key, updateAppConfigDto);
  }

  @Delete(':key')
  remove(@Param('key') key: string) {
    return this.appConfigsService.remove(key);
  }
}
