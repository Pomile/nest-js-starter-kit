
import { ConfigService } from 'src/config/config';
import { TypeORMDatabaseConnectionFactory } from './database-typeorm';
import { DatabaseConfig } from './interfaces/database-config.interface';

export class DatabaseConnectionFactory {
  private readonly databaseConfig: DatabaseConfig;
  private configService: ConfigService;
  private useFactory;
  private connection;
  constructor(private config: DatabaseConfig, configServe: ConfigService) {
    this.configService = configServe;
    this.databaseConfig = config;
    if (config.databaseType === 'relational' && config.orm === 'typeorm') {
      const typeormFactory = new TypeORMDatabaseConnectionFactory(
        config,
        configServe,
      );
      this.connection = typeormFactory.getConnection();
    }
  }
  getConnection() {
    return this.connection;
  }
}
