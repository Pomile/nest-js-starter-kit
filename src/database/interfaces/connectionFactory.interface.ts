import { DatabaseOptions } from './database-option.interface';

export interface ConnectionFactory {
  createConnectOptions(): Promise<DatabaseOptions> | DatabaseOptions;
}
