import { DataSource, Repository } from 'typeorm'

import { LogEntity } from './log.entity'


export class LogRepository extends Repository<LogEntity> {
  constructor(dataSource: DataSource) {
    super(LogEntity, dataSource.createEntityManager())
  }
}
