var app = require('./app');
var PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
	console.log(`EtherScripter is listening on port ${PORT}`);
});