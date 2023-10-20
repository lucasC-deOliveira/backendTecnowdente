import { AppError } from '../../../../errors/AppError';
import { ReportEntity } from '../../entities/reportEntity';
import { FindReportByIdRepository } from '../../repositories/findReportById/FindReportByIdRepository';

class ListReportByIDUseCase {
  constructor(private findReportByIdRepository: FindReportByIdRepository) {}

  async execute(id: string): Promise<ReportEntity> {
    const report = await this.findReportByIdRepository.run(id);

    if (!report) {
      throw new AppError('does not exists a report with this id');
    }

    return report;
  }
}

export { ListReportByIDUseCase };
