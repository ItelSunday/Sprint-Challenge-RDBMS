exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        //primary key called id, integer, auto-increment
        
        tbl.increments();
        tbl.string('title', 50)
        tbl.text('description')
        tbl.boolean('completed')
        tbl.notNullable()
        tbl.unique(); 
        
    }); 
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('projects');
    };
    
    // MIGRATION