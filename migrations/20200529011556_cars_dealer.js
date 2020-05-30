
exports.up = function(knex) {
    return knex.schema.createTable('cars_dealer', cars => {
        cars.increments();
        cars.integer('VIN', 255).unique().notNullable();
        cars.text('make', 255).notNullable();
        cars.text('model', 255).notNullable();
        cars.integer('mileage', 255).notNullable();
    })
  };
  
  exports.down = function(knex) {
   return knex.schema.dropTableIfExists('cars_dealer'); 
  }