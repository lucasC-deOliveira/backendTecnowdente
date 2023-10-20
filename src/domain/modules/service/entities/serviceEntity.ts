import { DemandServiceDetailsEntity } from '../../demand/entities/DemandServiceDetailsEntity';

export class ServiceEntity {
  id?: string;

  name: string;

  amount: number;

  cost: number;

  active?: boolean;

  demandsDetails: DemandServiceDetailsEntity[];
}
