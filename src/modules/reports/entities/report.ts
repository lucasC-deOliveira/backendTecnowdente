import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid"
import { Client } from "../../clients/entities/Client";
import { Demand } from "../../demand/entities/Demand";
import { Service } from "../../services/entities/service";

@Entity("reports")
class Reports {
  @PrimaryColumn()
  id?: string;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id' })
  client: Client;

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

  @OneToMany(() => Demand, (demand) => demand.report_id)
  demands: Demand[]

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}


export { Reports }