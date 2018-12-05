var Redis = require('ioredis');

var writeClient = new Redis(),
    listenClient = new Redis(),
    destinationChannel = 'backendD3Youtube';

listenClient.subscribe('WIP');
listenClient.on('message', function(channel, message) {
    try {
        var m = JSON.parse(message);
        m.a = true;
        writeClient.publish(destinationChannel, JSON.stringify(m));
    } catch(ex) {
        console.debug(`[RedisClient] Error processing incoming message: ${ex.message}`);
        console.debug(ex.stack);
    }
});
