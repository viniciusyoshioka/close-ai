import { typeORMDriver } from 'react-native-nitro-sqlite'
import { DataSource } from 'typeorm'

import { Constants } from '../utils/constants'
import { ChatEntity } from './entities/chat/chat.entity'
import { LogEntity } from './entities/log/log.entity'
import { CreateChatTable1755366434077 } from './migrations/app/1755366434077-CreateChatTable'
import { CreateLogTable1755366115210 } from './migrations/log/1755366115210-CreateLogTable'


export const appDataSource = new DataSource({
  type: 'react-native',
  database: Constants.database.app.fileName,
  location: Constants.database.app.location,
  driver: typeORMDriver,
  entities: [ChatEntity],
  migrations: [CreateChatTable1755366434077],
})


export const logDataSource = new DataSource({
  type: 'react-native',
  database: Constants.database.log.fileName,
  location: Constants.database.log.location,
  driver: typeORMDriver,
  entities: [LogEntity],
  migrations: [CreateLogTable1755366115210],
})
