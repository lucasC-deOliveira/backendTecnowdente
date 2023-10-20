import { In, Repository } from 'typeorm';
import { DeleteReportByIdRepository } from '../../../../../domain/modules/reports/repositories/deleteReportById/DeleteReportByIdRepository';
import { ReportEntityTypeorm } from '../../../entities/report/reportEntityTypeorm';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';

export class DeleteReportByIdRepositoryTypeorm extends DeleteReportByIdRepository {
  constructor(
    private readonly reportRepository: Repository<ReportEntityTypeorm>,
    private readonly demandRepository: Repository<DemandEntityTypeorm>,
  ) {
    super();
  }
  async run(id: string): Promise<void> {
    const report = await this.reportRepository.findOneBy({ id });

    if (report) {
      const manager = this.reportRepository.manager;
      await manager.transaction(async (transactionalEntityManager) => {
        const demands = await this.demandRepository.find({
          where: { report_id: report.id },
        });
        if (demands.length > 0) {
          await transactionalEntityManager.update(
            DemandEntityTypeorm,
            { id: In(demands?.map((demand) => demand.id)) },
            { report_id: null },
          );
        }
        await transactionalEntityManager.delete(ReportEntityTypeorm, { id });
      });
    }
  }
}
