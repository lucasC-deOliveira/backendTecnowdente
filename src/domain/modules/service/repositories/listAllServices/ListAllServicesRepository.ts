import { BaseRepository } from 'src/domain/base/baseRepository/baseRepository';
import { ServiceEntity } from '../../entities/serviceEntity';
import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class ListAllServicesRepository extends BaseRepository {
  run(page?: number): Promise<ServiceEntity[]> {
    throw new ErrorNotImplementedYet();
  }
}
