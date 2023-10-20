import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { ReportEntity } from '../../../../domain/modules/reports/entities/reportEntity';
import { ClientEntityTypeorm } from '../client/ClientEntityTypeorm';
import { DemandEntityTypeorm } from '../demand/DemandEntityTypeorm';
import { randomUUID } from 'crypto';

@Entity('reports')
export class ReportEntityTypeorm extends ReportEntity {
  @PrimaryColumn()
  id?: string;

  @ManyToOne(() => ClientEntityTypeorm)
  @JoinColumn({ name: 'client_id' })
  client: ClientEntityTypeorm;

  @Column()
  client_id: string;

  @CreateDateColumn()
  to: Date;

  @CreateDateColumn()
  from: Date;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at?: Date;

  @OneToMany(() => DemandEntityTypeorm, (demand) => demand.report_id)
  demands: DemandEntityTypeorm[];

  constructor() {
    super();
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
