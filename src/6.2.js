
const express = require('express');

const app = express();

let num = randomDieRoll();
console.log("random num is", num);

function randomDieRoll() {
    return 1 + Math.floor((Math.random() * 6))
}
//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p> page 1 </p>');
    // res.sendFile('./index.html', { root: __dirname})
    let num = randomDieRoll();
    
    res.send(`<p>Roll 1 num is ${num}</p>`);
});

app.get('/roll2', (req, res) => {

    let num = randomDieRoll();
    // res.send('<p> page 2 </p>');
    res.send(`<p>Roll 2 num is ${num}</p>`);
});
//redirect to 404 error page when
app.use((req, res) => {
    res.sendFile('./404.html', { root: __dirname})
});