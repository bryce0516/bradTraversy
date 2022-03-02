const express = require("express");
const path = require("path");

const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "./src/static"), {
    extensions: ["js", "css"],
  })
);


const port = 3321

app.get("/*",(req,res) => {
    res.sendFile(path.resolve("./src/static", "./index.html"))
} )


app.listen(port, () => console.log("server =>" + port))