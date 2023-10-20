import { verify, sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';
import { FindTokenByUserAndRefreshTokenRepository } from '../../repositories/findTokenByUserAndRefreshToken/FindTokenByUserAndRefreshTokenRepository';
import { BaseService } from '../../../../base/baseService/baseService';
import { DeleteTokenByIdRepository } from '../../repositories/deleteTokenById/DeleteTokenByIdRepository';
import { CreateTokenRepository } from '../../repositories/createToken/CreateTokenRepository';
import { RefreshTokenUseCaseOutput } from './adapters/output/RefreshTokenUseCaseOutput';
import auth from '../../../../../config/auth';
import { AddDays } from 'src/domain/shared/providers/date/addDays';

interface IPayload {
  sub: string;
  email: string;
}

class RefreshTokenUseCase extends BaseService {
  constructor(
    private readonly findTokenByUserAndRefreshTokenRepository: FindTokenByUserAndRefreshTokenRepository,
    private readonly deleteTokenById: DeleteTokenByIdRepository,
    private readonly createTokenRepository: CreateTokenRepository,
    private readonly addDays: AddDays,
  ) {
    super();
  }
  async execute(token: string): Promise<RefreshTokenUseCaseOutput> {
    const { email, sub } = verify(token, auth.secret_refresh_token) as IPayload;

    const user_id = sub;

    const userToken = await this.findTokenByUserAndRefreshTokenRepository.run({
      userId: user_id,
      token,
    });

    if (!userToken) {
      throw new AppError('Refresh Token does not exists');
    }

    await this.deleteTokenById.run(userToken.id);

    const expires_date = this.addDays.execute(auth.expires_refresh_token_days);

    const refresh_token = sign({ email }, auth.secret_refresh_token, {
      subject: sub,
      expiresIn: auth.expires_in_refresh_token,
    });

    const newToken = sign({ email }, auth.secret_token, {
      subject: user_id,
      expiresIn: auth.expires_in_token,
    });

    await this.createTokenRepository.run({
      expires_date,
      refresh_token,
      user_id,
    });

    return {
      refreshToken: refresh_token,
      token: newToken,
    };
  }
}

export { RefreshTokenUseCase };
