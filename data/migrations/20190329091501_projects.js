exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();  //primary key called id, integer, auto-increment
        tbl.string('name', 50).notNullable().unique(); 
        tbl.text('description').notNullable();
        tbl.boolean('completed')
        // .defaultTo(false)
        
    }); 
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('projects');
    };
    
    // MIGRATION