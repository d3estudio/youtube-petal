//main functions
var helper = require('../libs/shared');
var RedisClient = require('../libs/redis');

module.exports = function Motor(identification) {
    var _this = this;

    _this.redis = new RedisClient();

    //naming for LOGS
    _this.name = identification;

    //motor current angle
    _this.currentPosition = 0;

    _this.minPosition = 0;
    _this.maxPosition = 100;

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
            _this.currentPosition = _this.currentPosition - 1;
            //convert command here
            _send_cmd = _this.currentPosition;
            _this.redis.send("GOTO_ANGLE", [_this.name, _send_cmd]);

        } else if (cmd == -101) {
            _this.currentPosition = _this.currentPosition + 1;
            //convert command here
            _send_cmd = _this.currentPosition;
            _this.redis.send("GOTO_ANGLE", [_this.name, _send_cmd]);
        } else if (cmd == 105) {
            _this.currentPosition = _this.currentPosition - 5;
            //convert command here
            _send_cmd = _this.currentPosition;
            _this.redis.send("GOTO_ANGLE", [_this.name, _send_cmd]);
        } else if (cmd == -105) {
            _this.currentPosition = _this.currentPosition + 5;
            //convert command here
            _send_cmd = _this.currentPosition;
            _this.redis.send("GOTO_ANGLE", [_this.name, _send_cmd]);
        } else if (cmd == 110) {
            _this.currentPosition = 0;
            _this.minPosition = 0;
            _this.maxPosition = 0;
            _this.command = 0;
            // clear command here
            _send_cmd = 0;
            _this.redis.send("CLEAR_LIMITS", [_this.name, _send_cmd]);
        } else if (cmd == 111) {
            _this.setMaxPosition();
            // max command here
            // _send_cmd = 0;
            _this.redis.send("SET_UPPER_LIMIT", [_this.name, _send_cmd]);
        } else if (cmd == -111) {
            _this.setMinPosition();
            // max command here
            // _send_cmd = 0;
            _this.redis.send("SET_LOWER_LIMIT", [_this.name, _send_cmd]);
            _this.redis.send("SET_ORIGIN", [_this.name, _send_cmd]);
        } else if (cmd <= 100 && cmd >= 0) {
            helper.logger.debug(`[${_this.name}] ${_this.minPosition} ${_this.maxPosition}`);
            var _total = _this.maxPosition - _this.minPosition;
            var sample = _total * (cmd / 100);
            _send_cmd = _this.minPosition + sample;
            _this.redis.send("GOTO_ANGLE", [_this.name, _send_cmd]);
        }
        _this.command = cmd;

        // waiting for diego instructions
        // Replicar essa linha nos ifs com string certa

        // _this.redis.send("GOTO_ANGLE", [_this.name, _send_cmd]);

        helper.logger.debug(`[${_this.name}] COMMAND ${_this.command}`);

    }
}
