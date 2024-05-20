const env = process.env;

module.exports = {
  db: {
    host: env.POSTGRES_HOST, //"ep-small-river-a4pf78lk-pooler.us-east-1.aws.neon.tech",
    //  port: env.DB_PORT || '5432',
    user: env.POSTGRES_USER, //"default",
    password: env.POSTGRES_PASSWORD, //"PEIXl7nrGfm4",
    database: env.POSTGRES_DATABASE, //"verceldb",
  },
  POSTGRES_URL:
    "postgres://default:PEIXl7nrGfm4@ep-small-river-a4pf78lk-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  listPerPage: 10,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
