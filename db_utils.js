const { Client } = require('pg');

function getConnection() {
    return new Client({
        host: 'localhost',
        user: process.env.dbuser,
        password: process.env.dbpwd,
        database: 'mabase',
        port: 5432
    });
}

function getUsers(callback) {
    const client = getConnection();

    client.connect()
        .then(() => client.query('SELECT * FROM users'))
        .then(result => callback(result.rows))
        .catch(err => console.error(err))
        .finally(() => client.end());
}

getUsers(users => {
    console.log(users);
});

function insert_user(user) {
    const client = getConnection();

    client.connect()
        .then(() => client.query(
            'INSERT INTO users (name, email) VALUES ($1, $2)',
            [user.name, user.email]
        ))
        .then(() => console.log('Utilisateur ajouté !'))
        .catch(err => console.error(err))
        .finally(() => client.end());
}

insert_user({
    name: 'Lucas',
    email: 'lucas@test.com'
});