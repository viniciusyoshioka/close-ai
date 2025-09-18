import { Column, Entity } from 'typeorm'

import { BaseEntity } from '../utils/base-entity'
import { ChatMessageRole } from './chat-message.constants'


@Entity({ name: 'chat_messages' })
export class ChatMessageEntity extends BaseEntity {
  @Column({ name: 'chat_id', type: 'text' })
  chatId!: string

  @Column({ name: 'role', type: 'text' })
  role!: ChatMessageRole

  @Column({ name: 'content', type: 'text' })
  content!: string

  @Column({
    name: 'created_at',
    type: 'text',
    default: () => "strftime('%Y-%m-%d %H:%M:%f', 'now')",
  })
  createdAt!: Date
}
