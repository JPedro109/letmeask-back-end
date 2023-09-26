import "dotenv/config";

export const APP_URL = process.env.APP_URL;
export const JWT_KEY = process.env.JWT_KEY;
export const DATABASE_URL = process.env.DATABASE_URL;
export const DATABASE_NOSQL_URL = process.env.DATABASE_NOSQL_URL;
export const ENVIRONMENT = process.env.ENVIRONMENT;
export const PORT = parseInt(process.env.PORT);
export const QUEUE_HOST = process.env.QUEUE_HOST;
export const QUEUE_NAME = process.env.QUEUE_NAME;