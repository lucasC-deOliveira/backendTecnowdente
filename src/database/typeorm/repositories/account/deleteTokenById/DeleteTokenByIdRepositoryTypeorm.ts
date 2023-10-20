import { Repository } from 'typeorm';
import { DeleteTokenByIdRepository } from '../../../../../domain/modules/accounts/repositories/deleteTokenById/DeleteTokenByIdRepository';
import { UserTokensEntityTypeorm } from '../../../entities/account/userTokensEntityTypeorm';

export class DeleteTokenByIdRepositoryTypeorm extends DeleteTokenByIdRepository {
  constructor(
    private readonly tolenRepository: Repository<UserTokensEntityTypeorm>,
  ) {
    super();
  }
  async run(id: string): Promise<void> {
    await this.tolenRepository.delete({ id });
  }
}
