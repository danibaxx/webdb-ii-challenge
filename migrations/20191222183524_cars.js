
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments('carsId')
    table.string('vin', 17).notNull().unique()
    table.text('make').notNull()
    table.text('model').notNull()
    table.integer('mileage').notNull()
    table.text('transmissionType')
    table.text('titleStatus')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};