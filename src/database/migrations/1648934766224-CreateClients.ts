import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClients1648934766224 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clients",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "cnpj",
                        type: "varchar",
                        isUnique:true
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients")
    }

}
