import { Test, TestingModule } from '@nestjs/testing';
import { CreateDemandController } from './createDemand.controller';

describe('CreateDemandController', () => {
  let controller: CreateDemandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateDemandController],
    }).compile();

    controller = module.get<CreateDemandController>(CreateDemandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
