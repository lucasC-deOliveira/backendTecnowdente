import { AppError } from '../../../../errors/AppError';
import { ReportEntity } from '../../entities/reportEntity';
import { FindReportByIdRepository } from '../../repositories/findReportById/FindReportByIdRepository';
import { GetReportByIdUseCaseOutput } from './adapters/output/GetReportByIdUseCaseOutput';

export class ListReportByIdUseCase {
  constructor(private findReportByIdRepository: FindReportByIdRepository) {}

  async execute(id: string): Promise<GetReportByIdUseCaseOutput> {
    const report = await this.findReportByIdRepository.run(id);
    if (!report) {
      throw new AppError('does not exists a report with this id');
    }
    const parsedReport = {
      ...report,
      demands: report.demands.map((demand) => ({
        id: demand.id,
        patient: demand.patient,
        type: demand.type,
        deadline: demand.deadline,
        state: demand.state,
        amount: demand.amount,
        cost: demand.cost,
        observations: demand.observations,
        receivement: demand.receivement,
        client: demand.client,
        services: demand.services.map((service) => {
          const serviceDetails = demand.servicesDetails.find(
            (detail) => detail.service_id === service.id,
          );

          return {
            ...service,
            quantity: serviceDetails.quantity,
          };
        }),
      })),
    };

    return parsedReport;
  }
}
