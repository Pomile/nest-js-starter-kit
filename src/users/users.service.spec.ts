import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { userProviders } from './users.repository';
import { DatabaseConnectionFactory } from '../database/database-service';
import { ConfigService } from '../config/config';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const dbconfig = {
      databaseType: 'relational',
      orm: 'typeorm',
      type: 'postgres',
    };

    const dbproviders = [
      {
        provide: 'DBCONNECTION',
        useFactory: async (configService: ConfigService) => {
          const connectionFactory = new DatabaseConnectionFactory(
            dbconfig,
            configService,
          );
          return await connectionFactory.getConnection();
        },
        inject: [ConfigService],
      },
    ];
    const configOptions = {
      provide: 'CONFIG_OPTIONS',
      useValue: { env: 'test' },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        configOptions,
        ConfigService,
        ...dbproviders,
        ...userProviders,
        UsersService,
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
