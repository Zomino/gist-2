import pinoHttp from 'pino-http';
import logger from 'common/logger';

const appLogger = pinoHttp({ logger });

export default appLogger;
