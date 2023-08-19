import 'dotenv/config'
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: String(process.env.DATABASE_HOST),
  username: String(process.env.DATABASE_USER),
  password: String(process.env.DATABASE_PASSWORD),
  database: String(process.env.DATABASE_DATABASE),
  migrations: ["./dist/database/migrations/*.ts"],
  entities: ["./dist/modules/**/entities/*.ts"],
  logging: true,
})

AppDataSource.initialize()
  .then(() => console.log("conectado ao banco de dados: ", process.env.DATABASE_DATABASE))
  .catch(e => console.log("erro ao conectar ao banco de dados", e.message))

export default AppDataSource