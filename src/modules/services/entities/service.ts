import { Column, Entity, PrimaryColumn } from 'typeorm';
import {v4 as uuid} from 'uuid'

@Entity('services')
class Service{

  @PrimaryColumn()
  id?:string;
  
  @Column()
  name:string;

  @Column()
  amount:number;

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }

}

export {Service}