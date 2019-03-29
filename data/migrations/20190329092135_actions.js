exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        //primary key called id, integer, auto-increment
        
        tbl.increments();
        tbl.text('description')
        tbl.text('notes')
        tbl.boolean('completed')

        tbl
        .integer('project_id')
        .unsigned()
        .refernces('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    }); 
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('actions');
    };
    
    // MIGRATION