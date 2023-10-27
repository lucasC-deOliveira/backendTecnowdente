import { ClientEntity } from '../../../../../clients/entities/ClientEntity';
import { ServiceEntity } from '../../../../../service/entities/serviceEntity';

class FullService extends ServiceEntity {
  quantity: number;
}

class FullDemands {
  id: string;
  patient: string;
  type: string;
  deadline: Date;
  state: string;
  amount: number;
  cost: number;
  observations: string;
  receivement: Date;
  client: ClientEntity;
  services: FullService[];
}

export class GetReportByIdUseCaseOutput {
  id?: string;

  client: ClientEntity;

  client_id: string;

  to: Date;

  from: Date;

  status: string;

  created_at: Date;

  updated_at?: Date;

  demands: FullDemands[];
}
