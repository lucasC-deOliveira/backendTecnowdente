import { inject, injectable } from "tsyringe";
import { ICreateReportDTO } from "../../dtos/create";
import { IReportRepository } from "../../repositories/IReportRepository";


@injectable()
class CreateReportUseCase {

  constructor(
    @inject("ReportsRepository")
    private reportsRepository: IReportRepository
  ) { }

  async execute({
    to,
    from,
    client_id
  }: ICreateReportDTO): Promise<void> {

    await this.reportsRepository.create({ to, from, client_id })

  }

}

export { CreateReportUseCase }