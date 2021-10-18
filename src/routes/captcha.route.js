const { Router } = require('express');
const fs = require('fs');
const tes = require('tesseract.js');
const path = require('path');
const jimp = require('jimp');
const axios = require('axios');

const router = Router();

router.get('/getCaptcha', (req, res) => {
	try {
		const { img } = req.query;

		// const worker = createWorker({
		// 	logger: (m) => console.log(m),
		// });

		// (async () => {
		// 	await worker.load();
		// 	await worker.loadLanguage('eng');
		// 	await worker.initialize('eng');
		// 	const {
		// 		data: { text },
		// 	} = await worker.recognize(
		// 		path.join(__dirname, '../../public/BotDetectCaptcha.jpg')
		// 	);
		// 	console.log('jimp', text);
		// 	await worker.terminate();
		// })();

		res.send(
			'<h1 style="color:red">Hello gato</h1><img alt="cap" src="https://www.justiciachaco.gov.ar/dtiol/Login.aspx"/>'
		);
	} catch (e) {
		res.status(500).json(e);
	}
});

module.exports = router;
