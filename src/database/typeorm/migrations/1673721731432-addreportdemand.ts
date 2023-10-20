import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class addreportdemand1673721731432 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'Demands',
      new TableColumn({
        name: 'report_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'Demands',
      new TableForeignKey({
        name: 'FKDemandReport',
        referencedTableName: 'reports',
        referencedColumnNames: ['id'],
        columnNames: ['report_id'],
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('Demands', 'report_id');
    await queryRunner.dropForeignKey('Demands', 'FKDemandReport');
  }
}
