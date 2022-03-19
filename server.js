const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function calculator(num1, num2,action) {
    var result;
    if(action=='add'){
        console.log("Add action is called")
        result= parseFloat(num1) + parseFloat(num2)

    }else if(action=='subtract'){
        console.log("Subtract action is called")
        result=parseFloat(num1) - parseFloat(num2)

    }else if(action=='multiply'){
        console.log("Multiply action is called")
        result=parseFloat(num1) * parseFloat(num2)

    }else {
        console.log("Divide action is called")
        result=parseFloat(num1) / parseFloat(num2)

    }
    return result
}

//URL: http://localhost:3000/add?num1=4&num2=4
app.get('/add/:num1/:num2', (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;
    const result = calculator(num1, num2,"add");
    res.send(`The answer is ${result}`);
});

//URL: http://localhost:3000/subtract/2/1
app.get('/subtract/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    // var difference = (num1 - num2).toString()
    // res.send(`The answer is ${difference}`);
    const result = calculator(num1, num2,"subtract");
    res.send(`The answer is ${result}`);
  })
  
  //URL: http://localhost:3000/multiply/2/1
  app.get('/multiply/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    const result = calculator(num1, num2,"multiply");
    res.send(`The answer is ${result}`);
  })
  
  //URL: http://localhost:3000/divide/2/1
  app.get('/divide/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    const result = calculator(num1, num2,"divide");
    res.send(`The answer is ${result}`);
  })

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});