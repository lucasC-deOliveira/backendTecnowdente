import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCoustOnService1692557454230 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'services',
      new TableColumn({
        name: 'cost',
        type: 'numeric',
        isNullable: false,
        default: 0,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('services', 'cost');
  }
}
