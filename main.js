var Motor = require('./libs/motor');

motor = new Motor("1");

counter = 0;

step = 1;

function animate() {

    counter = counter + step;

    if (counter == 100) {
        step = -1;
    }

    if(counter == 0) {
        step = 1
    }

    motor.sendCommand(counter);

    setTimeout(animate, counter);
}

animate();