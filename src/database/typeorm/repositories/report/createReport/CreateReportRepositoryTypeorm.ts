import { Between, In, Repository } from 'typeorm';
import { CreateReportRepository } from '../../../../../domain/modules/reports/repositories/createReport/CreateReportRepository';
import { CreateReportRepositoryInput } from '../../../../../domain/modules/reports/useCases/create/adapters/input/CreateReportUseCaseInput';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';
import { ReportEntityTypeorm } from '../../../entities/report/reportEntityTypeorm';

export class CreateReportRepositoryTypeorm extends CreateReportRepository {
  constructor(
    private readonly reportRepository: Repository<ReportEntityTypeorm>,
    private readonly demandRepository: Repository<DemandEntityTypeorm>,
  ) {
    super();
  }
  async run({
    client_id,
    from,
    to,
  }: CreateReportRepositoryInput): Promise<void> {
    const manager = this.reportRepository.manager;
    await manager.transaction(async (transactionalEntityManager) => {
      const report = this.reportRepository.create({
        to,
        from,
        client_id,
        status: 'PENDENTE',
      });

      const demands = await this.demandRepository.find({
        where: {
          client_id,
          state: 'Entregue',
          receivement: Between(new Date(from), new Date(to)),
          report_id: null,
        },
      });

      const demands_ids = demands.map((demand) => demand.id);

      await transactionalEntityManager.save(report);

      await transactionalEntityManager.update(
        DemandEntityTypeorm,
        { id: In(demands_ids) },
        { report_id: report.id },
      );
    });
  }
}
