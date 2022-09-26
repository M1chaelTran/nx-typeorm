import { MigrationInterface, QueryRunner } from "typeorm";

export class init1664164120464 implements MigrationInterface {
    name = 'init1664164120464'

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
