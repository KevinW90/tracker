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
    const {title, status, description, submitted} = body;
    client.query('INSERT INTO bugs (title, status, description, submitted) VALUES ($1, $2, $3, $4) RETURNING *', [title, status, description, submitted], (error, results) => {
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

const resolveBug = (body) => {
  return new Promise( (resolve, reject) => {
    const {id, resolution, resolved} = body;
    let status = "resolved";
    client.query('UPDATE bugs SET resolution = $3, status = $2, resolved = $4 where id = $1', [id,status,resolution,resolved], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Bug resolution added with ID: ${id}`)
    })
  })
}

module.exports = {
  getBugs,
  createBug,
  deleteBug,
  resolveBug
}