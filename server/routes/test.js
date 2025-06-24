// Example route in routes/test.js or directly in server.js
module.exports = (app) => {
  app.get("/api/db-test", async (req, res) => {
    try {
      const [results] = await sequelize.query("SELECT NOW()"); // or use any model method like User.findAll()
      res.json({ connected: true, time: results[0].now });
    } catch (err) {
      console.error("Database connection failed:", err);
      res.status(500).json({ connected: false, error: err.message });
    }
  });
};
