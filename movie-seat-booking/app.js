const express = require("express");
const path = require("path");

const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "./public"), {
    extensions: ["js", "css","jpg"],
  })
);

const port = 3321;
console.log(path.resolve(__dirname, "./public"))
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("./public", "./index.html"));
});

app.listen(port, () => console.log("server port is on 3321"));
