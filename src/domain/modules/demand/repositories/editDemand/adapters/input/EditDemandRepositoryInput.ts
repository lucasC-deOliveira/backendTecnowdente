export class EditDemandRepositoryInput {
  id: string;
  client_id: string;
  patient: string;
  services: {
    id: string;
    quantity: number;
  }[];
  type: string;
  deadline: Date;
  state: string;
  amount: number;
  observations: string;
  cost: number;
}
