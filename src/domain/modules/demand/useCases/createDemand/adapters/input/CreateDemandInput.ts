export class CreateDemandInput {
  client_id: string;
  patient: string;
  type: string;
  deadline: Date;
  services: {
    id: string;
    quantity: number;
  }[];
  state: 'Pendente' | 'Entregue' | 'Finalizado';
  observations: string;
}
