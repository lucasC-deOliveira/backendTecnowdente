import { hash } from 'bcryptjs';
import { AppError } from '../../../../errors/AppError';
import { CreateUserUseCaseInput } from './adapters/input/CreateUserUseCaseInput';
import { FindUserByEmailRepository } from '../../repositories/findUserByEmail/FindUserByEmailRepository';
import { CreateUserRepository } from '../../repositories/ createUser/CreateUserRepository';
import { BaseService } from '../../../../base/baseService/baseService';

class CreateUserUseCase extends BaseService {
  constructor(
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
    private readonly createUserRepository: CreateUserRepository,
  ) {
    super();
  }

  async execute({
    name,
    email,
    password,
  }: CreateUserUseCaseInput): Promise<void> {
    const userAlreadyExists = await this.findUserByEmailRepository.run(email);

    if (userAlreadyExists) {
      throw new AppError('User Already Exist');
    }

    const passwordHash = await hash(password, 8);

    await this.createUserRepository.run({
      name,
      email,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
