// GOOD

// Declarations
var express = require("express");
var expressHand = require("express-handlebars");
var routes = require("./controllers/burgers_controller");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing (if not, req.body is always undefined)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Express view engine
app.engine('handlebars', expressHand({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// / route
app.use("/", routes);
// app.get('/', function (req, res) {
//     res.render('home');
// });

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });