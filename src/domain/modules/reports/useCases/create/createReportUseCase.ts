import { ICreateReportDTO } from '../../dtos/create';
import { CreateReportRepository } from '../../repositories/createReport/CreateReportRepository';
import { BaseService } from '../../../../base/baseService/baseService';
import { CreateReportRepositoryInput } from './adapters/input/CreateReportUseCaseInput';
import { CreateReportUseCaseInput } from '../../repositories/createReport/adapters/input/CreateReportRepositoryInput';

class CreateReportUseCase extends BaseService {
  constructor(private createReportRepository: CreateReportRepository) {
    super();
  }

  async execute({
    to,
    from,
    client_id,
    demands,
  }: CreateReportUseCaseInput): Promise<void> {
    await this.createReportRepository.run({ to, from, client_id, demands });
  }
}

export { CreateReportUseCase };
