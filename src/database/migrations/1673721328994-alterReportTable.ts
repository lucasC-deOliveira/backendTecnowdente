import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class alterReportTable1673721328994 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const columns = [
            new TableColumn({
                name: "created_at",
                type: "timestamp",
                isNullable: false,
                default: "NOW()"
            }),
            new TableColumn({
                name: "updated_at",
                type: "timestamp",
                isNullable: true
            })]

        await queryRunner.addColumns('reports', columns)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("reports", ["created_at", "updated_at"]);
    }

}
