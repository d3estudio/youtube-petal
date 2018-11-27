var Motor = require('./libs/motor');

motor = new Motor("1");
motor_2 = new Motor("2");

motorA1 = new Motor("A1");
motorA2 = new Motor("A2");
motorA3 = new Motor("A3");

motorB1 = new Motor("B1");
motorB2 = new Motor("B2");
motorB3 = new Motor("B3");

motorC1 = new Motor("C1");
motorC2 = new Motor("C2");
motorC3 = new Motor("C3");

var motors = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3",];


counter = 0;

step = 1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animate() {

    //Loop wave
    /*
    counter = counter + step;

    if (counter == 100) {
        step = -1;
    }

    if(counter == 0) {
        step = 1
    }

    motor.sendCommand(counter);
    motor_2.sendCommand(counter);

    setTimeout(animate, counter);
    */

    //Random
    /*
    counter = getRandomInt(0, 20);

    motor.sendCommand(counter);

    setTimeout(animate, counter);
    */

    }


animate();

