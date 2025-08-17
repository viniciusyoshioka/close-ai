import { MigrationInterface, QueryRunner, Table } from 'typeorm'


const CHATS_TABLE = new Table({
  name: 'chats',
  columns: [
    {
      name: 'id',
      type: 'uuid',
      isPrimary: true,
      default: 'uuid_generate_v4()',
    },
    {
      name: 'title',
      type: 'text',
      isNullable: false,
    },
    {
      name: 'model',
      type: 'text',
      isNullable: false,
    },
    {
      name: 'created_at',
      type: 'text',
      isNullable: false,
    },
    {
      name: 'updated_at',
      type: 'text',
      isNullable: false,
    },
  ],
})


export class CreateChatTable1755366434077 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(CHATS_TABLE, true)
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(CHATS_TABLE, true)
  }
}
