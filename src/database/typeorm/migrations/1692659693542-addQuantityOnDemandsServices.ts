import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddQuantityOnDemandsServices1692659693542
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'services_demands',
      new TableColumn({
        name: 'quantity',
        type: 'numeric',
        default: 1,
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('services_demands', 'quantity');
  }
}
