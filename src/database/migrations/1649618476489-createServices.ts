import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createServices1649618476489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"services",
                columns:[
                    {
                        name:'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name:'name',
                        type:'varchar',
                        isUnique: true
                    },
                    {
                        name:'amount',
                        type:'numeric'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('services')
    }

}
