import { Inject, Injectable, Optional } from '@nestjs/common';
import 'dotenv/config';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { EnvConfig } from './interfaces';
import { ConfigOption } from './interfaces/config-option.interface';

@Injectable()
export class ConfigService {
  private envConfig: EnvConfig;
  private testEnvConfig: EnvConfig;
  private env: string;

  constructor(
    @Optional() @Inject('CONFIG_OPTIONS') private options: ConfigOption,
  ) {
    this.env = this.options.env || `${process.env.NODE_ENV}`;
    this.loadEnv(this.env);
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  setEnv(env: string): void {
    this.env = env;
  }

  getEnv(): string {
    return this.env;
  }

  setEnvConfig(env): void {
    const config = this.loadEnv(env);
    if (env === 'test') this.testEnvConfig = config;
    if (env !== 'test') this.envConfig = config;
  }
  getEnvConfig(env): string {
    if (env === 'test') return this.testEnvConfig[env];
    return this.envConfig[env];
  }

  loadEnv(env): void {
    const file = env === 'test' ? '.env.testing' : '.env';
    const envFile = path.resolve('./', '', file);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }
}
