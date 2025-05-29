"use strict";

const { Pool } = require("pg");
const { developement } = require("../server/config");

const pool = new Pool({
  user: developement.username,
  host: developement.host,
  database: developement.database,
  password: developement.password,
  port: developement.port,
});
