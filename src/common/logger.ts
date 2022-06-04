import pino from 'pino';
import environment from './environment';

const level = environment.pino.logLevel;
const target = environment.isDevelopment ? 'pino-pretty' : 'pino/file';

const logger = pino({
  formatters: { level: (label) => ({ level: label }) },
  level,
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: { target },
});

// Pino methods are not bound to their object by default
logger.error = logger.error.bind(logger);
logger.info = logger.info.bind(logger);

export default logger;
