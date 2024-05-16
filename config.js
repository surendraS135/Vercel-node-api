const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: 'ep-falling-grass-a46ompk5-pooler.us-east-1.aws.neon.tech',
  //  port: env.DB_PORT || '5432',
    user: 'default',
    password: '9OPZaWocGtd4',
    database: 'verceldb',
  },
  POSTGRES_URL: "postgres://default:9OPZaWocGtd4@ep-falling-grass-a46ompk5-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  listPerPage: 10,
  pool: {

    max: 5,

    min: 0,

    acquire: 30000,

    idle: 10000

  }
};

module.exports = config;
