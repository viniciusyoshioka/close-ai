import { DataSource, Repository } from 'typeorm'

import { ChatEntity } from './chat.entity'


export class ChatRepository extends Repository<ChatEntity> {
  constructor(dataSource: DataSource) {
    super(ChatEntity, dataSource.createEntityManager())
  }
}
