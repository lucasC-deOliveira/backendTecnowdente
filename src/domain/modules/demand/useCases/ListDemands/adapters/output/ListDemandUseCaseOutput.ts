import { ClientEntity } from '../../../../../clients/entities/ClientEntity';
import { ServiceEntity } from '../../../../../service/entities/serviceEntity';

class FullService extends ServiceEntity {
  quantity: number;
}

export class FullDemands {
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

export class ListDemandsUseCaseOutput {
  demands: FullDemands[];
  totalItens: number;
}
