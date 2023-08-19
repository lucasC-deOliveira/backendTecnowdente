import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { Demand } from "../../demand/entities/Demand";

@Entity('clients')
class Client{
    @PrimaryColumn()
    id?:string;

    @Column()
    name:string;

    @Column()
    cnpj:string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(()=> Demand, (demand)=> demand.client_id)
    demands: Demand[]

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }


}


export {Client}