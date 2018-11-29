var socket = io();
socket
    .on('exec', function(command) {

        // comandos traduzidos

        var commands = {
            "1_PASSO": -1,
            "-1_PASSO": 1,
            "5_PASSO": -5,
            "-5_PASSO": 5,
            "CLEAR_LIMITS": 0,
            "SET_MAX": 99,
            "SET_MIN": -99,
            'SET_HOME': 0
        }

        var name = command.motor;
        var cmd = command.command;
        var current_motor = $("#" + command.motor);

        for(var i in name) {
            if(Array.isArray(name)) {

            } else {
            // Do another thing
            }
        }

        if (cmd == "CLEAR_LIMITS") {
            current_motor.css({ "marginTop": 0 + "px" });
        } else if (cmd == "SET_MAX") {

        } else if (cmd == "SET_MIN") {

        } else if (cmd == "SET_HOME") {
            current_motor.css({ "marginTop": 0 + "px" });
        } else {
            var current_height = parseInt(current_motor.css("marginTop").replace("px", ""));
            var new_height = current_height + commands[cmd];
            current_motor.css({ "marginTop": new_height + "px" });
        }

        console.log(name);
    });
