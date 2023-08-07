import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.table("students",(field)=>{
        field.timestamps();
    })
}


export async function down(knex: Knex): Promise<void> {
}

