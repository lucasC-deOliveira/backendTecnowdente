import { ServiceEntity } from '../../service/entities/serviceEntity';
import { DemandEntity } from './DemandEntity';

export class DemandServiceDetailsEntity {
  id?: string;

  created_at: Date;

  quantity: number;

  demand: DemandEntity;

  demand_id: string;

  service_id: string;

  service: ServiceEntity;
}
