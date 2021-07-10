import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config';

@Module({
  providers: [ConfigService],
})
export class ConfigModule {
  static register(options): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
