const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'kevin',
  host: 'localhost',
  database: 'tracker',
  password: 'password',
  port: 5432
});

const getBugs = () => {
  return new Promise( (resolve, reject) => {
    pool.query('SELECT * FROM bugs ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    })
  })
}

const createBug = (body) => {
  return new Promise( (resolve, reject) => {
    const {title, status, description} = body;
    pool.query('INSERT INTO bugs (title, status, description) VALUES ($1, $2, $3) RETURNING *', [name, email], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`A new bug has been added: ${results.rows[0]}`)
    })
  })
}

const deleteBug = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM bugs WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Bug deleted with ID: ${id}`)
    })
  })
}

module.exports = {
  getBugs,
  createBug,
  deleteBug
}