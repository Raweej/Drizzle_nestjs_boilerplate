export interface DatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  url?: string;
}

export interface NestConfig {
  NODE_ENV: string;
  PORT: number;
}
export interface Config {
  database: DatabaseConfig;
  nest: NestConfig;
}

const configuration = (): Config => ({
  nest: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: Number(process.env.PORT || 3000),
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    url: process.env.DATABASE_URL,
  },
});

export default configuration;
