import dotenv from "dotenv";
dotenv.config();
import knex from "knex";
export const knx =knex({
    client:"mysql2",
    connection:process.env.MYSQL_CONNECTION_STRING,
})