import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { UserEntity } from '../../entities/userEntity';

export class FindUserByEmailRepository extends BaseRepository {
  async run(_email: string): Promise<UserEntity> {
    throw new ErrorNotImplementedYet();
  }
}
