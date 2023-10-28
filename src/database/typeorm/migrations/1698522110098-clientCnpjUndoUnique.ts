import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ClientCnpjUndoUnique1698522110098 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'clients',
      'cnpj',
      new TableColumn({
        name: 'cnpj',
        type: 'varchar',
        isNullable: true,
        isUnique: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'clients',
      'cnpj',
      new TableColumn({
        name: 'cnpj',
        type: 'varchar',
        isNullable: true,
        isUnique: true,
      }),
    );
  }
}
