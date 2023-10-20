import { ICreateReportDTO } from '../../dtos/create';
import { CreateReportRepository } from '../../repositories/createReport/CreateReportRepository';
import { BaseService } from '../../../../base/baseService/baseService';

class CreateReportUseCase extends BaseService {
  constructor(private createReportRepository: CreateReportRepository) {
    super();
  }

  async execute({ to, from, client_id }: ICreateReportDTO): Promise<void> {
    await this.createReportRepository.run({ to, from, client_id });
  }
}

export { CreateReportUseCase };
