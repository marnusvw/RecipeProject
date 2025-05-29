"use strict";

const { Pool } = require("pg");
const { DB } = require("../server/config");

const pool = new Pool({
  user: DB.username,
  host: DB.host,
  database: DB.database,
  password: DB.password,
  port: DB.port,
});
