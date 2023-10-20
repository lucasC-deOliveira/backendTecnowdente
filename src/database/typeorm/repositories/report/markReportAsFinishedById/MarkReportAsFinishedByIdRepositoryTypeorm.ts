import { In, Repository } from 'typeorm';
import { MarkReportAsFinishedByIdRepository } from '../../../../../domain/modules/reports/repositories/markReportAsFinisehdById/MarkReportAsFinishedByIdRepository';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';
import { ReportEntityTypeorm } from '../../../entities/report/reportEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MarkReportAsFinishedByIdRepositoryTypeorm extends MarkReportAsFinishedByIdRepository {
  constructor(
    @InjectRepository(ReportEntityTypeorm)
    private readonly reportRepository: Repository<ReportEntityTypeorm>,
    @InjectRepository(DemandEntityTypeorm)
    private readonly demandRepository: Repository<DemandEntityTypeorm>,
  ) {
    super();
  }

  async run(id: string): Promise<void> {
    const report = await this.reportRepository.findOneBy({ id });

    if (report?.id) {
      const manager = this.reportRepository.manager;
      await manager.transaction(async (transactionalEntityManager) => {
        const demands = await this.demandRepository.find({
          where: { report_id: report.id },
        });
        if (demands.length > 0) {
          await transactionalEntityManager.update(
            DemandEntityTypeorm,
            { id: In(demands.map((demand) => demand.id)) },
            { state: 'Finalizado' },
          );
        }
        await transactionalEntityManager.update(
          ReportEntityTypeorm,
          { id },
          { status: 'Finalizado' },
        );
      });
    }
  }
}
