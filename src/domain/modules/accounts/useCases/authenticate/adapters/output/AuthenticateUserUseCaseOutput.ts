export class AuthenticateUserUseCaseOutput {
  user: {
    name: string;
    email: string;
    id: string;
  };
  token: string;
  refresh_token: string;
}
