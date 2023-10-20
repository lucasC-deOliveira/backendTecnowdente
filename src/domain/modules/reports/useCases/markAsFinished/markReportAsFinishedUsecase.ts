import { AppError } from '../../../../errors/AppError';
import { FindReportByIdRepository } from '../../repositories/findReportById/FindReportByIdRepository';
import { MarkReportAsFinishedByIdRepository } from '../../repositories/markReportAsFinisehdById/MarkReportAsFinishedByIdRepository';

export class MarkReportAsFinishedUseCase {
  constructor(
    private readonly findReportByIdRepository: FindReportByIdRepository,
    private readonly markReportAsFinishedByIdRepository: MarkReportAsFinishedByIdRepository,
  ) {}
  async execute(id: string): Promise<void> {
    const report = await this.findReportByIdRepository.run(id);

    if (!report) {
      throw new AppError('Report not found');
    }

    await this.markReportAsFinishedByIdRepository.run(id);
  }
}
