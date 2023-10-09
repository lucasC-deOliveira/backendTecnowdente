import { DataSource } from "typeorm"
import 'dotenv/config'
import { Client } from "./src/modules/clients/entities/Client"
import { Reports } from "./src/modules/reports/entities/report"
import { Service } from "./src/modules/services/entities/service"
import { Demand } from "./src/modules/demand/entities/Demand"
import { User } from "./src/modules/accounts/entities/user"
import { DemandServiceDetails } from "./src/modules/demand/entities/DemandServiceDetails"

const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: String(process.env.DATABASE_HOST),
  username: String(process.env.DATABASE_USER),
  password: String(process.env.DATABASE_PASSWORD),
  database: String(process.env.DATABASE_DATABASE),
  migrations: ["src/database/migrations/*.ts"],
  entities: [User, Demand, Service, Reports, Client,DemandServiceDetails],
  logging: true,
})

export default AppDataSource