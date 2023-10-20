import { Repository } from 'typeorm';
import { DeleteTokenByUserIdRepository } from '../../../../../domain/modules/accounts/repositories/deleteTokenByUserId/DeleteTokenByUserIdRepository';
import { UserTokensEntityTypeorm } from '../../../entities/account/userTokensEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeleteTokenByUserIdRepositoryTypeorm extends DeleteTokenByUserIdRepository {
  constructor(
    @InjectRepository(UserTokensEntityTypeorm)
    private readonly tokenRepository: Repository<UserTokensEntityTypeorm>,
  ) {
    super();
  }
  async run(id: string): Promise<void> {
    await this.tokenRepository.delete({ user_id: id });
  }
}
