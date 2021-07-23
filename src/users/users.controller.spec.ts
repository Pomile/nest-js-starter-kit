import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '../config/config';
import { DatabaseConnectionFactory } from '../database/database-service';
import { UsersController } from './users.controller';
import { userProviders } from './users.repository';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let userController: UsersController;

  beforeEach(async () => {
    const config = {
      databaseType: 'relational',
      orm: 'typeorm',
      type: 'postgres',
    };
    const configOptions = {
      provide: 'CONFIG_OPTIONS',
      useValue: { env: 'test' },
    };
    const dbproviders = [
      {
        provide: 'DBCONNECTION',
        useFactory: async (configService: ConfigService) => {
          const connectionFactory = new DatabaseConnectionFactory(
            config,
            configService,
          );
          return await connectionFactory.getConnection();
        },
        inject: [ConfigService],
      },
    ];
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        configOptions,
        ConfigService,
        ...dbproviders,
        ...userProviders,
        UsersService,
      ],
    }).compile();

    userController = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });
});
