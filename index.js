const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Hii server is hosted succefully");
});

app.listen(port, () => {
  console.log(`server is listening at port http://localhost:${port}`);
});
