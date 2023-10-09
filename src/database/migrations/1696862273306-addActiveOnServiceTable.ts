import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddActiveOnServiceTable1696862273306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('services', new TableColumn({
            name: "active",
            type: "boolean",
            default: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('services', 'active')
    }

}
