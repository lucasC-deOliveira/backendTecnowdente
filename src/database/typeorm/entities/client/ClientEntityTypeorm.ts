import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { randomUUID } from 'crypto';
import { DemandEntityTypeorm } from '../demand/DemandEntityTypeorm';
import { ClientEntity } from '../../../../domain/modules/clients/entities/ClientEntity';

@Entity('clients')
export class ClientEntityTypeorm extends ClientEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => DemandEntityTypeorm, (demand) => demand.client_id)
  demands: DemandEntityTypeorm[];

  constructor() {
    super();
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
