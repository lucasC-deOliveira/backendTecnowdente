import { BaseRepository } from '../../../../base/baseRepository/baseRepository';

export class DeleteReportByIdRepository extends BaseRepository {
  async run(_id: string): Promise<void> {}
}
