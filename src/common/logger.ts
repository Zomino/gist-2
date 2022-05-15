import pino from 'pino';
import { pino as pinoConfig, environment } from './environment';

const level = pinoConfig.logLevel || 'info';
const target = environment.isDevelopment ? 'pino-pretty' : 'pino/file';

const logger = pino({
  formatters: { level: (label) => ({ level: label }) },
  level,
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: { target },
});

export default logger;
