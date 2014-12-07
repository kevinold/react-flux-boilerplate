var Hapi = require('hapi');
var server = new Hapi.Server(3000);

// Statically serve 'dist' directory
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'dist'
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
