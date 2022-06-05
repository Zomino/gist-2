import dotenv from 'dotenv';

function getValue(name: string, required: boolean = false) {
  const value = process.env[name];

  if (!value && required) throw new Error(`Environment variable missing for ${name}.`);

  return value!;
}

dotenv.config();

const isProduction = getValue('IS_PRODUCTION');
const isDevelopment = !isProduction;

// Default database config requires Postgres to be installed and running locally
const databaseDialect = getValue('DATABASE_DIALECT') || 'postgres';
const databaseHost = getValue('DATABASE_HOST') || 'localhost';
const databaseName = getValue('DATABASE_NAME') || 'gist-2';
const databasePassword = getValue('DATABASE_PASSWORD', true);
const databasePort = getValue('DATABASE_PORT') || 5432;
const databaseUser = getValue('DATABASE_USER') || 'postgres';

const pinoLogLevel = getValue('PINO_LOG_LEVEL') || 'info';

const sessionSecret = isProduction
  ? getValue('SESSION_SECRET', true)
  : getValue('SESSION_SECRET') || 'banana';

const serverHost = getValue('SERVER_HOST') || 'localhost';
const serverPort = getValue('SERVER_PORT') || 3000;

const steamAPIKey = getValue('STEAM_API_KEY', true);

export default {
  isDevelopment,
  isProduction,
  database: {
    dialect: databaseDialect,
    host: databaseHost,
    name: databaseName,
    password: databasePassword,
    port: databasePort,
    user: databaseUser,
  },
  pino: {
    logLevel: pinoLogLevel,
  },
  server: {
    host: serverHost,
    port: serverPort,
  },
  session: {
    secret: sessionSecret,
  },
  steamAPI: {
    key: steamAPIKey,
  },
};
