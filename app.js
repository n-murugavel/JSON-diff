/**
 * Node - Application Initialize
 */
var express = require('express');
var app = express();

app.use(express.static('./'));
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('images'));

var server = app.listen(1111, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('JSON-diff app listening at http://%s:%s,', host, port);
});
