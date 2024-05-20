const env = process.env;

module.exports = {
  db: {
    host: "ep-falling-grass-a46ompk5-pooler.us-east-1.aws.neon.tech", //env.POSTGRES_HOST, //"ep-falling-grass-a46ompk5-pooler.us-east-1.aws.neon.tech",
    //  port: env.DB_PORT || '5432',
    user: "default", //env.POSTGRES_USER, //"default",
    password: "9OPZaWocGtd4", //env.POSTGRES_PASSWORD, //"9OPZaWocGtd4",
    database: "verceldb", //env.POSTGRES_DATABASE, //"verceldb",
  },
  POSTGRES_URL: "postgres://default:9OPZaWocGtd4@ep-falling-grass-a46ompk5-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require", //env.POSTGRES_URL,
    //"postgres://default:9OPZaWocGtd4@ep-falling-grass-a46ompk5-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  listPerPage: 10,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
