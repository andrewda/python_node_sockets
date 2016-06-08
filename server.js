var express = require('express');
var socket = require('socket.io');
var http = require('http');
var readline = require('readline');

var app = express();
var server = http.createServer(app);
var io = socket(server);

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var port = process.env.PORT || 3000;

function ask() {
	rl.question('Message: ', function(text) {
		io.emit('alert', {
			'm': text,
		});

		ask();
	});
}

server.listen(port, function() {
	console.log('Server listening on port', port);
    
	ask();
});
