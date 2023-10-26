import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UndoUniqueNameOnService1698347574518
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'services',
      'name',
      new TableColumn({
        name: 'name',
        type: 'varchar',
        isNullable: true,
        isUnique: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'services',
      'name',
      new TableColumn({
        name: 'name',
        type: 'varchar',
        isNullable: true,
        isUnique: true,
      }),
    );
  }
}
