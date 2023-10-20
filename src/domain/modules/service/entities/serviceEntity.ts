import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { DemandServiceDetailsEntity } from '../../demand/entities/DemandServiceDetailsEntity';

export class ServiceEntity {
  id?: string;

  name: string;

  amount: number;

  cost: number;

  active?: boolean;

  demandsDetails: DemandServiceDetailsEntity[];
}
