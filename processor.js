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
    ///DESCE COM DELAY

    if (petal == 'petal_1_down') {

        motors[petal_1[0]].sendCommand(100);
        socket.emit("exec_front", { "motor": petal_1[0], "command": 100 });

        setTimeout(function(){

            motors[petal_1[1]].sendCommand(100);
            socket.emit("exec_front", { "motor": petal_1[1], "command": 100 });

            setTimeout(function(){

                motors[petal_1[2]].sendCommand(100);
                socket.emit("exec_front", { "motor": petal_1[2], "command": 100 });
                setTimeout(function(){

                    motors[petal_1[3]].sendCommand(100);
                    socket.emit("exec_front", { "motor": petal_1[3], "command": 100 });

                }, 500);

            }, 500);

        }, 500);

    }

    ///DESCE AO MESMO TEMPO

    // if (petal == 'petal_1_down') {
    //     petal_1.forEach((motor, index) => {
    //         var current_motor = motors[motor];
    //         current_motor.sendCommand(100);
    //         socket.emit("exec_front", { "motor": motor, "command": 100 });
    //     });
    // }

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

var idle_petal_1 = false;
var idle_petal_2 = false;
var idle_petal_3 = false;

var sensor_a1 = false;
var sensor_a2 = false;
var sensor_a3 = false;
var sensor_b1 = false;
var sensor_b2 = false;
var sensor_b3 = false;
var sensor_c1 = false;
var sensor_c2 = false;
var sensor_c3 = false;


function run_idle_1(){

    if (idle_petal_1) {

        motors[petal_1[0]].sendCommand(100);
        motors[petal_1[2]].sendCommand(100);
        motors[petal_1[1]].sendCommand(0);
        motors[petal_1[3]].sendCommand(0);

        socket.emit("exec_front", { "motor": petal_1[0], "command": 100 });
        socket.emit("exec_front", { "motor": petal_1[2], "command": 100 });
        socket.emit("exec_front", { "motor": petal_1[1], "command": 0 });
        socket.emit("exec_front", { "motor": petal_1[3], "command": 0 });

        setTimeout(function(){

            if (idle_petal_1) {
                motors[petal_1[0]].sendCommand(0);
                motors[petal_1[2]].sendCommand(0);
                motors[petal_1[1]].sendCommand(100);
                motors[petal_1[3]].sendCommand(100);

                socket.emit("exec_front", { "motor": petal_1[0], "command": 0 });
                socket.emit("exec_front", { "motor": petal_1[2], "command": 0 });
                socket.emit("exec_front", { "motor": petal_1[1], "command": 100 });
                socket.emit("exec_front", { "motor": petal_1[3], "command": 100 });

                setTimeout(run_idle_1, 1000);
            }

        }, 1000);

    }

}

function run_idle_2(){

    if (idle_petal_2) {

        motors[petal_2[0]].sendCommand(100);
        motors[petal_2[2]].sendCommand(100);
        motors[petal_2[1]].sendCommand(0);
        motors[petal_2[3]].sendCommand(0);

        socket.emit("exec_front", { "motor": petal_2[0], "command": 100 });
        socket.emit("exec_front", { "motor": petal_2[2], "command": 100 });
        socket.emit("exec_front", { "motor": petal_2[1], "command": 0 });
        socket.emit("exec_front", { "motor": petal_2[3], "command": 0 });

        setTimeout(function(){

            if (idle_petal_2) {
                motors[petal_2[0]].sendCommand(0);
                motors[petal_2[2]].sendCommand(0);
                motors[petal_2[1]].sendCommand(100);
                motors[petal_2[3]].sendCommand(100);

                socket.emit("exec_front", { "motor": petal_2[0], "command": 0 });
                socket.emit("exec_front", { "motor": petal_2[2], "command": 0 });
                socket.emit("exec_front", { "motor": petal_2[1], "command": 100 });
                socket.emit("exec_front", { "motor": petal_2[3], "command": 100 });

                setTimeout(run_idle_2, 1000);
            }

        }, 1000);
    }

}

function run_idle_3(){

    if (idle_petal_3) {

        motors[petal_3[0]].sendCommand(100);
        motors[petal_3[2]].sendCommand(100);
        motors[petal_3[1]].sendCommand(0);
        motors[petal_3[3]].sendCommand(0);

        socket.emit("exec_front", { "motor": petal_3[0], "command": 100 });
        socket.emit("exec_front", { "motor": petal_3[2], "command": 100 });
        socket.emit("exec_front", { "motor": petal_3[1], "command": 0 });
        socket.emit("exec_front", { "motor": petal_3[3], "command": 0 });

        setTimeout(function(){

            if (idle_petal_3) {
                motors[petal_3[0]].sendCommand(0);
                motors[petal_3[2]].sendCommand(0);
                motors[petal_3[1]].sendCommand(100);
                motors[petal_3[3]].sendCommand(100);

                socket.emit("exec_front", { "motor": petal_3[0], "command": 0 });
                socket.emit("exec_front", { "motor": petal_3[2], "command": 0 });
                socket.emit("exec_front", { "motor": petal_3[1], "command": 100 });
                socket.emit("exec_front", { "motor": petal_3[3], "command": 100 });

                setTimeout(run_idle_3, 1000);
            }

        }, 1000);

    }

}

function idle(command) {

    if (command == 'idle_1_on') {
        if (!idle_petal_1) {
            setTimeout(run_idle_1, 100);
        }
        idle_petal_1 = true;
    }
    if (command == 'idle_1_off') {
        idle_petal_1 = false;
    }
    if (command == 'idle_2_on') {
        if (!idle_petal_2) {
            setTimeout(run_idle_2, 100);
        }
        idle_petal_2 = true;
    }
    if (command == 'idle_2_off') {
        idle_petal_2 = false;
    }
    if (command == 'idle_3_on') {
        if (!idle_petal_3) {
            setTimeout(run_idle_3, 100);
        }
        idle_petal_3 = true;
    }
    if (command == 'idle_3_off') {
        idle_petal_3 = false;
    }

}

function activatedSensorA() {


    if (sensor_a1 && sensor_a2 && sensor_a3) {

        setTimeout(function(){
            socket.emit('petal', 'petal_1_down');

            ///PETALA SOBE
            // setTimeout(function(){
            //     socket.emit('petal', 'petal_1_up');
            //     setTimeout(activatedSensor, 100);
            // }, 1000);

        },1000);


    } else if (sensor_a1 || sensor_a2 || sensor_a3) {
        idle_petal_1 = false;

        setTimeout(function(){
            motors[petal_1[0]].sendCommand(0);
            motors[petal_1[1]].sendCommand(0);
            motors[petal_1[2]].sendCommand(0);
            motors[petal_1[3]].sendCommand(0);

            socket.emit("exec_front", { "motor": petal_1[0], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[1], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[2], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[3], "command": 0 });

            setTimeout(activatedSensorA, 100);

        }, 1000);
    } else {
        setTimeout(activatedSensorA, 100);
    }

    ///ELSE PRA LIGAR IDLE
    // else if (!sensor_a1 && !sensor_a2 && !sensor_a3) {
    //     setTimeout(function(){
    //         if (!idle_petal_1) {
    //             idle_petal_1 = true;
    //             run_idle_1();
    //         }
    //         setTimeout(activatedSensor, 100);
    //     }, 1000);
    // }
}

function activatedSensorB() {

    if (sensor_b1 && sensor_b2 && sensor_b3) {

        setTimeout(function(){
            socket.emit('petal', 'petal_2_down');

        },1000);


    } else if (sensor_b1 || sensor_b2 || sensor_b3) {
        idle_petal_2 = false;

        setTimeout(function(){
            motors[petal_2[0]].sendCommand(0);
            motors[petal_2[1]].sendCommand(0);
            motors[petal_2[2]].sendCommand(0);
            motors[petal_2[3]].sendCommand(0);

            socket.emit("exec_front", { "motor": petal_2[0], "command": 0 });
            socket.emit("exec_front", { "motor": petal_2[1], "command": 0 });
            socket.emit("exec_front", { "motor": petal_2[2], "command": 0 });
            socket.emit("exec_front", { "motor": petal_2[3], "command": 0 });

            setTimeout(activatedSensorB, 100);

        }, 1000);
    } else {
        setTimeout(activatedSensorB, 100);
    }

}

function activatedSensorC() {

    if (sensor_c1 && sensor_c2 && sensor_c3) {

        setTimeout(function(){
            socket.emit('petal', 'petal_3_down');

        },1000);


    } else if (sensor_c1 || sensor_c2 || sensor_c3) {
        idle_petal_3 = false;

        setTimeout(function(){
            motors[petal_3[0]].sendCommand(0);
            motors[petal_3[1]].sendCommand(0);
            motors[petal_3[2]].sendCommand(0);
            motors[petal_3[3]].sendCommand(0);

            socket.emit("exec_front", { "motor": petal_3[0], "command": 0 });
            socket.emit("exec_front", { "motor": petal_3[1], "command": 0 });
            socket.emit("exec_front", { "motor": petal_3[2], "command": 0 });
            socket.emit("exec_front", { "motor": petal_3[3], "command": 0 });

            setTimeout(activatedSensorC, 100);

        }, 1000);
    } else {
        setTimeout(activatedSensorC, 100);
    }
}

activatedSensorA();
activatedSensorB();
activatedSensorC();


function sensor(command) {

    if (command == 'sensor_a1_on') {
        sensor_a1 = true;
    }
    if (command == 'sensor_a1_off') {
        sensor_a1 = false;
    }
    console.log("sensor_a1: " + sensor_a1);

    if (command == 'sensor_a2_on') {
        sensor_a2 = true;
    }
    if (command == 'sensor_a2_off') {
        sensor_a2 = false;
    }
    console.log("sensor_a2: " + sensor_a2);

    if (command == 'sensor_a3_on') {
        sensor_a3 = true;
    }
    if (command == 'sensor_a3_off') {
        sensor_a3 = false;
    }
    console.log("sensor_a3: " + sensor_a3);

    if (command == 'sensor_b1_on') {
        sensor_b1 = true;
    }
    if (command == 'sensor_b1_off') {
        sensor_b1 = false;
    }
    console.log("sensor_b1: " + sensor_b1);

    if (command == 'sensor_b2_on') {
        sensor_b2 = true;
    }
    if (command == 'sensor_b2_off') {
        sensor_b2 = false;
    }
    console.log("sensor_b2: " + sensor_b2);

    if (command == 'sensor_b3_on') {
        sensor_b3 = true;
    }
    if (command == 'sensor_b3_off') {
        sensor_b3 = false;
    }
    console.log("sensor_b3: " + sensor_b3);

    if (command == 'sensor_c1_on') {
        sensor_c1 = true;
    }
    if (command == 'sensor_c1_off') {
        sensor_c1 = false;
    }
    console.log("sensor_c1: " + sensor_c1);

    if (command == 'sensor_c2_on') {
        sensor_c2 = true;
    }
    if (command == 'sensor_c2_off') {
        sensor_c2 = false;
    }
    console.log("sensor_c2: " + sensor_c2);

    if (command == 'sensor_c3_on') {
        sensor_c3 = true;
    }
    if (command == 'sensor_c3_off') {
        sensor_c3 = false;
    }
    console.log("sensor_c3: " + sensor_c3);


}

socket.on('connect', () => {
        helper.logger.debug(`[Processor] Connected to port ${settings.SOCKET_PORT}`);
    })

    // COMANDOS CHEGAM AQUI
    .on('exec', (command) => {
        motors[command.motor].sendCommand(command.command);
        socket.emit("exec_front", command)
        helper.logger.debug(`[Processor] Received Command ${command.command}`);
    })

    .on('exec_sensor', (command) => {
        sensor(command);
    })

    .on('exec_idle', (command) => {
        idle(command);
    })

    .on('exec_petal', (command) => {
        petal(command);
    })

    .on('disconnect', () => {
        helper.logger.debug(`[Processor] Disconnected from port ${settings.SOCKET_PORT}`);
    });
