import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class reportTable1673719841266 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "reports",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "to",
                        type: "timestamp"
                    },
                    {
                        name: "from",
                        type: "timestamp",
                    },
                    {
                        name: "client_id",
                        type: "uuid",
                    },
                    {
                        name: "status",
                        type: "varchar"
                    }
                ]
            })

        )
        await queryRunner.createForeignKey(
            "reports",
            new TableForeignKey({
                name: "FKReportClient",
                referencedTableName: "clients",
                referencedColumnNames: ["id"],
                columnNames: ["client_id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("reports", "FKReportClient")
        await queryRunner.dropTable('reports')
    }

}
