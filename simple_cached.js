var simplecached = require('simplecached');

var options = {
    port: 11312,
    host: '192.168.1.15'
};

var server = new simplecached.Server(11312, function(error, result) {
    console.log('\n[SERVER STARTED]\n');
});

var client = new simplecached.Client(options, function(error) {
    console.log('\nConnecting to server...\n');
    var key = 'testing';
    var value = 'real value';
    client.set(key, value, function(error, result) {
        console.assert(!error, 'Error setting key');
        console.assert(result, 'Could not set key');
        console.log("\n>Starting write operation...\n");
        console.log("\n>The value to be written is: "+value+"\n");
        client.get(key, function(error, result) {
            console.assert(!error, 'Error getting key');
            console.assert(result == value, 'Invalid get key');
            console.log("\n>Starting read operation...\n");
            console.log("\n>The value read is: "+result+"\n");
            client.close(function(error) {
                console.assert(!error, 'Error closing client');
                console.log('\nDisconnecting from server...\n');
                server.close();
                console.log("\n[SERVER CLOSED]\n");
            });
        });
    });
});

