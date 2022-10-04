__path = process.cwd()

const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.sendFile(__path + '/index.html')
	})

app.listen(process.env.PORT || 8080, () => console.log('Server work at localhost:8080'))