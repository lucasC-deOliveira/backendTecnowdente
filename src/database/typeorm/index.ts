import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntityTypeorm } from './entities/account/userEntityTypeorm';
import { DemandEntityTypeorm } from './entities/demand/DemandEntityTypeorm';
import { ServiceEntityTypeorm } from './entities/service/service';
import { ReportEntityTypeorm } from './entities/report/reportEntityTypeorm';
import { ClientEntityTypeorm } from './entities/client/ClientEntityTypeorm';
import { DemandServiceDetailsEntityTypeorm } from './entities/demand/DemandServiceDetailsEntityTypeorm';
import { UserTokensEntityTypeorm } from './entities/account/userTokensEntityTypeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  port: 5432,
  host: String(process.env.DATABASE_HOST),
  username: String(process.env.DATABASE_USER),
  password: String(process.env.DATABASE_PASSWORD),
  database: String(process.env.DATABASE_DATABASE),
  migrations: [],
  entities: [
    UserEntityTypeorm,
    DemandEntityTypeorm,
    ServiceEntityTypeorm,
    ReportEntityTypeorm,
    ClientEntityTypeorm,
    UserTokensEntityTypeorm,
    DemandServiceDetailsEntityTypeorm,
  ],
  logging: true,
};

const AppDataSource = new DataSource(config);

// AppDataSource.initialize()
//   .then(() =>
//     console.log('conectado ao banco de dados: ', process.env.DATABASE_DATABASE),
//   )
//   .catch((e) => console.log('erro ao conectar ao banco de dados', e.message));

export default AppDataSource;
