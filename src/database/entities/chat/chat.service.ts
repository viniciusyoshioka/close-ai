import { ChatEntity } from './chat.entity'
import { ChatRepository } from './chat.repository'


export interface ChatServiceParams {
  chatRepository: ChatRepository
}


export class ChatService {


  private readonly chatRepository: ChatRepository


  constructor(params: ChatServiceParams) {
    this.chatRepository = params.chatRepository
  }


  async create(
    chatData: Pick<ChatEntity, 'title' | 'model'>,
    transaction = this.chatRepository.manager,
  ): Promise<ChatEntity> {
    const { title, model } = chatData

    const chatToSave = transaction.create(ChatEntity, { title, model })
    return await transaction.save(ChatEntity, chatToSave)
  }
}
