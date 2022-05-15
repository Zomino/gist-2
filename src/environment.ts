import dotenv from 'dotenv';

function getValue(name: string, required: boolean = true) {
  const value = process.env[name];

  if (!value && required) throw new Error(`Environment variable missing for ${value}.`);

  return value!;
}

dotenv.config();

export const environment = getValue('NODE_ENV');
export const isDevelopment = environment === 'development';
export const isProduction = environment === 'production';

export const databaseDialect = getValue('DATABASE_DIALECT');
export const databaseHost = getValue('DATABASE_HOST');
export const databaseName = getValue('DATABASE_NAME');
export const databasePassword = getValue('DATABASE_PASSWORD');
export const databasePort = getValue('DATABASE_PORT');
export const databaseUser = getValue('DATABASE_USER');
export const expressSessionSecret = getValue('EXPRESS_SESSION_SECRET');
export const serverHost = getValue('SERVER_HOST');
export const serverPort = getValue('SERVER_PORT');
export const steamAPIKey = getValue('STEAM_API_KEY');
export const pinoLogLevel = getValue('PINO_LOG_LEVEL', false);
