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


var Idle_motion = function() {
    this.IDLE_1_ON = function() {
        socket.emit('idle', 'idle_1_on');
    }
    this.IDLE_1_OFF = function() {
        socket.emit('idle', 'idle_1_off');
    }
    this.IDLE_2_ON = function() {
        socket.emit('idle', 'idle_2_on');
    }
    this.IDLE_2_OFF = function() {
        socket.emit('idle', 'idle_2_off');
    }
    this.IDLE_3_ON = function() {
        socket.emit('idle', 'idle_3_on');
    }
    this.IDLE_3_OFF = function() {
        socket.emit('idle', 'idle_3_off');
    }
}

var Petal_motion = function() {
    this.PETAL_1_UP = function() {
        socket.emit('petal', 'petal_1_up');
    };
    this.PETAL_1_DOWN = function() {
        socket.emit('petal', 'petal_1_down');
    };
    this.PETAL_2_UP = function() {
        socket.emit('petal', 'petal_2_up')
    };
    this.PETAL_2_DOWN = function() {
        socket.emit('petal', 'petal_2_down')
    };
    this.PETAL_3_UP = function() {
        socket.emit('petal', 'petal_3_up')
    };
    this.PETAL_3_DOWN = function() {
        socket.emit('petal', 'petal_3_down')
    };
}

var MotorA1 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": -111 });
    };
}

var MotorA2 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": -111 });
    };
}

var MotorA3 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": -111 });
    };
}

var MotorA4 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_1B3", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_1B3", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_1B3", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_1B3", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_1B3", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_1B3", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_1B3", "command": -111 });
    };
}

var MotorB1 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": -111 });
    };
}

var MotorB2 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": -111 });
    };
}

var MotorB3 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": -111 });
    };
}

var MotorB4 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": -111 });
    };
}

var MotorC1 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": -111 });
    };
}

var MotorC2 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": -111 });
    };
}

var MotorC3 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": -111 });
    };
}

var MotorC4 = function() {
    this.GO_UP = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": 101 });
    };
    this.GO_DOWN = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": -101 });
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": 105 });
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": -105 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": 110 });
    };
    this.SET_MAX = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": 111 });
    };
    this.SET_MIN = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": -111 });
    };
}

var AllMotors = function() {

    this.GO_DOWN = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B3", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -101 });
        });
    };
    this.GO_UP = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B3", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 101 });
        });
    };
    this.GO_UP_FASTER = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B3", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 105 });
        });
    };
    this.GO_DOWN_FASTER = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B3", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -105 });
        });
    };
    this.SET_MAX = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B3", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 111 });
        });
    };
    this.SET_MIN = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B3", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -111 });
        });
    };
    this.GO_TO_MIN = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B3", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 0 });
        });
    };
    this.GO_TO_MAX = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B3", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 100 });
        });
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
    this.motor = 'motor_1F1';
    this.command = 0;
}

createFolder('Teste - GOTO Unicast', new Unicast(), ['SEND'], {
    before: function(folder, prop) {
        folder.add(prop, 'motor', {
            'Motor A1': 'motor_1F1',
            'Motor A2': 'motor_1F2',
            'Motor A3': 'motor_1B1',
            'Motor A4': 'motor_1B3',
            'Motor B1': 'motor_2F1',
            'Motor B2': 'motor_2F2',
            'Motor B3': 'motor_2B1',
            'Motor B4': 'motor_2B2',
            'Motor C1': 'motor_3F1',
            'Motor C2': 'motor_3F2',
            'Motor C3': 'motor_3B1',
            'Motor C4': 'motor_3B2'
        });
        folder.add(prop, 'command', 0, 100);
    }
});

createFolder('Motion - Idle', new Idle_motion(), [
    'IDLE_1_ON',
    'IDLE_1_OFF',
    'IDLE_2_ON',
    'IDLE_2_OFF',
    'IDLE_3_ON',
    'IDLE_3_OFF'
]);

createFolder('Motion - Petal', new Petal_motion(), [
    'PETAL_1_UP',
    'PETAL_1_DOWN',
    'PETAL_2_UP',
    'PETAL_2_DOWN',
    'PETAL_3_UP',
    'PETAL_3_DOWN'
]);

createFolder('Calibração - All Motors', new AllMotors(), [
    'GO_DOWN',
    'GO_UP',
    'GO_DOWN_FASTER',
    'GO_UP_FASTER',
    'SET_MIN',
    'SET_MAX',
    'GO_TO_MIN',
    'GO_TO_MAX'
]);

createFolder('Calibração - Motor 1 F1', new MotorA1(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Calibração - Motor 1 F2', new MotorA2(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Calibração - Motor 1 B1', new MotorA3(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Calibração - Motor 1 B2', new MotorA4(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Calibração - Motor 2 F1', new MotorB1(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Calibração - Motor 2 F2', new MotorB2(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Calibração - Motor 2 B1', new MotorB3(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Calibração - Motor 2 B2', new MotorB4(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Calibração - Motor 3 F1', new MotorC1(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Calibração - Motor 3 F2', new MotorC2(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Calibração - Motor 3 B1', new MotorC3(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Calibração - Motor 3 B2', new MotorC4(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

var container = document.getElementById('left-menu');
container.appendChild(leftGui.domElement);
