const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Health check success",
  });
});

delete app.listen(port, () => {
  console.log(`port at ${port}`);
});
