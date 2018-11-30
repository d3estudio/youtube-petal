//main functions
var helper = require('../libs/shared');
var RedisClient = require('../libs/redis');

module.exports = function Motor(identification, min, max) {
    var _this = this;

    _this.redis = new RedisClient();

    //naming for LOGS
    _this.name = identification;

    //motor current angle
    _this.currentPosition = 0;

    _this.minPosition = min ? min : 0;
    _this.maxPosition = max ? max : 0;

    //motor current applied command
    // 0% -> 100%
    _this.command = 0;

    // set maxPosition
    _this.setMaxPosition = function() {
        _this.maxPosition = _this.currentPosition;
    }

    // set maxPosition
    _this.setMinPosition = function() {
        _this.minPosition = _this.currentPosition;
    }

    //send a command to rotate the motor according to the following table:
    _this.sendCommand = (cmd) => {

        if (cmd == 101) {
            _this.currentPosition = _this.currentPosition + 1;
            //convert command here
            _send_cmd = _this.currentPosition;
        } else if (cmd == -101) {
            _this.currentPosition = _this.currentPosition - 1;
            //convert command here
            _send_cmd = _this.currentPosition;
        } else if (cmd == 105) {
            _this.currentPosition = _this.currentPosition + 5;
            //convert command here
            _send_cmd = _this.currentPosition;
        } else if (cmd == -105) {
            _this.currentPosition = _this.currentPosition - 5;
            //convert command here
            _send_cmd = _this.currentPosition;
        } else if (cmd == 110) {
            _this.currentPosition = 0;
            _this.newPosition = 0;
            _this.minPosition = 0;
            _this.maxPosition = 0;
            _this.command = 0;
            // clear command here
            _send_cmd = 0;
        } else if (cmd == 111) {
            _this.setMaxPosition();
            // max command here
            _send_cmd = 0;
        } else if (cmd == -111) {
            _this.setMinPosition();
            // max command here
            _send_cmd = 0;
        } else if (cmd <= 100 || cmd >= 0) {
            var _total = _this.maxPosition - _this.minPosition;
            _send_cmd = parseInt(_total * (cmd / 100));
        }
        _this.command = cmd;

        // wait for diego instructions
        _this.redis.send({
            "name": _this.name,
            "comando": _send_cmd
        });

        helper.logger.debug(`[${_this.name}] COMMAND ${_this.command}`);

    }
}
