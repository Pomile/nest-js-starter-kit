import { join } from 'path';
import { ConfigService } from 'src/config/config';
import { createConnection } from 'typeorm';
import { DatabaseConfig } from './interfaces/database-config.interface';

export class TypeORMDatabaseConnectionFactory {
  private connection;
  private readonly configService;
  private readonly databaseConfig: DatabaseConfig;

  constructor(private config, configServe: ConfigService) {
    this.configService = configServe;
    this.databaseConfig = config;
    this.connection = this.setConnection(config, configServe);
  }

  setConnection(options: any, configService: ConfigService) {
    return createConnection({
      type: options.type,
      host: configService.get('HOST'),
      port: Number(configService.get('DATABASE_PORT')),
      username: configService.get('DATABASE_USERNAME'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_NAME'),
      entities: [join(__dirname, '/../**/', '*.entity.{ts,js}')],
      synchronize: true,
    });
  }

  getConnection() {
    return this.connection;
  }

  getConfigService() {
    return this.configService;
  }
  getDatabaseConfig() {
    return this.databaseConfig;
  }
}
