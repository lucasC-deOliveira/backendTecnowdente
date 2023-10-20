import { AppError } from '../../../../errors/AppError';
import { FindReportByIdRepository } from '../../repositories/findReportById/FindReportByIdRepository';
import { DeleteReportByIdRepository } from '../../repositories/deleteReportById/DeleteReportByIdRepository';

export class DeleteReportUseCase {
  constructor(
    private findReportByIdRepository: FindReportByIdRepository,
    private deleteReportByIdRepository: DeleteReportByIdRepository,
  ) {}
  async execute(id: string): Promise<void> {
    const report = await this.findReportByIdRepository.run(id);
    if (!report) {
      throw new AppError('Report not found');
    }

    await this.deleteReportByIdRepository.run(id);
  }
}
