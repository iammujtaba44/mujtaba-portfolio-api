import { Test, TestingModule } from '@nestjs/testing';
import { AppConfigsController } from './app-configs.controller';
import { AppConfigsService } from './app-configs.service';

describe('AppConfigsController', () => {
  let controller: AppConfigsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppConfigsController],
      providers: [AppConfigsService],
    }).compile();

    controller = module.get<AppConfigsController>(AppConfigsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
