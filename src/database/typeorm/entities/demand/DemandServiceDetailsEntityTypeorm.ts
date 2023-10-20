import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { randomUUID } from 'crypto';
import { DemandServiceDetailsEntity } from '../../../../domain/modules/demand/entities/DemandServiceDetailsEntity';
import { ServiceEntityTypeorm } from '../service/service';
import { DemandEntityTypeorm } from './DemandEntityTypeorm';

@Entity('DemandServiceDetails', { schema: 'public' })
export class DemandServiceDetailsEntityTypeorm extends DemandServiceDetailsEntity {
  @Column('uuid', { primary: true, name: 'id' })
  id?: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  quantity: number;

  @ManyToOne(() => DemandEntityTypeorm, (demands) => demands.servicesDetails, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'demand_id', referencedColumnName: 'id' }])
  demand: DemandEntityTypeorm;

  @Column()
  demand_id: string;

  @Column()
  service_id: string;

  @ManyToOne(
    () => ServiceEntityTypeorm,
    (services) => services.demandsDetails,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'service_id', referencedColumnName: 'id' }])
  service: ServiceEntityTypeorm;

  constructor() {
    super();
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
