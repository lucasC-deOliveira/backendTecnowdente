export class ErrorNotImplementedYet extends Error {
  public readonly message: string;

  constructor() {
    super();
    this.message = 'Not implemented yet!';
  }
}
