import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class RemoveServiceDemandsManyToManyAndAddItManual1695318147647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("services_demands", "FKDemandService")
        await queryRunner.dropForeignKey("services_demands", "FKServiceDemand")
        await queryRunner.dropTable('services_demands')


        await queryRunner.createTable(new Table({
            name: "DemandServiceDetails",
            columns: [
                {
                    name: "id",
                    type:"uuid",
                    isPrimary:true,
                },
                {
                    name: "demand_id",
                    type: "uuid"
                },
                {
                    name: "service_id",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "quantity",
                    type: "numeric",
                    default: 1,
                    isNullable: false
                }
            ]
        }))

        await queryRunner.createForeignKey(
            "DemandServiceDetails",
            new TableForeignKey({
                name: "FKServiceDemand",
                referencedTableName: "services",
                referencedColumnNames: ["id"],
                columnNames: ["service_id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );

        await queryRunner.createForeignKey(
            "DemandServiceDetails",
            new TableForeignKey({
                name: "FKDemandService",
                referencedTableName: "Demands",
                referencedColumnNames: ["id"],
                columnNames: ["demand_id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "services_demands",
            columns: [
                {
                    name: "demand_id",
                    type: "uuid"
                },
                {
                    name: "service_id",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "quantity",
                    type: "numeric",
                    default: 1,
                    isNullable: false
                }
            ]
        }))


        await queryRunner.createForeignKey(
            "services_demands",
            new TableForeignKey({
                name: "FKServiceDemand",
                referencedTableName: "services",
                referencedColumnNames: ["id"],
                columnNames: ["service_id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );

        await queryRunner.createForeignKey(
            "services_demands",
            new TableForeignKey({
                name: "FKDemandService",
                referencedTableName: "Demands",
                referencedColumnNames: ["id"],
                columnNames: ["demand_id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        )

        await queryRunner.dropForeignKey("DemandServiceDetails", "FKDemandService")
        await queryRunner.dropForeignKey("DemandServiceDetails", "FKServiceDemand")
        await queryRunner.dropTable('DemandServiceDetails')
    }


}
