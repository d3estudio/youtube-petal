var Motor = require('./libs/motor');

motor = new Motor("1");

counter = 0;

function animate() {
    motor.sendCommand(counter);
    counter++;
    setTimeout(animate, counter);
}

animate();
