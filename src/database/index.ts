import 'dotenv/config'
import { DataSource } from 'typeorm';
import { User } from '../modules/accounts/entities/user';
import { Demand } from '../modules/demand/entities/Demand';
import { Service } from '../modules/services/entities/service';
import { Client } from '../modules/clients/entities/Client';
import { Reports } from '../modules/reports/entities/report';

const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: String(process.env.DATABASE_HOST),
  username: String(process.env.DATABASE_USER),
  password: String(process.env.DATABASE_PASSWORD),
  database: String(process.env.DATABASE_DATABASE),
  migrations: ["src/database/migrations/*.ts"],
  entities: [User, Demand, Service, Reports, Client],
  logging: true,
})

AppDataSource.initialize()
  .then(() => console.log("conectado ao banco de dados: ", process.env.DATABASE_DATABASE))
  .catch(e => console.log("erro ao conectar ao banco de dados", e.message))

export default AppDataSource