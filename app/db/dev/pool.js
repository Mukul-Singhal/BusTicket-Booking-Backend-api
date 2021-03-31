import { Pool } from "pg";

import dotenv from "dotenv";

//To use environment variables
dotenv.config();

const databaseConfig = { connectionString: process.env.DATABASE_URL };

//create a new pool
const pool = new Pool(databaseConfig);

export default pool;
