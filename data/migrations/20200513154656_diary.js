
exports.up = function(knex) {
    return knex.schema.createTable('diary', table => {
        table.increments();
        table.text('diaryText', 'longtext');
        table.date('date').unique().notNullable();
        table.integer('userId').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('diary');
};
