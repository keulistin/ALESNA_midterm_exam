//make sure to download express first

const express = require('express');
const app = express();
const port = 3000; //this is the port that we will use


app.get('/', (req, res) => {
    res.redirect('/test');
}); 

app.get('/test', (req, res) => {
    res.json({
        message: 'Express is working! Christine Anne A. Alesna' //output
        });
});

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});