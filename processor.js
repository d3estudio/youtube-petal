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
    "motor_1B1": new Motor("111111111"),
    "motor_1B2": new Motor("111111111"),
    "motor_2F1": new Motor("111111111"),
    "motor_2F2": new Motor("111111111"),
    "motor_2B1": new Motor("111111111"),
    "motor_2B2": new Motor("111111111"),
    "motor_3F1": new Motor("111111111"),
    "motor_3F2": new Motor("111111111"),
    "motor_3B1": new Motor("111111111"),
    "motor_3B2": new Motor("111111111")
}

var petal_1 = ["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2"]
var petal_2 = ["motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2"]
var petal_3 = ["motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"]

var all_motors = ["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"]


var petal = function(petal) {

    // console.log(petal);

    ///DESCE COM DELAY
    //PARAMETRO delay pra petala

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
var idle_petal_1_last = false;
var idle_petal_2_last = false;
var idle_petal_3_last = false;


var one_sensor_active_1 = false;
var one_sensor_active_2 = false;
var one_sensor_active_3 = false;


var sensor_1a = false;
var sensor_1b = false;
var sensor_1c = false;
var sensor_2a = false;
var sensor_2b = false;
var sensor_2c = false;
var sensor_3a = false;
var sensor_3b = false;
var sensor_3c = false;

var allmotions_on = false;

var idle_1_running = false;

var delayIdle = 6000 // 5000 is the total time of a idle1 loop + some "gordurinha"

function run_idle_1(){

    console.log("LOOP IDLE 1");

    if (!allmotions_on) {
        return false;
    }

    setTimeout(function(){

        motors[petal_1[0]].sendCommand(15);
        motors[petal_1[1]].sendCommand(15);

        socket.emit("exec_front", { "motor": petal_1[0], "command": 15 });
        socket.emit("exec_front", { "motor": petal_1[1], "command": 15 });


        setTimeout(function(){

            motors[petal_1[0]].sendCommand(0);
            motors[petal_1[1]].sendCommand(0);

            socket.emit("exec_front", { "motor": petal_1[0], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[1], "command": 0 });

        }, delayIdle);
    }, delayIdle);
}

function run_idle_2(){

    console.log("LOOP IDLE 2");

    if (!allmotions_on) {
        return false;
    }

    setTimeout(function(){

        motors[petal_1[0]].sendCommand(22);
        motors[petal_1[1]].sendCommand(30);

        socket.emit("exec_front", { "motor": petal_1[0], "command": 22 });
        socket.emit("exec_front", { "motor": petal_1[1], "command": 30 });


        setTimeout(function(){

            motors[petal_1[0]].sendCommand(0);
            motors[petal_1[1]].sendCommand(0);

            socket.emit("exec_front", { "motor": petal_1[0], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[1], "command": 0 });

        }, delayIdle);
    }, delayIdle);
}

function run_idle_3(){

    console.log("LOOP IDLE 2");

    if (!allmotions_on) {
        return false;
    }

    setTimeout(function(){

        motors[petal_3[0]].sendCommand(8);
        setTimeout(function(){
            motors[petal_3[1]].sendCommand(0);
        }, 50);
        setTimeout(function(){
            motors[petal_3[2]].sendCommand(25);
        }, 100);
        setTimeout(function(){
            motors[petal_3[3]].sendCommand(0);
        }, 150);


        socket.emit("exec_front", { "motor": petal_3[0], "command": 8 });
        setTimeout(function(){
            socket.emit("exec_front", { "motor": petal_3[1], "command": 0 });
        }, 50);
        setTimeout(function(){
            socket.emit("exec_front", { "motor": petal_3[2], "command": 25 });
        }, 100);
        setTimeout(function(){
            socket.emit("exec_front", { "motor": petal_3[3], "command": 0 });
        }, 150);

        setTimeout(function(){

            motors[petal_3[0]].sendCommand(0);
            setTimeout(function(){
                motors[petal_3[1]].sendCommand(12);
            }, 50);
            setTimeout(function(){
                motors[petal_3[2]].sendCommand(0);
            }, 100);
            setTimeout(function(){
                motors[petal_3[3]].sendCommand(33);
            }, 150);

            socket.emit("exec_front", { "motor": petal_3[0], "command": 0 });
            setTimeout(function(){
                socket.emit("exec_front", { "motor": petal_3[1], "command": 12 });
            }, 50);
            setTimeout(function(){
                socket.emit("exec_front", { "motor": petal_3[2], "command": 0 });
            }, 100);
            setTimeout(function(){
                socket.emit("exec_front", { "motor": petal_3[3], "command": 33 });
            }, 150);

        }, delayIdle);
    }, delayIdle);
}


// control the loop
var intervalIdle1 = false;
var intervalIdle2 = false;
var intervalIdle3 = false;


// start an idle mode for a given petal
function idle(command) {
    //PARAMETRO delay de mensagem

    if (command == 'idle_1_on' && allmotions_on) {
        // start a loop with idle_1
        intervalIdle1 = setInterval(run_idle_1, delayIdle * 2 + 500);
    }
    if (command == 'idle_1_off') {
        // stop the loop with idle1
        clearInterval(intervalIdle1);
        intervalIdle1 = false;
        setTimeout(function(){
            motors[petal_1[0]].sendCommand(0);
            motors[petal_1[1]].sendCommand(0);
            motors[petal_1[2]].sendCommand(0);
            motors[petal_1[3]].sendCommand(0);

            socket.emit("exec_front", { "motor": petal_1[0], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[1], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[2], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[3], "command": 0 });
        }, delayIdle); // 5000 is the total time of a idle1 loop + some "gordurinha"

    }

    if (command == 'idle_2_on' && allmotions_on) {
        // start a loop with idle_2
        intervalIdle2 = setInterval(run_idle_2, delayIdle * 2);
    }
    if (command == 'idle_2_off') {
        // stop the loop with idle1
        clearInterval(intervalIdle2);
        intervalIdle2 = false;
        setTimeout(function(){
            motors[petal_2[0]].sendCommand(0);
            motors[petal_2[1]].sendCommand(0);
            motors[petal_2[2]].sendCommand(0);
            motors[petal_2[3]].sendCommand(0);

            socket.emit("exec_front", { "motor": petal_2[0], "command": 0 });
            socket.emit("exec_front", { "motor": petal_2[1], "command": 0 });
            socket.emit("exec_front", { "motor": petal_2[2], "command": 0 });
            socket.emit("exec_front", { "motor": petal_2[3], "command": 0 });
        }, delayIdle); // 5000 is the total time of a idle1 loop + some "gordurinha"

    }

    if (command == 'idle_3_on' && allmotions_on) {
        // start a loop with idle_2
        intervalIdle3 = setInterval(run_idle_3, delayIdle * 2);
    }
    if (command == 'idle_3_off') {
        // stop the loop with idle1
        clearInterval(intervalIdle3);
        intervalIdle3 = false;
        setTimeout(function(){
            motors[petal_3[0]].sendCommand(0);
            motors[petal_3[1]].sendCommand(0);
            motors[petal_3[2]].sendCommand(0);
            motors[petal_3[3]].sendCommand(0);

            socket.emit("exec_front", { "motor": petal_3[0], "command": 0 });
            socket.emit("exec_front", { "motor": petal_3[1], "command": 0 });
            socket.emit("exec_front", { "motor": petal_3[2], "command": 0 });
            socket.emit("exec_front", { "motor": petal_3[3], "command": 0 });
        }, delayIdle); // 5000 is the total time of a idle1 loop + some "gordurinha"

    }

}

var activateTimeoutSensorA = false;
var activateTimeoutSensorB = false;
var activateTimeoutSensorC = false;

// sensor loop functions
function activatedSensorA() {
    console.log("LOOP SENSOR A", sensor_1a, sensor_1b, sensor_1c);
    clearInterval(intervalIdle1);
    intervalIdle1 = false;

    if (sensor_1a) {
        socket.emit('petal', 'petal_1_down');
    } else {
        socket.emit('petal', 'petal_1_up');
    }
}

function activatedSensorB() {
    console.log("LOOP SENSOR B", sensor_2a, sensor_2b, sensor_2c);
    clearInterval(intervalIdle2);
    intervalIdle2 = false;

    if (sensor_2a && sensor_2b && sensor_2c) {
        clearTimeout(activateTimeoutSensorB);
        activateTimeoutSensorB = setTimeout(function() {
            socket.emit('petal', 'petal_2_down');
        }, 1000);
    } else if (sensor_2a || sensor_2b || sensor_2c) {
        clearTimeout(activateTimeoutSensorB);
        activateTimeoutSensorB = setTimeout(function() {
            socket.emit('petal', 'petal_2_up');
        }, delayIdle);

    } else if (!sensor_2a && !sensor_2b && !sensor_2c) {
        intervalIdle2 = setInterval(run_idle_2, delayIdle);
    }
}

function activatedSensorC() {
    console.log("LOOP SENSOR C", sensor_3a, sensor_3b, sensor_3c);
    clearInterval(intervalIdle3);
    intervalIdle3 = false;

    if (sensor_3a && sensor_3b && sensor_3c) {
        clearTimeout(activateTimeoutSensorC);
        activateTimeoutSensorC = setTimeout(function() {
            socket.emit('petal', 'petal_3_down');
        }, 1000);
    } else if (sensor_3a || sensor_3b || sensor_3c) {
        clearTimeout(activateTimeoutSensorC);
        activateTimeoutSensorC = setTimeout(function() {
            socket.emit('petal', 'petal_3_up');
        }, delayIdle);

    } else if (!sensor_3a && !sensor_3b && !sensor_3c) {
        intervalIdle3 = setInterval(run_idle_3, delayIdle);
    }
}

// start the sensor loop
// activatedSensorA();
// activatedSensorB();
// activatedSensorC();

// enable disable sensors
function sensor(command) {

    if (command == 'sensor_1a_on') {
        sensor_1a = true;
        activatedSensorA();
    }
    if (command == 'sensor_1a_off') {
        sensor_1a = false;
        activatedSensorA();
    }

    if (command == 'sensor_1b_on') {
        sensor_1b = true;
        activatedSensorA();
    }
    if (command == 'sensor_1b_off') {
        sensor_1b = false;
        activatedSensorA();
    }

    if (command == 'sensor_1c_on') {
        sensor_1c = true;
        activatedSensorA();
    }
    if (command == 'sensor_1c_off') {
        sensor_1c = false;
        activatedSensorA();
    }


    if (command == 'sensor_2a_on') {
        sensor_2a = true;
        activatedSensorB();
    }
    if (command == 'sensor_2a_off') {
        sensor_2a = false;
        activatedSensorB();
    }

    if (command == 'sensor_2b_on') {
        sensor_2b = true;
        activatedSensorB();
    }
    if (command == 'sensor_2b_off') {
        sensor_2b = false;
        activatedSensorB();
    }

    if (command == 'sensor_2c_on') {
        sensor_2c = true;
        activatedSensorB();
    }
    if (command == 'sensor_2c_off') {
        sensor_2c = false;
        activatedSensorB();
    }

    if (command == 'sensor_3a_on') {
        sensor_3a = true;
        activatedSensorC();
    }
    if (command == 'sensor_3a_off') {
        sensor_3a = false;
        activatedSensorC();
    }

    if (command == 'sensor_3b_on') {
        sensor_3b = true;
        activatedSensorC();
    }
    if (command == 'sensor_3b_off') {
        sensor_3b = false;
        activatedSensorC();
    }

    if (command == 'sensor_3c_on') {
        sensor_3c = true;
        activatedSensorC();
    }
    if (command == 'sensor_3c_off') {
        sensor_3c = false;
        activatedSensorC();
    }


}

// enable disable all motions
function allmotions(command) {

    if (command == 'allmotions_on') {
        allmotions_on = true;
        console.log('ALL MOTIONS: ', allmotions_on);
    }
    if (command == 'allmotions_off') {
        clearInterval(intervalIdle1);
        intervalIdle1 = false;
        clearInterval(intervalIdle2);
        intervalIdle2 = false;
        clearInterval(intervalIdle3);
        intervalIdle3 = false;

        allmotions_on = false;
        console.log('ALL MOTIONS: ', allmotions_on);
    }
}

// receive the commands
socket.on('connect', () => {
        helper.logger.debug(`[Processor] Connected to port ${settings.SOCKET_PORT}`);
    })

    // COMANDOS CHEGAM AQUI
    .on('exec', (command) => {
        motors[command.motor].sendCommand(command.command);
        socket.emit("exec_front", command)
        helper.logger.debug(`[Processor] Received Command ${command.command}`);
    })

    .on('exec_allmotions', (command) => {
        allmotions(command);
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
