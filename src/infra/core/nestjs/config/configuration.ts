export default () => ({
  port: parseInt(process.env.PORT),
  user: String(process.env.USER),
  userEmail: String(process.env.USER_EMAIL),
  password: String(process.env.PASSWORD),
  database: {
    user: String(process.env.DATABASE_USER),
    database: String(process.env.DATABASE_DATABASE),
    password: String(process.env.DATABASE_PASSWORD),
    host: String(process.env.DATABASE_HOST),
  },
});
