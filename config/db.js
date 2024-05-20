// config/db.js
const { Sequelize } = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(config.POSTGRES_URL, {
  dialect: config.dialect,
  dialectModule: require('pg'),
  ssl: config.POSTGRES_URL.includes("sslmode=require"),
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

module.exports = sequelize;



// const { ConnectionPool } = require('serialize');
// const config = require('../config');

// const pool = new ConnectionPool({
//   ...config.db,
//   maximum: 10, // Maximum number of connections in the pool
// });

// /**
//  * Query the database using the pool
//  * @param {*} query 
//  * @param {*} params 
//  * 
//  * @see https://node-postgres.com/features/pooling#single-query
//  */
// async function query(query, params) {
//     const client = await pool.connect();
//     try {
//         const result = await client.query(query, params);
//         return result.rows;
//     } finally {
//         client.release();
//     }
// }

// module.exports = {
//   query
// }





// // const { Pool } = require('pg');
// // const config = require('../config');
// // const pool = new Pool(config.db);

// // /**
// //  * Query the database using the pool
// //  * @param {*} query 
// //  * @param {*} params 
// //  * 
// //  * @see https://node-postgres.com/features/pooling#single-query
// //  */
// // async function query(query, params) {
// //     const {rows, fields} = await pool.query(query, params);

// //     return rows;
// // }

// // module.exports = {
// //   query
// // }
