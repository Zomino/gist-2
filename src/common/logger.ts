import pino from 'pino';
import { pinoLogLevel, isDevelopment } from './environment';

const level = pinoLogLevel || 'info';
const target = isDevelopment ? 'pino-pretty' : 'pino/file';

const logger = pino({
  formatters: { level: (label) => ({ level: label }) },
  level,
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: { target },
});

export default logger;
