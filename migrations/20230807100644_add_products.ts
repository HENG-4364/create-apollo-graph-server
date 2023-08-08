import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  if(!(await knex.schema.hasTable("products"))){
    return await knex.schema.createTable("products",(field)=>{
        field.increments();
        field.string("product_name");
        field.string("summary");
        field.string("description");
        field.string("image");
        field.integer("category_id");
        field.timestamps(true,true);

    })
}
}


export async function down(knex: Knex): Promise<void> {
}