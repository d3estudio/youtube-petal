var Motor = require('./libs/motor');

motor = new Motor("1");
motor_2 = new Motor("2");

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
    }
    */

animate();

