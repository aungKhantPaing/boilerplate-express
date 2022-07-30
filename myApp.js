let express = require('express');
let app = express();
app.get('/', (req, res) => {
	const indexPath = __dirname + '/views/index.html'
	res.sendFile(indexPath)
})
console.log("Hello World");




































 module.exports = app;
