export class ShowDashboardUseCaseOutput {
  profit: number;
  expenses: number;
  total: number;
  demandsByServices: {
    name: string;
    quantity: number;
  }[];
  demandsByState: {
    state: string;
    quantity: number;
  }[];
}
