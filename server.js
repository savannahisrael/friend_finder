var express = require("express");
var path = require("path");

//SET UP EXPRESS SERVER//
var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//REQUIRE ROUTING//
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// STARTS THE SERVER TO BEGIN LISTENING //
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});