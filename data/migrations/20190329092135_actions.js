exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        //primary key called id, integer, auto-increment
        
        tbl.increments();
        tbl.text('description').notNullable();
        tbl.text('notes');
        tbl.boolean('completed').defaultTo(false);
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    }); 
};
    
exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('actions');
};
    
    // MIGRATION