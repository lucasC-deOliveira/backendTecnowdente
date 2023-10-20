export class EditDemandUseCaseInput {
  id: string;
  client_id: string;
  patient: string;
  services: {
    id: string;
    quantity: number;
  }[];
  type: string;
  deadline: string;
  state: string;
  amount: number;
  observations?: string;
}
