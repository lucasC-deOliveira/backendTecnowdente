import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddCostOnDemand1692663517372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("Demands", new TableColumn({
            name: "cost",
            type: "numeric",
            isNullable: false,
            default: 0
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("Demands", "cost")
    }

}
