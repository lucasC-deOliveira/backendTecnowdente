import auth from '../../../../../config/auth';
import { BaseService } from '../../../../base/baseService/baseService';
import { AppError } from '../../../../errors/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { FindUserByEmailRepository } from '../../repositories/findUserByEmail/FindUserByEmailRepository';
import { DeleteTokenByUserIdRepository } from '../../repositories/deleteTokenByUserId/DeleteTokenByUserIdRepository';
import { CreateTokenRepository } from '../../repositories/createToken/CreateTokenRepository';
import { AuthenticateUserUseCaseInput } from './adapters/input/AuthenticateUserUseCaseInput';
import { AuthenticateUserUseCaseOutput } from './adapters/output/AuthenticateUserUseCaseOutput';
import { AddDays } from 'src/domain/shared/providers/date/addDays';

class AuthenticateUserUseCase extends BaseService {
  constructor(
    private readonly findUserByEmailRepository: FindUserByEmailRepository,

    private readonly deleteTokenByUserIdRepository: DeleteTokenByUserIdRepository,

    private readonly addDays: AddDays,

    private readonly createTokenRepository: CreateTokenRepository,
  ) {
    super();
  }

  async execute({
    email,
    password,
  }: AuthenticateUserUseCaseInput): Promise<AuthenticateUserUseCaseOutput> {
    const {
      expires_in_token,
      secret_refresh_token,
      secret_token,
      expires_in_refresh_token,
      expires_refresh_token_days,
    } = auth;

    //user exists
    const user = await this.findUserByEmailRepository.run(email);

    if (!user) {
      throw new AppError('Email or password incorrect!');
    }
    // is wrong password
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!');
    }

    //generate webtoken
    const token = sign({}, secret_token, {
      subject: user.id,
      expiresIn: expires_in_token,
    });

    const refresh_token = sign({ email }, secret_refresh_token, {
      subject: user.id,
      expiresIn: expires_in_refresh_token,
    });

    await this.deleteTokenByUserIdRepository.run(user.id);

    const refresh_token_expires_date = this.addDays.execute(
      expires_refresh_token_days,
    );

    await this.createTokenRepository.run({
      expires_date: refresh_token_expires_date,
      user_id: user.id,
      refresh_token,
    });

    const tokenReturn = {
      user: {
        name: user.name,
        email: user.email,
        id: user.id,
      },
      token,
      refresh_token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
