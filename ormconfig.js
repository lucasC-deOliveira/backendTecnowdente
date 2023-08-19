module.exports = {
  type: "postgres",
  port: 5432,
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  migrations: ["./dist/database/migrations/*.ts"],
  entities: ["./dist/modules/**/entities/*.ts"],
  cli: {
    "migrationsDir": "./dist/database/migrations"
  }
}