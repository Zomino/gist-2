import pino from 'pino';
import pinoHttp from 'pino-http';

import environment from './environment';

const level = environment.pino.logLevel;
// Log to console in development and file in production
const target = environment.isDevelopment ? 'pino-pretty' : 'pino/file';

const logger = pino({
  formatters: { level: (label) => ({ level: label }) },
  level,
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: { target },
});

// Pino methods are not bound to their object by default
const logError = logger.error.bind(logger);
const logInfo = logger.info.bind(logger);

// Initialize logger middleware
const loggerMiddleware = pinoHttp({ logger });

export default {
  error: logError,
  info: logInfo,
  middleware: loggerMiddleware,
};
