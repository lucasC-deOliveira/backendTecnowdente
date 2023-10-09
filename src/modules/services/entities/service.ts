import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { DemandServiceDetails } from '../../demand/entities/DemandServiceDetails';

@Entity('services')
class Service {

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

  @OneToMany(() => DemandServiceDetails, demandServiceDetails => demandServiceDetails.service_id)
  demandsDetails: DemandServiceDetails[]

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

}

export { Service }