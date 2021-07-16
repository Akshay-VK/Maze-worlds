var express = require('express');

var app = express();

const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));

app.listen((port), () => {
        console.log(`Server started at port ${port}`);
});
