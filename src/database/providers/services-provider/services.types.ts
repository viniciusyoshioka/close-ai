import { ChatMessageService } from '../../entities/chat-message/chat-message.service'
import { ChatService } from '../../entities/chat/chat.service'
import { LogService } from '../../entities/log/log.service'


export interface Services {
  chatService: ChatService
  chatMessageService: ChatMessageService
  logService: LogService
}
