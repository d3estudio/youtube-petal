//main functions
var helper = require('../libs/shared');
var RedisClient = require('../libs/redis');

module.exports = function Motor(number) {
    var _this = this;

    _this.redis = new RedisClient();

    //naming for LOGS
    _this.name = '_[' + number + ']_';

    _this.STEP_MIN = 10

    //motor status
    _this.locked = false;

    //motor current angle
    _this.currentPosition = 0;
    _this.newPosition = 0;

    //motor current applied command
    _this.command = 0;

    //get FPS
    _this.getFPS = () => {
        // returnar o FPS das animacoes
        return time;
    }

    //lock this motor to wait the current command
    _this.lock = () => {
        _this.locked = true;
    }

    //unlock this motor and allow another command
    _this.unlock = () => {
        _this.locked = false;
    }

    //get the steps to walk between newAngle and currentAngle
    _this.getSteps = (cmd) => {
        if (cmd > _this.command) {
            return (_this.newPosition - _this.currentPosition) / _this.STEP_MIN;
        } else if (cmd < _this.command) {
            return (_this.currentPosition - _this.newPosition) / _this.STEP_MIN;
        } else {
            return (_this.newPosition - _this.currentPosition) / _this.STEP_MIN;
        }
    }

    //send a command to rotate the motor according to the following table:
    _this.sendCommand = (cmd) => {

        if (cmd != _this.command) {
            // executa o comando
            _this.redis.send({
                "comando": cmd,
                "name": _this.name
            });
        } else {
            helper.logger.debug(`${_this.name} SAME COMMAND AS ATUAL COMMAND`);
        }
        _this.command = cmd;
    }
}
