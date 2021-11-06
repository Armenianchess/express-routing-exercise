const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/mean', function (req, res) {
    let num = req.param('num')
    let numArray = num.split(',')
    console.log(numArray)
    let ttl = 0;
    for (let i = 0; i < numArray.length; i++) {
        let intNum = parseInt(numArray[i])
        ttl += intNum
    }
    let mean = ttl / numArray.length
    return res.send(`the mean = ${mean}`);
})



app.get('/median', function (req, res) {
    let num = req.param('num')
    let numArray = num.split(',')
    console.log(numArray)
    let median = numArray;

    let arrLength = numArray.length;
    console.log(arrLength)
    if (arrLength % 2 != 0) {
        console.log(arrLength)
        console.log(numArray)
        median = numArray[Math.ceil((arrLength / 2) - 1)]
        console.log(median)
    } else {
        let num1 = 0;
        let num2 = 0;
        console.log(arrLength)
        console.log(numArray)
        num1 = numArray[Math.ceil((arrLength / 2))]
        num2 = numArray[Math.ceil((arrLength / 2) - 1)]
        median = (parseInt(num1) + parseInt(num2)) / 2
        console.log(median)
    }

    return res.send(`${median}`);
})



app.get('/mode', function (req, res) {
    return res.send('a route');
})




app.listen(3000, function () {
    console.log('Server started on port 3000.');
});
