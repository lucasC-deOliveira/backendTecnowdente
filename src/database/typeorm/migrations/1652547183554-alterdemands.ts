import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class alterdemands1652547183554 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'Demands',
      new TableForeignKey({
        name: 'FKDemandsClients',
        referencedTableName: 'clients',
        referencedColumnNames: ['id'],
        columnNames: ['client_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'Demands',
      new TableForeignKey({
        name: 'FKDemandsServices',
        referencedTableName: 'services',
        referencedColumnNames: ['id'],
        columnNames: ['service_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('Demands', 'FKDemandsClients');
    await queryRunner.dropForeignKey('Demands', 'FKDemandsServices');
  }
}
