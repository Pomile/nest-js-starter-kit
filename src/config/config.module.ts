import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from './config';
import { CONFIG_OPTIONS } from './constants';

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {
  static register(options): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
