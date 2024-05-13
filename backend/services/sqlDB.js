const sqlite = require("better-sqlite3");

const db = sqlite("data.db");

async function initDb() {
  db.prepare(
    "CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, content TEXT, date TEXT, isDone BOOLEAN)"
  ).run();
}

module.exports = { initDb, db };
