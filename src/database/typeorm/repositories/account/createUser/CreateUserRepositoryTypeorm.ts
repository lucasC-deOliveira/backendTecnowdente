import { Repository } from 'typeorm';
import { CreateUserRepository } from '../../../../../domain/modules/accounts/repositories/ createUser/CreateUserRepository';
import { UserEntityTypeorm } from '../../../entities/account/userEntityTypeorm';
import { CreateUserRepositoryInput } from '../../../../../domain/modules/accounts/repositories/ createUser/adapters/input/CreateUserRepositoryInput';

export class CreateUserRepositoryTypeorm extends CreateUserRepository {
  constructor(private userRepository: Repository<UserEntityTypeorm>) {
    super();
  }

  async run({
    email,
    name,
    password,
  }: CreateUserRepositoryInput): Promise<void> {
    const user = this.userRepository.create({
      name,
      email,
      password,
    });

    await this.userRepository.save(user);
  }
}
