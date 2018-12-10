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

function run_idle_1(){
    
    console.log("LOOP IDLE 1");

    // TODO PUT THIS ON ALL THE ANIMATION FUNCTIONS TO BLOCK EVERYTHING
    if (!allmotions_on) {
        return false;
    }

    setTimeout(function(){

        motors[petal_1[0]].sendCommand(30);
        setTimeout(function(){
            motors[petal_1[1]].sendCommand(0);
        }, 50);
        setTimeout(function(){
            motors[petal_1[2]].sendCommand(82);
        }, 100);
        setTimeout(function(){
            motors[petal_1[3]].sendCommand(0);
        }, 150);


        socket.emit("exec_front", { "motor": petal_1[0], "command": 30 });
        setTimeout(function(){
            socket.emit("exec_front", { "motor": petal_1[1], "command": 0 });
        }, 50);
        setTimeout(function(){
            socket.emit("exec_front", { "motor": petal_1[2], "command": 82 });
        }, 100);
        setTimeout(function(){
            socket.emit("exec_front", { "motor": petal_1[3], "command": 0 });
        }, 150);

        setTimeout(function(){

            motors[petal_1[0]].sendCommand(0);
            setTimeout(function(){
                motors[petal_1[1]].sendCommand(41);
            }, 50);
            setTimeout(function(){
                motors[petal_1[2]].sendCommand(0);
            }, 100);
            setTimeout(function(){
                motors[petal_1[3]].sendCommand(100);
            }, 150);

            socket.emit("exec_front", { "motor": petal_1[0], "command": 0 });
            setTimeout(function(){
                socket.emit("exec_front", { "motor": petal_1[1], "command": 41 });
            }, 50);
            setTimeout(function(){
                socket.emit("exec_front", { "motor": petal_1[2], "command": 0 });
            }, 100);
            setTimeout(function(){
                socket.emit("exec_front", { "motor": petal_1[3], "command": 100 });
            }, 150);

        }, 2500);
    }, 2500);
}

// TODO replicate the idle1 here
function run_idle_2(){

    if (idle_petal_2 && !idle_petal_2_last) {

        setTimeout(function(){
            motors[petal_2[0]].sendCommand(30);
            motors[petal_2[1]].sendCommand(0);
            motors[petal_2[2]].sendCommand(82);
            motors[petal_2[3]].sendCommand(0);

            socket.emit("exec_front", { "motor": petal_2[0], "command": 30 });
            socket.emit("exec_front", { "motor": petal_2[1], "command": 0 });
            socket.emit("exec_front", { "motor": petal_2[2], "command": 82 });
            socket.emit("exec_front", { "motor": petal_2[3], "command": 0 });

            idle_petal_2_last = true;

            setTimeout(function(){

                if (idle_petal_2 && idle_petal_2_last) {
                    motors[petal_2[0]].sendCommand(0);
                    motors[petal_2[1]].sendCommand(41);
                    motors[petal_2[2]].sendCommand(0);
                    motors[petal_2[3]].sendCommand(100);

                    socket.emit("exec_front", { "motor": petal_2[0], "command": 0 });
                    socket.emit("exec_front", { "motor": petal_2[1], "command": 41 });
                    socket.emit("exec_front", { "motor": petal_2[2], "command": 0 });
                    socket.emit("exec_front", { "motor": petal_2[3], "command": 100 });

                    idle_petal_2_last = false;

                    setTimeout(run_idle_2, 2500);
                }

            }, 2500);
        }, 2500);

    }

}

// TODO replicate the idle1 here
function run_idle_3(){


    if (idle_petal_3 && !idle_petal_3_last) {

        setTimeout(function(){
            motors[petal_3[0]].sendCommand(30);
            motors[petal_3[1]].sendCommand(0);
            motors[petal_3[2]].sendCommand(82);
            motors[petal_3[3]].sendCommand(0);

            socket.emit("exec_front", { "motor": petal_3[0], "command": 30 });
            socket.emit("exec_front", { "motor": petal_3[1], "command": 0 });
            socket.emit("exec_front", { "motor": petal_3[2], "command": 82 });
            socket.emit("exec_front", { "motor": petal_3[3], "command": 0 });

            idle_petal_3_last = true;

            setTimeout(function(){

                if (idle_petal_3 && idle_petal_3_last) {
                    motors[petal_3[0]].sendCommand(0);
                    motors[petal_3[1]].sendCommand(41);
                    motors[petal_3[2]].sendCommand(0);
                    motors[petal_3[3]].sendCommand(100);

                    socket.emit("exec_front", { "motor": petal_3[0], "command": 0 });
                    socket.emit("exec_front", { "motor": petal_3[1], "command": 41 });
                    socket.emit("exec_front", { "motor": petal_3[2], "command": 0 });
                    socket.emit("exec_front", { "motor": petal_3[3], "command": 100 });

                    idle_petal_3_last = false;

                    setTimeout(run_idle_3, 2500);
                }

            }, 2500);
        }, 2500);

    }

}

// control the loop
var intervalIdle1 = false;

var delayIdle = 5000 // 5000 is the total time of a idle1 loop + some "gordurinha"

// start an idle mode for a given petal
function idle(command) {
    //PARAMETRO delay de mensagem

    if (command == 'idle_1_on' && allmotions_on) {
        // start a loop with idle_1
        intervalIdle1 = setInterval(run_idle_1, delayIdle); 
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





    // TODO replicate the above for other petals
    if (command == 'idle_2_on') {
        if (!idle_petal_2) {
            setTimeout(run_idle_2, delayIdle);
        }
        idle_petal_2 = true;
    }
    if (command == 'idle_2_off') {
        idle_petal_2 = false;
        idle_petal_2_last = false;

        setTimeout(function(){
            motors[petal_1[0]].sendCommand(0);
            motors[petal_1[1]].sendCommand(0);
            motors[petal_1[2]].sendCommand(0);
            motors[petal_1[3]].sendCommand(0);

            socket.emit("exec_front", { "motor": petal_1[0], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[1], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[2], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[3], "command": 0 });
        }, delayIdle);
    }
    if (command == 'idle_3_on') {
        if (!idle_petal_3) {
            setTimeout(run_idle_3, delayIdle);
        }
        idle_petal_3 = true;
    }
    if (command == 'idle_3_off') {
        idle_petal_3 = false;
        idle_petal_3_last = false;

        setTimeout(function(){
            motors[petal_1[0]].sendCommand(0);
            motors[petal_1[1]].sendCommand(0);
            motors[petal_1[2]].sendCommand(0);
            motors[petal_1[3]].sendCommand(0);

            socket.emit("exec_front", { "motor": petal_1[0], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[1], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[2], "command": 0 });
            socket.emit("exec_front", { "motor": petal_1[3], "command": 0 });
        }, delayIdle);
    }

}

var activateTimeoutSensorA = false;

// sensor loop functions
function activatedSensorA() {
    //TODO - Fazer o idle voltar depois da pétala subir
    console.log("LOOP SENSOR A", sensor_1a, sensor_1b, sensor_1c);
    clearInterval(intervalIdle1);
    intervalIdle1 = false;

    if (sensor_1a && sensor_1b && sensor_1c) {
        clearTimeout(activateTimeoutSensorA);
        activateTimeoutSensorA = setTimeout(function() {
            socket.emit('petal', 'petal_1_down');
        }, 1000);
    } else if (sensor_1a || sensor_1b || sensor_1c) {
        clearTimeout(activateTimeoutSensorA);
        activateTimeoutSensorA = setTimeout(function() {
            socket.emit('petal', 'petal_1_up');
        }, delayIdle);

    } else if (!sensor_1a && !sensor_1b && !sensor_1c) {
        intervalIdle1 = setInterval(run_idle_1, delayIdle);
    }
}
// sensor loop functions
function activatedSensorB() {

    if (sensor_2a && sensor_2b && sensor_2c) {

        setTimeout(function(){
            socket.emit('petal', 'petal_2_down');

        },1000);


    } else if (sensor_2a || sensor_2b || sensor_2c) {
        idle_petal_2 = false;

        motors[petal_2[0]].sendCommand(0);
        motors[petal_2[1]].sendCommand(0);
        motors[petal_2[2]].sendCommand(0);
        motors[petal_2[3]].sendCommand(0);

        socket.emit("exec_front", { "motor": petal_2[0], "command": 0 });
        socket.emit("exec_front", { "motor": petal_2[1], "command": 0 });
        socket.emit("exec_front", { "motor": petal_2[2], "command": 0 });
        socket.emit("exec_front", { "motor": petal_2[3], "command": 0 });

        setTimeout(function(){
            activatedSensorB();
        }, 1000);
    } else {
        setTimeout(activatedSensorB, 100);
    }

}
// sensor loop functions
function activatedSensorC() {

    if (sensor_3a && sensor_3b && sensor_3c) {

        setTimeout(function(){
            socket.emit('petal', 'petal_3_down');

        },1000);


    } else if (sensor_3a || sensor_3b || sensor_3c) {
        idle_petal_3 = false;


        motors[petal_3[0]].sendCommand(0);
        motors[petal_3[1]].sendCommand(0);
        motors[petal_3[2]].sendCommand(0);
        motors[petal_3[3]].sendCommand(0);

        socket.emit("exec_front", { "motor": petal_3[0], "command": 0 });
        socket.emit("exec_front", { "motor": petal_3[1], "command": 0 });
        socket.emit("exec_front", { "motor": petal_3[2], "command": 0 });
        socket.emit("exec_front", { "motor": petal_3[3], "command": 0 });

        setTimeout(function(){
            activatedSensorC();

        }, 1000);
    } else {
        setTimeout(activatedSensorC, 100);
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

    // TODO to the same as above for all sensors
    if (command == 'sensor_2a_on') {
        sensor_2a = true;
    }
    if (command == 'sensor_2a_off') {
        sensor_2a = false;
    }

    if (command == 'sensor_2b_on') {
        sensor_2b = true;
    }
    if (command == 'sensor_2b_off') {
        sensor_2b = false;
    }

    if (command == 'sensor_2c_on') {
        sensor_2c = true;
    }
    if (command == 'sensor_2c_off') {
        sensor_2c = false;
    }

    if (command == 'sensor_3a_on') {
        sensor_3a = true;
    }
    if (command == 'sensor_3a_off') {
        sensor_3a = false;
    }

    if (command == 'sensor_3b_on') {
        sensor_3b = true;
    }
    if (command == 'sensor_3b_off') {
        sensor_3b = false;
    }

    if (command == 'sensor_3c_on') {
        sensor_3c = true;
    }
    if (command == 'sensor_3c_off') {
        sensor_3c = false;
    }


}

// enable disable all motions
function allmotions(command) {

    if (command == 'allmotions_on') {
        allmotions_on = true;
        console.log('ALL MOTIONS: ', allmotions_on);
    }
    if (command == 'allmotions_off') {
        // TODO TURN ALL THE IDLES HERE
        clearInterval(intervalIdle1);
        intervalIdle1 = false;


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
