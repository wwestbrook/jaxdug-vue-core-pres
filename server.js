const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const indexHtml = (() => {
	return fs.readFileSync(path.resolve(__dirname, './presentation/views/index.html'), 'utf-8')
})();

// app.use('/dist', express.static(path.resolve(__dirname, './dist')));

// require('./build/dev-server')(app);

const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
	res.write(indexHtml);
	res.end();
});

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`)
});
