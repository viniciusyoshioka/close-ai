import { ChatRepository } from './chat.repository'


export interface ChatServiceParams {
  chatRepository: ChatRepository
}


export class ChatService {


  private readonly chatRepository: ChatRepository


  constructor(params: ChatServiceParams) {
    this.chatRepository = params.chatRepository
  }
}
