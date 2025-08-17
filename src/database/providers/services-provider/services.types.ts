import { ChatService } from '../../entities/chat/chat.service'
import { LogService } from '../../entities/log/log.service'


export interface Services {
  chatService: ChatService
  logService: LogService
}
