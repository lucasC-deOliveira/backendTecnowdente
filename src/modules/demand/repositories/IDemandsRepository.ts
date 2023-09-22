import { Service } from "../../services/entities/service";
import { Demand } from "../entities/Demand";

export interface DemandService {
    id: string;
    quantity: number;
}

interface ICreateDemandsDTO {
    client_id: string;
    patient: string;
    services?: DemandService[]
    type: string;
    deadline: Date;
    amount: number;
    state: string;
    observations?: string;
    cost: number;
}

export interface IListDemandsDTO {
    demands: Demand[],
    totalItens: number
}


interface IDemandsRepository {
    create({ client_id, patient, services, type, deadline, state, amount, observations, cost }: ICreateDemandsDTO): Promise<void>
    remove(id: string): Promise<void>
    findById(id: string): Promise<Demand>
    list(page: number): Promise<IListDemandsDTO>;
    change(id: string, { client_id, patient, services, type, deadline, state, amount, observations }: ICreateDemandsDTO): Promise<void>
    report(client_name: string): Promise<Demand[]>
    findBetweenReceivement(from: Date, to: Date): Promise<Demand[]>
}


export { ICreateDemandsDTO, IDemandsRepository }