import { Inject, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { EnvConfig } from './interfaces';

@Injectable()
export class ConfigService {
  private envConfig: EnvConfig;
  private testEnvConfig: EnvConfig;
  private env: string;

  constructor(@Inject('CONFIG_OPTIONS') private options) {
    if (!options.env) options.env = `${process.env.NODE_ENV}` || 'development';
    this.env = options.env;
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
    this.loadEnv(env);
  }

  loadEnv(env): EnvConfig {
    const file = env === 'test' ? '.env.testing' : '.env';
    const envFile = path.resolve('./', '', file);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }
}
