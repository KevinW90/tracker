const {Client} = require('pg');
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'kevin',
  password: 'password',
  database: 'tracker'
});
client.connect();

const getBugs = () => {
  return new Promise( (resolve, reject) => {
    client.query('SELECT * FROM bugs', (error, results) => {
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
    client.query('INSERT INTO bugs (title, status, description) VALUES ($1, $2, $3) RETURNING *', [title, status, description], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`A new bug has been added: ${results.rows[0]}`)
    })
  })
}

const deleteBug = (paramId) => {
  return new Promise( (resolve, reject) => {
    const id = parseInt(paramId);
    client.query('DELETE FROM bugs WHERE id = $1', [id], (error, results) => {
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