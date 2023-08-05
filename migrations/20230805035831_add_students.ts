import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    if(!(await knex.schema.hasTable("students"))){
        return await knex.schema.createTable("students",(field)=>{
            field.increments();
            field.string("student_name");
            field.string("gender");
            field.string("subject_id");
        })
    }
}


export async function down(knex: Knex): Promise<void> {
}

