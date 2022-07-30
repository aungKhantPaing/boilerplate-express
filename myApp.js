let express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
});

console.log("Hello World");




































 module.exports = app;
