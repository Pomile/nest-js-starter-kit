import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config';

const configOptions = {
  provide: 'CONFIG_OPTIONS',
  useValue: { env: 'test' },
};

describe('Config', () => {
  let provider: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService, configOptions],
    }).compile();

    provider = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
