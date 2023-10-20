import { Repository } from 'typeorm';
import { FindUserByEmailRepository } from '../../../../../domain/modules/accounts/repositories/findUserByEmail/FindUserByEmailRepository';
import { UserEntityTypeorm } from '../../../entities/account/userEntityTypeorm';
import { UserEntity } from '../../../../../domain/modules/accounts/entities/userEntity';

export class FindUserByEmailRepositoryTypeorm extends FindUserByEmailRepository {
  constructor(private readonly userRepository: Repository<UserEntityTypeorm>) {
    super();
  }
  async run(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ email });
    return user;
  }
}
