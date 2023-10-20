import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { randomUUID } from 'crypto';
import { DemandEntity } from '../../../../domain/modules/demand/entities/DemandEntity';
import { ServiceEntityTypeorm } from '../service/service';
import { DemandServiceDetailsEntityTypeorm } from './DemandServiceDetailsEntityTypeorm';
import { ClientEntityTypeorm } from '../client/ClientEntityTypeorm';
import { ReportEntityTypeorm } from '../report/reportEntityTypeorm';

@Entity('Demands')
export class DemandEntityTypeorm extends DemandEntity {
  @PrimaryColumn()
  id?: string;

  @ManyToOne(() => ClientEntityTypeorm)
  @JoinColumn({ name: 'client_id' })
  client: ClientEntityTypeorm;

  @Column()
  client_id: string;

  @Column()
  patient: string;

  @ManyToMany(() => ServiceEntityTypeorm)
  @JoinTable({
    name: 'DemandServiceDetails',
    joinColumns: [{ name: 'demand_id' }],
    inverseJoinColumns: [{ name: 'service_id' }],
  })
  services: ServiceEntityTypeorm[];

  @OneToMany(
    () => DemandServiceDetailsEntityTypeorm,
    (demandServiceDetails) => demandServiceDetails.demand,
  )
  servicesDetails: DemandServiceDetailsEntityTypeorm[];

  @Column()
  type: string;

  @CreateDateColumn()
  deadline: Date;

  @Column()
  state: string;

  @Column()
  amount: number;

  @Column()
  cost: number;

  @Column()
  observations?: string;

  @CreateDateColumn()
  receivement: Date;

  @ManyToOne(() => ReportEntityTypeorm, (report) => report.demands)
  @JoinColumn({ name: 'report_id' })
  report?: ReportEntityTypeorm;

  @Column()
  report_id?: string;

  constructor() {
    super();
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
