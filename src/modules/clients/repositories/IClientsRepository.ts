import { ClientDTO } from "../dtos/ClientDTO"
import { Client } from "../entities/Client"



interface IClientsRepository{
create({name,cnpj}:ClientDTO):Promise<void>
findById(id:string):Promise<Client>
findByCnpj(id:string):Promise<Client>
listAll():Promise<Client[]>
remove(id:string):Promise<void>
change(id:string, {name,cnpj}:ClientDTO):Promise<void>
}


export{IClientsRepository}