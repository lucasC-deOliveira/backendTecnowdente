import { ICreateReportDTO } from "../dtos/create";
import { Reports } from "../entities/report";

export interface IReportRepository {
  create: ({ to, from, client_id }: ICreateReportDTO) => Promise<void>,
  list: () => Promise<Reports[]>
  listByID: (id: string) => Promise<Reports>
  markAsFinished: (id: string) => Promise<void>
  delete: (id: string) => Promise<void>
}