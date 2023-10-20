import { Repository } from 'typeorm';
import { DeleteTokenByUserIdRepository } from '../../../../../domain/modules/accounts/repositories/deleteTokenByUserId/DeleteTokenByUserIdRepository';
import { UserTokensEntityTypeorm } from '../../../entities/account/userTokensEntityTypeorm';

export class DeleteTokenByUserIdTypeorm extends DeleteTokenByUserIdRepository {
  constructor(
    private readonly tokenRepository: Repository<UserTokensEntityTypeorm>,
  ) {
    super();
  }
  async run(id: string): Promise<void> {
    await this.tokenRepository.delete({ user_id: id });
  }
}
