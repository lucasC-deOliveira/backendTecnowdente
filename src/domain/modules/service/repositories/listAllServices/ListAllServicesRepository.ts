import { BaseRepository } from 'src/domain/base/baseRepository/baseRepository';
import { ServiceEntity } from '../../entities/serviceEntity';
import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class ListAllServicesRepository extends BaseRepository {
  run(): Promise<ServiceEntity[]> {
    throw new ErrorNotImplementedYet();
  }
}
