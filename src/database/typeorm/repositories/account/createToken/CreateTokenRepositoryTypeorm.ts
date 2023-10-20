import { Repository } from 'typeorm';
import { CreateTokenRepositoryInput } from '../../../../../domain/modules/accounts/repositories/createToken/adapters/input/CreateTokenRepositoryInput';
import { UserTokensEntityTypeorm } from '../../../entities/account/userTokensEntityTypeorm';
import { CreateTokenRepository } from '../../../../../domain/modules/accounts/repositories/createToken/CreateTokenRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateTokenRepositoryTypeorm extends CreateTokenRepository {
  constructor(
    @InjectRepository(UserTokensEntityTypeorm)
    private readonly tokenRepository: Repository<UserTokensEntityTypeorm>,
  ) {
    super();
  }

  async run({
    expires_date,
    refresh_token,
    user_id,
  }: CreateTokenRepositoryInput): Promise<void> {
    const userToken = this.tokenRepository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    await this.tokenRepository.save(userToken);
  }
}
