import dotenv from 'dotenv';

function getValue(name: string) {
  const value = process.env[name];

  if (!value) throw new Error(`missing env var for ${name}`);

  return value;
}

dotenv.config();

export const nodeEnvironment = getValue('NODE_ENV');
export const serverHost = getValue('SERVER_HOST');
export const serverPort = getValue('SERVER_PORT');
export const databaseHost = getValue('DATABASE_HOST');
export const databasePort = getValue('DATABASE_PORT');
export const databaseName = getValue('DATABASE_NAME');
export const expressSessionSecret = getValue('EXPRESS_SESSION_SECRET');
export const steamAPIKey = getValue('STEAM_API_KEY');
