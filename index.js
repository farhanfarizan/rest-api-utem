var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { Router } = require('express');

//middleware

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//I use bodyparser (configuration to configure that my API will encode the URL)
//i accept json in the body
var port = process.env.PORT || 8080

//routing

var name = "Farhan";
var router = express.Router();
router.get('/', (req,res) => {
    res.json({message: 'Hooray! my API works!!!'})
});

router.get('/hello', (req,res) => {
    res.json({message: 'Hello World'})
});

router.get('/goodbye/:name', (req,res) => {
    res.json({message: 'Goodbye ' + req.params.name})
})

router.post('/sum', (req,res) => {
    var sum = req.body.num1 + req.body.num2
    res.json({message : "The sum is " +sum})
})

app.use('/api', router);

app.listen(port);

console.log("Magic happened at port "+port);