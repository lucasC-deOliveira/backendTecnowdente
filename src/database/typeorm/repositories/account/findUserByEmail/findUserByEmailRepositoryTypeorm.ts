import { Repository } from 'typeorm';
import { FindUserByEmailRepository } from '../../../../../domain/modules/accounts/repositories/findUserByEmail/FindUserByEmailRepository';
import { UserEntityTypeorm } from '../../../entities/account/userEntityTypeorm';
import { UserEntity } from '../../../../../domain/modules/accounts/entities/userEntity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindUserByEmailRepositoryTypeorm extends FindUserByEmailRepository {
  constructor(
    @InjectRepository(UserEntityTypeorm)
    private readonly userRepository: Repository<UserEntityTypeorm>,
  ) {
    super();
  }
  async run(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ email });
    return user;
  }
}
