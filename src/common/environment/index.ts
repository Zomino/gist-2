import getValue from './getValue';

const environment = getValue('NODE_ENV');

export default {
  isDevelopment: environment === 'development',
  isProduction: environment === 'production',
  database: {
    dialect: getValue('DATABASE_DIALECT'),
    host: getValue('DATABASE_HOST'),
    name: getValue('DATABASE_NAME'),
    password: getValue('DATABASE_PASSWORD'),
    port: getValue('DATABASE_PORT'),
    user: getValue('DATABASE_USER'),
  },
  pino: {
    logLevel: getValue('PINO_LOG_LEVEL', false),
  },
  server: {
    host: getValue('SERVER_HOST'),
    port: getValue('SERVER_PORT'),
  },
  session: {
    secret: getValue('SESSION_SECRET'),
  },
  steamAPI: {
    key: getValue('STEAM_API_KEY'),
  },
};
