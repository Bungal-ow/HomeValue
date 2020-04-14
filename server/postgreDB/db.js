const pg = require('pg');

const pool = new pg.Pool({
  user: 'alexcai',
  host: 'localhost',
  database: 'homevalue'
});


pool.connect((err) => {
  if (err) {
    console.log('Error connecting to pool', err);
  } else {
    console.log('Successful connection to pool');
  }
});

module.exports = pool;