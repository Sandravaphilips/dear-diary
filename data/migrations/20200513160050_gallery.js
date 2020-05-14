
exports.up = function(knex) {
    return knex.schema.createTable('gallery', table => {
        table.increments();
        table.string('picture');
        table.date('date').notNullable();
        table.integer('userId').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('gallery');
};
