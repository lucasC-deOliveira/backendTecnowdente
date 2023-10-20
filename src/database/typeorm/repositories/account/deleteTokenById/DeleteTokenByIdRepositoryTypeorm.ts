import { Repository } from 'typeorm';
import { DeleteTokenByIdRepository } from '../../../../../domain/modules/accounts/repositories/deleteTokenById/DeleteTokenByIdRepository';
import { UserTokensEntityTypeorm } from '../../../entities/account/userTokensEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeleteTokenByIdRepositoryTypeorm extends DeleteTokenByIdRepository {
  constructor(
    @InjectRepository(UserTokensEntityTypeorm)
    private readonly tolenRepository: Repository<UserTokensEntityTypeorm>,
  ) {
    super();
  }
  async run(id: string): Promise<void> {
    await this.tolenRepository.delete({ id });
  }
}
