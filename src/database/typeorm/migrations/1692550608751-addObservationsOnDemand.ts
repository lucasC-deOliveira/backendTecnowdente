import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddObservationsOnDemand1692550608751
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'Demands',
      new TableColumn({
        name: 'observations',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(`Demands`, 'observations');
  }
}
