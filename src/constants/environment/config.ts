export interface DatabaseConfig {
  url: string;
}
export interface Config {
  database: DatabaseConfig;
}

const configuration = (): Config => ({
  database: {
    url: process.env.DATABASE_URL,
  },
});
export default configuration;
