import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid"
import { Client } from "../../clients/entities/Client";
import { Reports } from "../../reports/entities/report";
import { Service } from "../../services/entities/service";

@Entity("Demands")
class Demand {
    @PrimaryColumn()
    id?: string;

    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id' })
    client: Client;

    @Column()
    client_id: string;

    @Column()
    patient: string;

    @ManyToMany(() => Service)
    @JoinTable({
        name: "services_demands",
        joinColumns: [{ name: "demand_id" }],
        inverseJoinColumns: [{ name: "service_id" }]
    })
    services: Service[];

    @Column()
    type: string;

    @CreateDateColumn()
    deadline: Date;

    @Column()
    state: string;

    @Column()
    amount: number;

    @Column()
    observations?: string

    @CreateDateColumn()
    receivement: Date;

    @ManyToOne(() => Reports, (report => report.demands))
    @JoinColumn({ name: 'report_id' })
    report?: Reports;

    @Column()
    report_id?: string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}


export { Demand }