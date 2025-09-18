import { ChatMessageEntity } from './chat-message.entity'
import { ChatMessageRepository } from './chat-message.repository'


export interface ChatMessageServiceParams {
  chatMessageRepository: ChatMessageRepository
}


export class ChatMessageService {


  private readonly chatMessageRepository: ChatMessageRepository


  constructor(params: ChatMessageServiceParams) {
    this.chatMessageRepository = params.chatMessageRepository
  }


  async create(
    chatMessageData: Pick<ChatMessageEntity, 'chatId' | 'role' | 'content'>,
    transaction = this.chatMessageRepository.manager,
  ): Promise<ChatMessageEntity> {
    const { chatId, role, content } = chatMessageData

    const chatMessageToSave = transaction.create(
      ChatMessageEntity,
      { chatId, role, content },
    )

    return await transaction.save(ChatMessageEntity, chatMessageToSave)
  }
}
