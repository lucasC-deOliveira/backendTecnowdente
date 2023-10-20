import { DataSource } from 'typeorm';
import 'dotenv/config';

const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: String(process.env.DATABASE_HOST),
  username: String(process.env.DATABASE_USER),
  password: String(process.env.DATABASE_PASSWORD),
  database: String(process.env.DATABASE_DATABASE),
  migrations: ['./src/database/typeorm/migrations/*.ts'],
  logging: true,
});

export default AppDataSource;
