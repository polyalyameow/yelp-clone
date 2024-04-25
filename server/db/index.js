const pg = require('pg');
const { Pool } = pg
 
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'yelp',
    password: 'postgres',
    port: 5432,
  })
 
module.exports.query = (text, params) => pool.query(text, params);