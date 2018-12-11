var Redis = require('ioredis');
var listenClient = new Redis();

var settings = require('./settings.json');
var ioc = require('socket.io-client');
var socket = ioc.connect(`http://${settings.SOCKET_IP}:${settings.SOCKET_PORT}`);

// {
//     d: "colocar_novo_nome",
//     s: "whatever",
//     c: "leitura_laser",
//     p: ["75647564", "2.584758475"],
//     a: 0,
//     sq: 1
// }

var sensors = {};

listenClient.subscribe('colocar_novo_nome');
listenClient.on('message', function(channel, message) {
    try {
        message = JSON.parse(message);
        laser = message.p[0];
        action = "_off";
        reading = parseFloat(message.p[1]);
        
        // colocar os outros lasers aqui
        if (laser == "12312332") {
            laser = "sensor_1a";
            if (reading > 2 && reading < 3) {
                action = "_on";
            }
        }
        
        action = laser + action;

        if (laser in sensors) {
            if (sensors[laser] != action) {
                socket.emit("sensor", action);
                sensors[laser] = action;
            }
        } else {
            socket.emit("sensor", action);
            sensors[laser] = action;
        }

    } catch(ex) {
        console.debug(`[RedisClient] Error processing incoming message: ${ex.message}`);
        console.debug(ex.stack);
    }
});
