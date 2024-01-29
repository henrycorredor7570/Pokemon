require("dotenv").config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PGPORT = process.env.PGPORT || 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PGPORT, () => {
    console.log(`Server on port: ${PGPORT}`);
  });
});
