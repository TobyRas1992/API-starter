const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json()); //creates express application that uses middleware to only parse json for endpoints

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "red",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }
  //NB: create logic for db storage at a later point!

  res.send({
    tshirt: `T shirt number ${id} has logo: ${logo}`,
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
