import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { DemandServiceDetailsEntityTypeorm } from '../demand/DemandServiceDetailsEntityTypeorm';
import { ServiceEntity } from '../../../../domain/modules/service/entities/serviceEntity';

@Entity('services')
class ServiceEntityTypeorm extends ServiceEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  amount: number;

  @Column()
  cost: number;

  @Column()
  active?: boolean;

  @OneToMany(
    () => DemandServiceDetailsEntityTypeorm,
    (demandServiceDetails) => demandServiceDetails.service_id,
  )
  demandsDetails: DemandServiceDetailsEntityTypeorm[];

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { ServiceEntityTypeorm };
