//main functions
var helper = require('./libs/shared');
var settings = require('./settings.json');
var ioc = require('socket.io-client');
var socket = ioc.connect(`http://${settings.SOCKET_IP}:${settings.SOCKET_PORT}`);
var Motor = require('./libs/motor');

// animations
// var ScrollText = require('./animations/scroll-text');

var Redis = require('./libs/redis'),
    r = new Redis();

var motors = {
    "motor_a1": new Motor("motor_a1"),
    "motor_a2": new Motor("motor_a2"),
    "motor_a3": new Motor("motor_a3"),
    "motor_a4": new Motor("motor_a4"),
    "motor_b1": new Motor("motor_b1"),
    "motor_b2": new Motor("motor_b2"),
    "motor_b3": new Motor("motor_b3"),
    "motor_b4": new Motor("motor_b4"),
    "motor_c1": new Motor("motor_c1"),
    "motor_c2": new Motor("motor_c2"),
    "motor_c3": new Motor("motor_c3"),
    "motor_c4": new Motor("motor_c4")
}

var petal_1 = ["motor_a1", "motor_a2", "motor_a3", "motor_a4"]
var petal_2 = ["motor_b1", "motor_b2", "motor_b3", "motor_b4"]
var petal_3 = ["motor_c1", "motor_c2", "motor_c3", "motor_c4"]


var petal = function(petal) {

    console.log(petal);

    if (petal == 'petal_1_up') {
        petal_1.forEach((motor, index) => {
            var current_motor = motors[motor];
            current_motor.sendCommand(0);
            socket.emit("exec_front", { "motor": motor, "command": 0 });
        });
    }

    if (petal == 'petal_1_down') {
        petal_1.forEach((motor, index) => {
            var current_motor = motors[motor];
            current_motor.sendCommand(100);
            socket.emit("exec_front", { "motor": motor, "command": 100 });
        });
    }

    if (petal == 'petal_2_up') {
        petal_2.forEach((motor, index) => {
            var current_motor = motors[motor];
            current_motor.sendCommand(0);
            socket.emit("exec_front", { "motor": motor, "command": 0 });
        });
    }

    if (petal == 'petal_2_down') {
        petal_2.forEach((motor, index) => {
            var current_motor = motors[motor];
            current_motor.sendCommand(100);
            socket.emit("exec_front", { "motor": motor, "command": 100 });
        });
    }

    if (petal == 'petal_3_up') {
        petal_3.forEach((motor, index) => {
            var current_motor = motors[motor];
            current_motor.sendCommand(0);
            socket.emit("exec_front", { "motor": motor, "command": 0 });
        });
    }

    if (petal == 'petal_3_down') {
        petal_3.forEach((motor, index) => {
            var current_motor = motors[motor];
            current_motor.sendCommand(100);
            socket.emit("exec_front", { "motor": motor, "command": 100 });
        });
    }

}





socket.on('connect', () => {
        helper.logger.debug(`[Processor] Connected to port ${settings.SOCKET_PORT}`);
    })

    // COMANDOS CHEGAM AQUI
    .on('exec', (command) => {
        motors[command.motor].sendCommand(command.command);
        socket.emit("exec_front", command.command)
        helper.logger.debug(`[Processor] Received Command ${command.command}`);
    })

    .on('exec_petal', (command) => {
        petal(command);
    })

    .on('disconnect', () => {
        helper.logger.debug(`[Processor] Disconnected from port ${settings.SOCKET_PORT}`);
    });
