const Redis = require('ioredis');

const redis = new Redis('10.10.8.2');

var settings = require('./settings.json');
var ioc = require('socket.io-client');
var socket = ioc.connect(`http://${settings.SOCKET_IP}:${settings.SOCKET_PORT}`);

var sensors = {};

redis.on('message', (channel, message) => {
    console.log(`Received the following message from ${channel}: ${message}`);

    try {
        message = JSON.parse(message);
        console.log(message);
        laser = message.p[0];
        action = "_off";
        reading = parseFloat(message.p[1]);

        // colocar os outros lasers aqui
        if (laser == "268566532") {
            laser = "sensor_1a";
            if (reading > 400 && reading < 600) {
                action = "_on";
            }
        }

        action = laser + action;

        socket.emit("sensor", action);

    } catch(ex) {
        console.debug(`[RedisClient] Error processing incoming message: ${ex.message}`);
        console.debug(ex.stack);
    }

});

const channel = 'backendD3YoutubeSensors';

redis.subscribe(channel, (error, count) => {
    if (error) {
        throw new Error(error);
    }
    console.log(`Subscribed to ${count} channel. Listening for updates on the ${channel} channel.`);
});
