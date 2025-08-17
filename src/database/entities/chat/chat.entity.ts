import { Column, Entity } from 'typeorm'

import { BaseEntity } from '../utils/base-entity'


@Entity({ name: 'chats' })
export class ChatEntity extends BaseEntity {
  @Column({ name: 'title', type: 'text' })
  title!: string

  @Column({ name: 'model', type: 'text' })
  model!: string

  @Column({
    name: 'created_at',
    type: 'text',
    default: () => "strftime('%Y-%m-%d %H:%M:%f', 'now')",
  })
  createdAt!: Date

  @Column({
    name: 'updated_at',
    type: 'text',
    default: () => "strftime('%Y-%m-%d %H:%M:%f', 'now')",
  })
  updatedAt!: Date
}
