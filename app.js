const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/captcha.route.js');

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use('/captcha', routes);

app.listen(3500, () => {
	console.log('listen to port 3500');
});
