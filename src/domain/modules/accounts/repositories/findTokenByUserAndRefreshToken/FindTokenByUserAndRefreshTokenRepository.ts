import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { UserTokensEntity } from '../../entities/userTokensEntity';
import { FindTokenByUserAndRefreshTokenRepositoryInput } from './adapters/input/FindTokenByUserAndRefreshTokenInput';

export class FindTokenByUserAndRefreshTokenRepository extends BaseRepository {
  run(
    _input: FindTokenByUserAndRefreshTokenRepositoryInput,
  ): Promise<UserTokensEntity> {
    throw new ErrorNotImplementedYet();
  }
}
