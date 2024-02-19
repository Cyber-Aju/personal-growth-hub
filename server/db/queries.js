// server/db/queries.js
const pool = require('./conn');

const createTable = `
  CREATE TABLE IF NOT EXISTS goals (
    id SERIAL PRIMARY KEY,
    description TEXT
  );
`;

const getGoals = 'SELECT * FROM goals ORDER BY id';

const addGoal = 'INSERT INTO goals (description) VALUES ($1)';

module.exports = { createTable, getGoals, addGoal };
