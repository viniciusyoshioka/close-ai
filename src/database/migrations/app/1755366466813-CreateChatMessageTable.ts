import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'


const CHAT_MESSAGES_TABLE = new Table({
  name: 'chat_messages',
  columns: [
    {
      name: 'id',
      type: 'uuid',
      isPrimary: true,
      default: 'uuid_generate_v4()',
    },
    {
      name: 'chat_id',
      type: 'text',
      isNullable: false,
    },
    {
      name: 'role',
      type: 'text',
      isNullable: false,
    },
    {
      name: 'content',
      type: 'text',
      isNullable: false,
    },
    {
      name: 'created_at',
      type: 'text',
      isNullable: false,
    },
  ],
})


const FOREIGN_KEY = new TableForeignKey({
  name: 'fk_chat_id',
  referencedTableName: 'chats',
  referencedColumnNames: ['id'],
  columnNames: ['chat_id'],
})


export class CreateChatMessageTable1755366466813 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(CHAT_MESSAGES_TABLE, true)
    await queryRunner.createForeignKey(CHAT_MESSAGES_TABLE, FOREIGN_KEY)
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(CHAT_MESSAGES_TABLE, true)
    await queryRunner.dropForeignKey(CHAT_MESSAGES_TABLE, FOREIGN_KEY)
  }
}
