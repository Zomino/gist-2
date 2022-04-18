import dotenv from 'dotenv';

dotenv.config();

export const serverPort = process.env.SERVER_PORT || 3000;
export const serverURL = `http://localhost:${serverPort}`;
export const steamAPIKey = process.env.STEAM_API_KEY;
export const expressSessionSecret = process.env.EXPRESS_SESSION_SECRET || 'banana';
export const databasePort = process.env.DATABASE_PORT || 27017;
export const databaseName = process.env.DATABASE_NAME || 'gist2';

export default {
  serverPort,
  serverURL,
  steamAPIKey,
  expressSessionSecret,
  databasePort,
  databaseName,
};
