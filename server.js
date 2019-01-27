//Node JS

const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());
//app.use(express.static("build"));
app.use(express.static("public"));
const cources = [
  { id: 1, name: "cource1" },
  { id: 2, name: "cource2" },
  { id: 3, name: "cource3" },
  { id: 4, name: "cource4" }
];
app.get("/", (req, res) => {
  res.send("index.html");
});

app.get("/api/cources", (req, res) => {
  res.send(cources);
});

// /api/cources/1

app.get("/api/cources/:id", (req, res) => {
  const cource = cources.find(c => c.id === parseInt(req.params.id));
  if (!cource) {
    // 404
    res.status(404).send(`this cource with given ID was not found.`);
    return;
  }
  res.send(cource);
});

app.post("/api/cources", (req, res) => {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    // 400 Bad Request
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const cource = {
    id: cources.length + 1,
    name: req.body.name
  };
  cources.push(cource);
  res.send(cources);
});

app.put("/api/cources/:id", (req, res) => {
  const cource = cources.find(c => c.id === parseInt(req.params.id));
  if (!cource)
    return res.status(404).send(`this cource with given ID was not found.`);

  const { error } = validateCource(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  cource.name = req.body.name;
  res.send(cource);
});

app.delete("/api/cources/:id", (req, res) => {
  const cource = cources.find(c => c.id === parseInt(req.params.id));
  if (!cource)
    return res.status(404).send(`this cource with given ID was not found.`);

  const index = cources.indexOf(cource);
  cources.splice(index, 1);

  res.send(cource);
});

function validateCource(cource) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(cource, schema);
}

app.get("/api/posts/:year/:mont", (req, res) => {
  res.send(req.query);
});

// PORT
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening ${port}`));

//nodemon.cmd .\index.js
