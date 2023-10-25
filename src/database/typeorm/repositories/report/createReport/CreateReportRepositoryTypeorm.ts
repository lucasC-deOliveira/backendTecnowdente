import { Between, In, Repository } from 'typeorm';
import { CreateReportRepository } from '../../../../../domain/modules/reports/repositories/createReport/CreateReportRepository';
import { CreateReportRepositoryInput } from '../../../../../domain/modules/reports/useCases/create/adapters/input/CreateReportUseCaseInput';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';
import { ReportEntityTypeorm } from '../../../entities/report/reportEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateReportRepositoryTypeorm extends CreateReportRepository {
  constructor(
    @InjectRepository(ReportEntityTypeorm)
    private readonly reportRepository: Repository<ReportEntityTypeorm>,
    @InjectRepository(DemandEntityTypeorm)
    private readonly demandRepository: Repository<DemandEntityTypeorm>,
  ) {
    super();
  }
  async run({
    client_id,
    to,
    from,
    demands,
  }: CreateReportRepositoryInput): Promise<void> {
    const manager = this.reportRepository.manager;
    await manager.transaction(async (transactionalEntityManager) => {
      const report = this.reportRepository.create({
        to,
        from,
        client_id,
        status: 'PENDENTE',
      });

      await transactionalEntityManager.save(report);
      console.log(demands);
      await transactionalEntityManager.update(
        DemandEntityTypeorm,
        { id: In(demands) },
        { report_id: report.id },
      );
    });
  }
}
