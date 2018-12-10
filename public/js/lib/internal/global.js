var socket = io();
socket
    .on('exec_web', function(command) {

        var name = command.motor;
        var cmd = command.command;
        var current_motor = $("#" + command.motor);

        var current_height = current_motor.height();
        var count_rotation = parseInt(current_motor.data("rotation"));


        if (cmd == 101) {
            current_height = current_height - 0.5;
            count_rotation = count_rotation - 0.5;
            current_motor.data('rotation', count_rotation);
            //convert command here
            _send_cmd = current_height;
        } else if (cmd == -101) {
            current_height = current_height + 0.5;
            count_rotation = count_rotation + 0.5;
            current_motor.data('rotation', count_rotation);

            //convert command here
            _send_cmd = current_height;
        } else if (cmd == 105) {
            current_height = current_height - 4;
            count_rotation = count_rotation - 1;
            current_motor.data('rotation', count_rotation);
            //convert command here
            _send_cmd = current_height;
        } else if (cmd == -105) {
            current_height = current_height + 4;
            count_rotation = count_rotation + 1;
            current_motor.data('rotation', count_rotation);
            //convert command here
            _send_cmd = current_height;
        } else if (cmd == 110) {
            current_height = 0;
            count_rotation = 0;
            current_motor.data('rotation', count_rotation);

            // clear command here
            _send_cmd = 0;
        } else if (cmd <= 100 && cmd >= 0) {
            var max_height = parseInt(current_motor.data("height"));
            current_height = cmd * max_height / 100;

            var count_rotation_max = parseInt(current_motor.data("max-rotation"));
            count_rotation = cmd * count_rotation_max / 100;
            current_motor.data('rotation', count_rotation);
        }
        console.log(name, count_rotation + " rodadas");
        console.log(cmd, current_height);

        current_motor.attr('data-rotation', count_rotation);;


        // current_motor.height(current_height);
        current_motor.animate({
            height: current_height
          }, 1000, 'easeOutQuad', function() {
            // Animation complete.
          });
    });
