import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  if(!(await knex.schema.hasTable("product_categories"))){
    return await knex.schema.createTable("product_categories",(field)=>{
        field.increments();
        field.string("category_name");       
        field.timestamps(true,true);

    })
}
}


export async function down(knex: Knex): Promise<void> {
}

