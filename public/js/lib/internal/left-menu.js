var leftGui = new dat.GUI({
    autoPlace: false
});

var createFolder = function(name, prop, items, custom) {
    custom = custom || {};
    var folder = leftGui.addFolder(name);
    if (!!custom.before) {
        custom.before(folder, prop);
    }
    items.forEach(function(i) {
        folder.add(prop, i);
    });
    // folder.open();
    if (!!custom.after) {
        custom.after(folder, prop);
    }
};

var MotorA1 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_a1", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_a1", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_a1", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_a1", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_a1", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_a1", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_a1", "command": -111 });
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": "motor_a1", "command": "SET_HOME"});
    };
}

var MotorA2 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_a2", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_a2", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_a2", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_a2", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_a2", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_a2", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_a2", "command": -111 });
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": "motor_a2", "command": "SET_HOME"});
    };
}

var MotorA3 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_a3", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_a3", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_a3", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_a3", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_a3", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_a3", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_a3", "command": -111 });
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": "motor_a3", "command": "SET_HOME"});
    };
}

var MotorA4 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_a4", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_a4", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_a4", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_a4", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_a4", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_a4", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_a4", "command": -111 });
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": "motor_a4", "command": "SET_HOME"});
    };
}

var MotorB1 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_b1", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_b1", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_b1", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_b1", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_b1", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_b1", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_b1", "command": -111 });
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": "motor_b1", "command": "SET_HOME"});
    };
}

var MotorB2 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_b2", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_b2", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_b2", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_b2", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_b2", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_b2", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_b2", "command": -111 });
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": "motor_b2", "command": "SET_HOME"});
    };
}

var MotorB3 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_b3", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_b3", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_b3", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_b3", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_b3", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_b3", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_b3", "command": -111 });
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": "motor_b3", "command": "SET_HOME"});
    };
}

var MotorB4 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_b4", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_b4", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_b4", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_b4", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_b4", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_b4", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_b4", "command": -111 });
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": "motor_b4", "command": "SET_HOME"});
    };
}

var MotorC1 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_c1", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_c1", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_c1", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_c1", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_c1", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_c1", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_c1", "command": -111 });
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": "motor_c1", "command": "SET_HOME"});
    };
}

var MotorC2 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_c2", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_c2", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_c2", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_c2", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_c2", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_c2", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_c2", "command": -111 });
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": "motor_c2", "command": "SET_HOME"});
    };
}

var MotorC3 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_c3", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_c3", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_c3", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_c3", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_c3", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_c3", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_c3", "command": -111 });
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": "motor_c3", "command": "SET_HOME"});
    };
}

var MotorC4 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_c4", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_c4", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_c4", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_c4", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_c4", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_c4", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_c4", "command": -111 });
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": "motor_c4", "command": "SET_HOME"});
    };
}

var AllMotors = function() {
    this.GO_UP = function() {
        socket.emit('animate', {"motor": [ "motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], "command": "1_PASSO"});
    };
    this.GO_DOWN = function() {
        socket.emit('animate', {"motor": [ "motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], "command": "-1_PASSO"});
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', {"motor": [ "motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], "command": "5_PASSO"});
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', {"motor": [ "motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], "command": "-5_PASSO"});
    };
    this.GO_TO_MIN = function() {
        socket.emit('animate', {"motor": [ "motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], "command": "GO_TO_MIN"});
    };
    this.GO_TO_MAX = function() {
        socket.emit('animate', {"motor": [ "motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], "command": "GO_TO_MAX"});
    };
    this.SET_HOME = function() {
        socket.emit('animate', {"motor": [ "motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], "command": "SET_HOME"});
    };
}

var Unicast = function() {
    this.SEND = function() {
        console.log(this.command);
        socket.emit('animate', {
            "motor": this.motor,
            "command": this.command
        });
    };
    this.motor = 'motor_a1';
    this.command = 0;
}

createFolder('Unicast', new Unicast(), ['SEND'], {
    before: function(folder, prop) {
        folder.add(prop, 'motor', {
            'Motor A1': 'motor_a1',
            'Motor A2': 'motor_a2'
        });
        folder.add(prop, 'command', 0);
    }
});

createFolder('Motor A1', new MotorA1(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'SET_HOME',
    'CLEAR_LIMITS'

]);

createFolder('Motor A2', new MotorA2(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'SET_HOME',
    'CLEAR_LIMITS'

]);

createFolder('Motor A3', new MotorA3(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'SET_HOME',
    'CLEAR_LIMITS'

]);

createFolder('Motor A4', new MotorA4(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'SET_HOME',
    'CLEAR_LIMITS'

]);

createFolder('Motor B1', new MotorB1(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'SET_HOME',
    'CLEAR_LIMITS'

]);

createFolder('Motor B2', new MotorB2(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'SET_HOME',
    'CLEAR_LIMITS'

]);

createFolder('Motor B3', new MotorB3(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'SET_HOME',
    'CLEAR_LIMITS'

]);

createFolder('Motor B4', new MotorB4(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'SET_HOME',
    'CLEAR_LIMITS'

]);

createFolder('Motor C1', new MotorC1(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'SET_HOME',
    'CLEAR_LIMITS'

]);

createFolder('Motor C2', new MotorC2(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'SET_HOME',
    'CLEAR_LIMITS'

]);

createFolder('Motor C3', new MotorC3(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'SET_HOME',
    'CLEAR_LIMITS'

]);

createFolder('Motor C4', new MotorC4(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'SET_HOME',
    'CLEAR_LIMITS'

]);

createFolder('All Motors', new AllMotors(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'GO_TO_MIN',
    'GO_TO_MAX',
    'SET_HOME'

]);

var container = document.getElementById('left-menu');
container.appendChild(leftGui.domElement);
