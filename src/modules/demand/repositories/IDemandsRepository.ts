import { Service } from "../../services/entities/service";
import { Demand } from "../entities/Demand";


interface ICreateDemandsDTO {
    client_id: string;
    patient: string;
    services?: Service[]
    type: string;
    deadline: Date;
    amount: number;
    state: string;

}

export interface IListDemandsDTO {
    demands: Demand[],
    totalItens: number
}

interface IDemandsRepository {
    create({ client_id, patient, services, type, deadline, state, amount }: ICreateDemandsDTO): Promise<void>
    remove(id: string): Promise<void>
    findById(id: string): Promise<Demand>
    list(page: number): Promise<IListDemandsDTO>;
    change(id: string, { client_id, patient, services, type, deadline, state, amount }: ICreateDemandsDTO): Promise<void>
    report(client_name: string): Promise<Demand[]>
}


export { ICreateDemandsDTO, IDemandsRepository }