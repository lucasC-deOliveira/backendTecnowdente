import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/repositories/implementation/UserRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { IUsersTokensRepository } from "../../modules/accounts/repositories/IUserTokenRepository";
import { IClientsRepository } from "../../modules/clients/repositories/IClientsRepository";
import { ClientsRepository } from "../../modules/clients/repositories/implementations/ClientsRepository";
import { IDemandsRepository } from "../../modules/demand/repositories/IDemandsRepository";
import { DemandsRepository } from "../../modules/demand/repositories/implementations/DemandsRepository";
import { ReportRepository } from "../../modules/reports/repositories/implementations/ReportRepository";
import { IReportRepository } from "../../modules/reports/repositories/IReportRepository";
import { ServicesRepository } from "../../modules/services/repositories/implementations/ServicesRepository";
import { IServicesRepository } from "../../modules/services/repositories/IServicesRepository";
import { IDateProvider } from "../providers/dateProvider/IDateProvider";
import { DayjsDateProvider } from "../providers/dateProvider/implementations/dateProvider";
import { UsersTokensRepository } from "../../modules/accounts/repositories/implementation/UserTokensRepository";


container.registerSingleton<IDemandsRepository>("DemandsRepository", DemandsRepository)
container.registerSingleton<IClientsRepository>("ClientsRepository", ClientsRepository)
container.registerSingleton<IServicesRepository>("ServicesRepository", ServicesRepository)
container.registerSingleton<IUserRepository>("UsersRepository", UsersRepository)
container.registerSingleton<IUsersTokensRepository>("UsersTokensRepository", UsersTokensRepository)
container.registerSingleton<IDateProvider>("DayjsDateProvider", DayjsDateProvider)
container.registerSingleton<IReportRepository>("ReportsRepository", ReportRepository)

