import pinoHttp from 'pino-http';
import logger from 'services/loggerService';

const appLogger = pinoHttp({ logger });

export default appLogger;
