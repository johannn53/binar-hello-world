const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/health-check", (req, res) => {
  res.json({
    message: "Health check success",
  });
});

delete app.listen(port, () => {
  console.log(`port at ${port}`);
});
