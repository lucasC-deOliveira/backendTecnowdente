import { DemandEntity } from '../../demand/entities/DemandEntity';

export class ClientEntity {
  id?: string;

  name: string;

  cnpj: string;

  created_at: Date;

  demands: DemandEntity[];
}
