import { ClientEntity } from '../../clients/entities/ClientEntity';
import { ReportEntity } from '../../reports/entities/reportEntity';
import { ServiceEntity } from '../../service/entities/serviceEntity';
import { DemandServiceDetailsEntity } from './DemandServiceDetailsEntity';

export class DemandEntity {
  id?: string;

  client: ClientEntity;

  client_id: string;

  patient: string;

  services: ServiceEntity[];

  servicesDetails: DemandServiceDetailsEntity[];

  type: string;

  deadline: Date;

  state: string;

  amount: number;

  cost: number;

  observations?: string;

  receivement: Date;

  report?: ReportEntity;

  report_id?: string;
}
