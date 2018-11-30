var socket = io();
socket
    .on('exec_web', function(command) {

        var name = command.motor;
        var cmd = command.command;
        var current_motor = $("#" + command.motor);

        var current_height = current_motor.height();

        if (cmd == 101) {
            current_height = current_height - 1;
            //convert command here
            _send_cmd = current_height;
        } else if (cmd == -101) {
            current_height = current_height + 1;
            //convert command here
            _send_cmd = current_height;
        } else if (cmd == 105) {
            current_height = current_height - 5;
            //convert command here
            _send_cmd = current_height;
        } else if (cmd == -105) {
            current_height = current_height + 5;
            //convert command here
            _send_cmd = current_height;
        } else if (cmd == 110) {
            current_height = 0;
            // clear command here
            _send_cmd = 0;
        } else if (cmd <= 100 && cmd >= 0) {
            current_height = cmd;
        }

        // current_motor.height(current_height);
        current_motor.animate({
            height: current_height
          }, 100, function() {
            // Animation complete.
          });


        console.log(name);
    });
