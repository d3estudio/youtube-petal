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
    "motor_1F1": new Motor("268500993"),
    "motor_1F2": new Motor("268500994"),
    "motor_1B1": new Motor("268500995"),
    "motor_1B2": new Motor("268500996"),
    "motor_2F1": new Motor("268500997"),
    "motor_2F2": new Motor("268500998"),
    "motor_2B1": new Motor("268500999"),
    "motor_2B2": new Motor("268501000"),
    "motor_3F1": new Motor("268501001"),
    "motor_3F2": new Motor("268501002"),
    "motor_3B1": new Motor("268501003"),
    "motor_3B2": new Motor("268501004")
}

var petal_1 = ["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2"]
var petal_2 = ["motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2"]
var petal_3 = ["motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"]

var all_motors = ["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"]


var petal = function(petal) {

    console.log(petal);

    ///DESCE COM DELAY
    //TODO delay pra petala

    if (petal == 'petal_1_down') {

        motors[petal_1[3]].sendCommand(100);
        socket.emit("exec_front", { "motor": petal_1[3], "command": 100 });

        setTimeout(function(){

            motors[petal_1[2]].sendCommand(100);
            socket.emit("exec_front", { "motor": petal_1[2], "command": 100 });

            setTimeout(function(){

                motors[petal_1[1]].sendCommand(100);
                socket.emit("exec_front", { "motor": petal_1[1], "command": 100 });
                setTimeout(function(){

                    motors[petal_1[0]].sendCommand(100);
                    socket.emit("exec_front", { "motor": petal_1[0], "command": 100 });

                }, 0); //WARNING: todas descem e delay pra F1

            }, 0); // B1 e B2 descem e delay pra F1 e F2

        }, 0); // WARNING: B2 desce e delay pras outras

    }
    if (petal == 'petal_1_up') {

        motors[petal_1[0]].sendCommand(0);
        socket.emit("exec_front", { "motor": petal_1[0], "command": 0 });

        setTimeout(function(){

            motors[petal_1[1]].sendCommand(0);
            socket.emit("exec_front", { "motor": petal_1[1], "command": 0 });

            setTimeout(function(){

                motors[petal_1[2]].sendCommand(0);
                socket.emit("exec_front", { "motor": petal_1[2], "command": 0 });
                setTimeout(function(){

                    motors[petal_1[3]].sendCommand(0);
                    socket.emit("exec_front", { "motor": petal_1[3], "command": 0 });

                }, 0); // WARNING: todas sobem e delay pra B2

            }, 0); // F1 e F2 sobem e delay pra B1 e B2

        }, 0); //WARNING: F1 sobe e delay pras outras

    }

    ///DESCE AO MESMO TEMPO

    // if (petal == 'petal_1_down') {
    //     petal_1.forEach((motor, index) => {
    //         var current_motor = motors[motor];
    //         current_motor.sendCommand(100);
    //         socket.emit("exec_front", { "motor": motor, "command": 100 });
    //     });
    // }
    ///SOBE AO MESMO TEMPO

    // if (petal == 'petal_1_up') {
    //     petal_1.forEach((motor, index) => {
    //         var current_motor = motors[motor];
    //         current_motor.sendCommand(0);
    //         socket.emit("exec_front", { "motor": motor, "command": 0 });
    //     });
    // }


    if (petal == 'petal_2_down') {

        motors[petal_2[3]].sendCommand(100);
        socket.emit("exec_front", { "motor": petal_2[3], "command": 100 });

        setTimeout(function(){

            motors[petal_2[2]].sendCommand(100);
            socket.emit("exec_front", { "motor": petal_2[2], "command": 100 });

            setTimeout(function(){

                motors[petal_2[1]].sendCommand(100);
                socket.emit("exec_front", { "motor": petal_2[1], "command": 100 });
                setTimeout(function(){

                    motors[petal_2[0]].sendCommand(100);
                    socket.emit("exec_front", { "motor": petal_2[0], "command": 100 });

                }, 0); //WARNING: todas descem e delay pra F1

            }, 0); // F1 e F2 sobem e delay pra B1 e B2

        }, 0); //WARNING: F1 sobe e delay pras outras

    }
    if (petal == 'petal_2_up') {

        motors[petal_2[0]].sendCommand(0);
        socket.emit("exec_front", { "motor": petal_2[0], "command": 0 });

        setTimeout(function(){

            motors[petal_2[1]].sendCommand(0);
            socket.emit("exec_front", { "motor": petal_2[1], "command": 0 });

            setTimeout(function(){

                motors[petal_2[2]].sendCommand(0);
                socket.emit("exec_front", { "motor": petal_2[2], "command": 0 });
                setTimeout(function(){

                    motors[petal_2[3]].sendCommand(0);
                    socket.emit("exec_front", { "motor": petal_2[3], "command": 0 });

                }, 0); // WARNING: todas sobem e delay pra B2

            }, 0); // F1 e F2 sobem e delay pra B1 e B2

        }, 0); //WARNING: F1 sobe e delay pras outras

    }


    if (petal == 'petal_3_down') {

        motors[petal_3[3]].sendCommand(100);
        socket.emit("exec_front", { "motor": petal_3[3], "command": 100 });

        setTimeout(function(){

            motors[petal_3[2]].sendCommand(100);
            socket.emit("exec_front", { "motor": petal_3[2], "command": 100 });

            setTimeout(function(){

                motors[petal_3[1]].sendCommand(100);
                socket.emit("exec_front", { "motor": petal_3[1], "command": 100 });
                setTimeout(function(){

                    motors[petal_3[0]].sendCommand(100);
                    socket.emit("exec_front", { "motor": petal_3[0], "command": 100 });

                }, 0); //WARNING: todas descem e delay pra F1

            }, 0); // F1 e F2 sobem e delay pra B1 e B2

        }, 0); //WARNING: F1 sobe e delay pras outras

    }
    if (petal == 'petal_3_up') {

        motors[petal_3[0]].sendCommand(0);
        socket.emit("exec_front", { "motor": petal_3[0], "command": 0 });

        setTimeout(function(){

            motors[petal_3[1]].sendCommand(0);
            socket.emit("exec_front", { "motor": petal_3[1], "command": 0 });

            setTimeout(function(){

                motors[petal_3[2]].sendCommand(0);
                socket.emit("exec_front", { "motor": petal_3[2], "command": 0 });
                setTimeout(function(){

                    motors[petal_3[3]].sendCommand(0);
                    socket.emit("exec_front", { "motor": petal_3[3], "command": 0 });

                }, 0); // WARNING: todas sobem e delay pra B2

            }, 0); // F1 e F2 sobem e delay pra B1 e B2

        }, 0); //WARNING: F1 sobe e delay pras outras

    }

}

var idle_petal_1 = false;
var idle_petal_2 = false;
var idle_petal_3 = false;

var sensor_1a = false;
var sensor_1b = false;
var sensor_1c = false;
var sensor_2a = false;
var sensor_2b = false;
var sensor_2c = false;
var sensor_3a = false;
var sensor_3b = false;
var sensor_3c = false;


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


    if (sensor_1a && sensor_1b && sensor_1c) {

        setTimeout(function(){
            socket.emit('petal', 'petal_1_down');

            ///PETALA SOBE
            // setTimeout(function(){
            //     socket.emit('petal', 'petal_1_up');
            //     setTimeout(activatedSensor, 100);
            // }, 1000);

        },1000);


    } else if (sensor_1a || sensor_1b || sensor_1c) {
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
    // else if (!sensor_1a && !sensor_1b && !sensor_1c) {
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

    if (sensor_2a && sensor_2b && sensor_2c) {

        setTimeout(function(){
            socket.emit('petal', 'petal_2_down');

        },1000);


    } else if (sensor_2a || sensor_2b || sensor_2c) {
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

    if (sensor_3a && sensor_3b && sensor_3c) {

        setTimeout(function(){
            socket.emit('petal', 'petal_3_down');

        },1000);


    } else if (sensor_3a || sensor_3b || sensor_3c) {
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

    if (command == 'sensor_1a_on') {
        sensor_1a = true;
    }
    if (command == 'sensor_1a_off') {
        sensor_1a = false;
    }
    console.log("sensor_1a: " + sensor_1a);

    if (command == 'sensor_1b_on') {
        sensor_1b = true;
    }
    if (command == 'sensor_1b_off') {
        sensor_1b = false;
    }
    console.log("sensor_1b: " + sensor_1b);

    if (command == 'sensor_1c_on') {
        sensor_1c = true;
    }
    if (command == 'sensor_1c_off') {
        sensor_1c = false;
    }
    console.log("sensor_1c: " + sensor_1c);

    if (command == 'sensor_2a_on') {
        sensor_2a = true;
    }
    if (command == 'sensor_2a_off') {
        sensor_2a = false;
    }
    console.log("sensor_2a: " + sensor_2a);

    if (command == 'sensor_2b_on') {
        sensor_2b = true;
    }
    if (command == 'sensor_2b_off') {
        sensor_2b = false;
    }
    console.log("sensor_2b: " + sensor_2b);

    if (command == 'sensor_2c_on') {
        sensor_2c = true;
    }
    if (command == 'sensor_2c_off') {
        sensor_2c = false;
    }
    console.log("sensor_2c: " + sensor_2c);

    if (command == 'sensor_3a_on') {
        sensor_3a = true;
    }
    if (command == 'sensor_3a_off') {
        sensor_3a = false;
    }
    console.log("sensor_3a: " + sensor_3a);

    if (command == 'sensor_3b_on') {
        sensor_3b = true;
    }
    if (command == 'sensor_3b_off') {
        sensor_3b = false;
    }
    console.log("sensor_3b: " + sensor_3b);

    if (command == 'sensor_3c_on') {
        sensor_3c = true;
    }
    if (command == 'sensor_3c_off') {
        sensor_3c = false;
    }
    console.log("sensor_3c: " + sensor_3c);


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
