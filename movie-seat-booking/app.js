const express = require("express");
const path = require("path");

const app = express();

const staticSer = app.use(
  "/src/static",
  express.static(path.resolve(__dirname, "./src/static"), {
    extensions: ["js", "css"],
  })
);

const port = 3321;
console.log("sd", staticSer)
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("./src", "./static/index.html"));
});

app.listen(port, () => console.log("server port is on 3321"));
