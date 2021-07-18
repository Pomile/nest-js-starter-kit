import { Global, Module } from '@nestjs/common';
import { ConfigService } from 'src/config/config';
import { DatabaseConnectionFactory } from './database-service';

@Global()
@Module({
  providers: [],
  exports: ['DBCONNECTION'],
})
export class DatabaseModule {
  static forRoot(options) {
    const config = options.config;
    const providers = [
      {
        provide: 'DBCONNECTION',
        useFactory: async (configService: ConfigService) => {
          const connectionFactory = new DatabaseConnectionFactory(
            config,
            configService,
          );
          return await connectionFactory.getConnection();
        },
        inject: [options.useClass],
      },
      {
        provide: 'DATABASE_OPTIONS',
        useValue: options,
      },
    ];
    return {
      module: DatabaseModule,
      providers,
      exports: ['DBCONNECTION'],
    };
  }
}
