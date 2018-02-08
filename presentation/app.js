var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(3000, function () {
    console.log('Presentation is on port 3000.  Why is it always port 3000?');
});
