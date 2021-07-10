import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config';

describe('Config', () => {
  let provider: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile();

    provider = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
