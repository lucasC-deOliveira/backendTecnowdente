import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Demand } from "./Demand";
import { v4 as uuid } from 'uuid'
import { Service } from "../../services/entities/service";

@Entity("DemandServiceDetails", { schema: "public" })
export class DemandServiceDetails {
  @Column("uuid", { primary: true, name: "id" })
  id?: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  quantity: number;

  @ManyToOne(() => Demand, (demands) => demands.servicesDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "demand_id", referencedColumnName: "id" }])
  demand: Demand;

  @Column()
  demand_id: string;

  @Column()
  service_id: string;

  @ManyToOne(() => Service, (services) => services.demandsDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "service_id", referencedColumnName: "id" }])
  service: Service;


  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
