export interface DatabaseOptions {
  type: string;
  host: string;
  port: string;
  username: string;
  password: string;
  database: string;
  entities?: string;
  synchronize?: boolean;
}
