import dotenv from 'dotenv';

function getValue(name: string) {
  const value = process.env[name];

  if (!value) throw new Error(`missing environment variable for ${name}`);

  return value;
}

dotenv.config();

export const serverHost = getValue('SERVER_HOST');
export const serverPort = getValue('SERVER_PORT');
export const databaseHost = getValue('DATABASE_HOST');
export const databaseDialect = getValue('DATABASE_DIALECT');
export const databaseUser = getValue('DATABASE_USER');
export const databasePassword = getValue('DATABASE_PASSWORD');
export const databasePort = getValue('DATABASE_PORT');
export const databaseName = getValue('DATABASE_NAME');
export const expressSessionSecret = getValue('EXPRESS_SESSION_SECRET');
export const steamAPIKey = getValue('STEAM_API_KEY');
