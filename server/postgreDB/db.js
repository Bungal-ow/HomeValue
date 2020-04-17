const pg = require('pg');

const pool = new pg.Pool({
  user: 'alexcai',
  host: '54.215.248.92',
  database: 'homevalue',
  password: '62461591',
  port: 5432,	



});


pool.connect((err) => {
  if (err) {
    console.log('Error connecting to pool', err);
  } else {
    console.log('Successful connection to pool');
  }
});

module.exports = pool;
