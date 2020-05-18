const db = require('../config/dbConfig');

module.exports = {
    addUser: function(user) {
        return db('users')
            .insert(user)
            .returning('id')
            .then(([id]) => {
                return this.findUserBy({ id });
            });
    },
    findUserBy: function(filter) {
        return db('users')
            .where(filter)
            .first()
    },
    addPicture: function(picture) {
        return db('gallery')
            .insert(picture)
            .returning('id')
            .then(([id]) => {
                return this.findPictureBy({ id });
            });
    },
    findPictureBy: function(filter) {
        return db('gallery')
            .where(filter)
    },
    removePicture: function (id) {
        return db('gallery')
            .where({ id })
            .delete()
    },
    addDiaryText: function(text) {
        return db('diary')
            .insert(text)
            .returning('id')
            .then(([id]) => {
                return this.findTextBy({ id });
            });
    },
    findTextBy: function(filter) {
        return db('diary')
            .where(filter)
            .first()
    },
    updateDiaryText: function(id, changes) {
        return db('diary')
            .where({ id })
            .update(changes)
            .then(() => {
                return this.findTextBy({ id })
            })
    }
}