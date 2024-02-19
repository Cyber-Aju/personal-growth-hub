const express = require("express");
const router = express.Router();
const db = require('../db/conn'); // Import the database connection

// Define CRUD operations
router.get("/routines", async (req, res) => {
  try {
    // Implement logic to retrieve user's routines from the database
    const userId = req.user.id; // Assuming you have user authentication middleware
    const result = await db.query('SELECT * FROM routines WHERE user_id = $1', [userId]);
    
    res.json({ routines: result.rows });
  } catch (error) {
    console.error("Error fetching routines:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/routines", async (req, res) => {
  try {
    const { userId, activity, duration } = req.body;
    
    // Implement logic to create a new routine in the database
    const result = await db.query('INSERT INTO routines (user_id, activity, duration) VALUES ($1, $2, $3) RETURNING *', [userId, activity, duration]);

    res.json({ message: "Routine created successfully", routine: result.rows[0] });
  } catch (error) {
    console.error("Error creating routine:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add similar routes for updating and deleting routines

module.exports = router;
