import { ClientEntity } from '../../clients/entities/ClientEntity';
import { DemandEntity } from '../../demand/entities/DemandEntity';

export class ReportEntity {
  id?: string;

  client: ClientEntity;

  client_id: string;

  to: Date;

  from: Date;

  status: string;

  created_at: Date;

  updated_at?: Date;

  demands: DemandEntity[];
}
