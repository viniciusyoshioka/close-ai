import { DataSource, Repository } from 'typeorm'

import { ChatMessageEntity } from './chat-message.entity'


export class ChatMessageRepository extends Repository<ChatMessageEntity> {
  constructor(dataSource: DataSource) {
    super(ChatMessageEntity, dataSource.createEntityManager())
  }
}
