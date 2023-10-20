import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ServicesDemands1655567025213 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('Demands', 'FKDemandsServices');

    await queryRunner.dropColumn('Demands', 'service_id');

    await queryRunner.createTable(
      new Table({
        name: 'services_demands',
        columns: [
          {
            name: 'demand_id',
            type: 'uuid',
          },
          {
            name: 'service_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'services_demands',
      new TableForeignKey({
        name: 'FKServiceDemand',
        referencedTableName: 'services',
        referencedColumnNames: ['id'],
        columnNames: ['service_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'services_demands',
      new TableForeignKey({
        name: 'FKDemandService',
        referencedTableName: 'Demands',
        referencedColumnNames: ['id'],
        columnNames: ['demand_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('services_demands', 'FKDemandService');
    await queryRunner.dropForeignKey('services_demands', 'FKServiceDemand');
    await queryRunner.dropTable('services_demands');
  }
}
