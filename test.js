var http = require('http');
var port = 8180;
var cont = 0;

function handle_request(require,response){
	response.writeHead(200, {
		'Content-Type' : 'Text/plain'
	});
	
	response.end('hola mundo, Bienvenido al test\n');
	
	cont ++;
	console.log('peticion ' + cont);

	message.statusMessage('hola');
}

http.createServer(handle_request).listen(port, '127.0.0.1');

console.log('Iniciando server http Node.js en http://127.0.0.1:' + port);
