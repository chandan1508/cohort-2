const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.send("Hello India");
})

app.listen(3000);