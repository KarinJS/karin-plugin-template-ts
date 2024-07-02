import { logger } from 'node-karin'
import { basename, config } from '@template/lib/imports'

logger.info(`${logger.violet(`[插件:${config.package.version}]`)} ${logger.green(basename)} 初始化完成~`)
