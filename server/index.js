const express = require("express");

const app = express();

app.get("/temperature", function (request, response) {
  response.send("24 °C");
});

app.get("/humidity", function (request, response) {
  response.send("48 %");
});

app.listen(3000, function () {
  console.log(
    "The commander server is listening on port 3000 ::: http://localhost:3000"
  );
});
