

/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "",
  DATABASE_URL_DEVELOPMENT = "postgres://gghlmjwadpukep:d2d7180a185d02b30795d0e6e08c19b3c5fe66438e82ce09d48ebb34435b4704@ec2-52-21-136-176.compute-1.amazonaws.com:5432/d48nfmndp6ttbk",
  DATABASE_URL_TEST = "postgres://gghlmjwadpukep:d2d7180a185d02b30795d0e6e08c19b3c5fe66438e82ce09d48ebb34435b4704@ec2-52-21-136-176.compute-1.amazonaws.com:5432/d48nfmndp6ttbk",
  DATABASE_URL_PREVIEW = "postgres://gghlmjwadpukep:d2d7180a185d02b30795d0e6e08c19b3c5fe66438e82ce09d48ebb34435b4704@ec2-52-21-136-176.compute-1.amazonaws.com:5432/d48nfmndp6ttbk",
  DEBUG,
} = process.env;

const DATABASE_URLS = "postgres://gghlmjwadpukep:d2d7180a185d02b30795d0e6e08c19b3c5fe66438e82ce09d48ebb34435b4704@ec2-52-21-136-176.compute-1.amazonaws.com:5432/d48nfmndp6ttbk";

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
      connection: DATABASE_URLS,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URLS,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URLS,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URLS,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
