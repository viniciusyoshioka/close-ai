import { MigrationInterface, QueryRunner, Table } from 'typeorm'


const LOGS_TABLE = new Table({
  name: 'logs',
  columns: [
    {
      name: 'id',
      type: 'uuid',
      isPrimary: true,
      default: 'uuid_generate_v4()',
    },
    {
      name: 'code',
      type: 'int',
      isNullable: false,
    },
    {
      name: 'message',
      type: 'text',
      isNullable: false,
    },
    {
      name: 'timestamp',
      type: 'text',
      isNullable: false,
    },
  ],
})


export class CreateLogTable1755366115210 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(LOGS_TABLE, true)
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(LOGS_TABLE, true)
  }
}
