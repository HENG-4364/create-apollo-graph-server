import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    if(!(await knex.schema.hasTable("subjects"))){
        return await knex.schema.createTable("subjects",(field)=>{
            field.increments();
            field.string("subject_name");
        })
    }
}


export async function down(knex: Knex): Promise<void> {
}

