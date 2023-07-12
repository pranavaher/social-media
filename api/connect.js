import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mysql-crud",
  password: "pass4321",
  port: 3306,
});
