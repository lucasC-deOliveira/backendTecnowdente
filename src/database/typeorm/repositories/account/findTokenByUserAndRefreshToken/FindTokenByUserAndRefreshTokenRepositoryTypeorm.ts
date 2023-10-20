import { Repository } from 'typeorm';
import { FindTokenByUserAndRefreshTokenRepository } from '../../../../../domain/modules/accounts/repositories/findTokenByUserAndRefreshToken/FindTokenByUserAndRefreshTokenRepository';
import { UserTokensEntityTypeorm } from '../../../entities/account/userTokensEntityTypeorm';
import { UserTokensEntity } from '../../../../../domain/modules/accounts/entities/userTokensEntity';
import { FindTokenByUserAndRefreshTokenRepositoryInput } from '../../../../../domain/modules/accounts/repositories/findTokenByUserAndRefreshToken/adapters/input/FindTokenByUserAndRefreshTokenInput';

export class FindTokenByUserAndRefreshTokenRepositoryTypeorm extends FindTokenByUserAndRefreshTokenRepository {
  constructor(
    private readonly tokenRepository: Repository<UserTokensEntityTypeorm>,
  ) {
    super();
  }
  async run({
    token,
    userId,
  }: FindTokenByUserAndRefreshTokenRepositoryInput): Promise<UserTokensEntity> {
    const userTokens = await this.tokenRepository.findOneBy({
      user_id: userId,
      refresh_token: token,
    });

    return userTokens;
  }
}
