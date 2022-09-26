import { MigrationInterface, QueryRunner } from "typeorm";

export class init1664163650189 implements MigrationInterface {
    name = 'init1664163650189'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "address" character varying NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "address"
        `);
    }

}
