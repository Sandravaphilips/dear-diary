
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('username').notNullable();
        table.string('password', 128).notNullable()
        table.string('emailAddress').unique().notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
