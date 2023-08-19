import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"
import { Table } from "typeorm/schema-builder/table/Table"

export class CreateDemands1648139252709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Demands",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"client_id",
                        type:"uuid"
                    },
                    {
                        name:"patient",
                        type:"varchar"
                    },
                    {
                        name:"service_id",
                        type:"uuid"
                    },
                    {
                        name:"type",
                        type:"varchar"
                    },
                    {
                        name:"deadline",
                        type:"timestamp"
                    },
                    {
                        name:"state",
                        type:"varchar"
                    },
                    {
                        name:"amount",
                        type:"numeric"
                    },
                    {
                        name:"receivement",
                        type:"timestamp",
                        default:"now()"
                    }
                ],
            })
        )


       


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Demands")
    }

}
