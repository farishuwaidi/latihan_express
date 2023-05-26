const { Pool } = require('pg');
const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'latihan_be',
    password: 'eduwork',
    port: 5432
})

module.exports = pool;