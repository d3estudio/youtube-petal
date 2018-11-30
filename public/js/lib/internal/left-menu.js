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

var Animate = function() {
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
}

var AllMotors = function() {

    this.GO_DOWN = function() {
        $.each(["motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -101 });
        });
    };
    this.GO_UP = function() {
        $.each(["motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 101 });
        });
    };
    this.GO_UP_FASTER = function() {
        $.each(["motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 105 });
        });
    };
    this.GO_DOWN_FASTER = function() {
        $.each(["motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -105 });
        });
    };
    this.GO_TO_MIN = function() {
        $.each(["motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 0 });
        });
    };
    this.GO_TO_MAX = function() {
        $.each(["motor_a1", "motor_a2", "motor_a3", "motor_a4", "motor_b1", "motor_b2", "motor_b3", "motor_b4", "motor_c1", "motor_c2", "motor_c3", "motor_c4"], function(index, value) {
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
    this.motor = 'motor_a1';
    this.command = 0;
}

createFolder('Unicast', new Unicast(), ['SEND'], {
    before: function(folder, prop) {
        folder.add(prop, 'motor', {
            'Motor A1': 'motor_a1',
            'Motor A2': 'motor_a2',
            'Motor A3': 'motor_a3',
            'Motor A4': 'motor_a4',
            'Motor B1': 'motor_b1',
            'Motor B2': 'motor_b2',
            'Motor B3': 'motor_b3',
            'Motor B4': 'motor_b4',
            'Motor C1': 'motor_c1',
            'Motor C2': 'motor_c2',
            'Motor C3': 'motor_c3',
            'Motor C4': 'motor_c4'
        });
        folder.add(prop, 'command', 0, 100);
    }
});

createFolder('Animate', new Animate(), [
    'PETAL_1_UP',
    'PETAL_1_DOWN',
    'PETAL_2_UP',
    'PETAL_2_DOWN',
    'PETAL_3_UP',
    'PETAL_3_DOWN'
]);

createFolder('Motor A1', new MotorA1(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Motor A2', new MotorA2(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Motor A3', new MotorA3(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Motor A4', new MotorA4(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Motor B1', new MotorB1(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Motor B2', new MotorB2(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Motor B3', new MotorB3(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Motor B4', new MotorB4(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Motor C1', new MotorC1(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Motor C2', new MotorC2(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Motor C3', new MotorC3(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('Motor C4', new MotorC4(), [
    'GO_DOWN',
    'GO_UP',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'CLEAR_LIMITS',
    'SET_MIN',
    'SET_MAX'
]);

createFolder('All Motors', new AllMotors(), [
    'GO_DOWN',
    'GO_UP',
    'GO_DOWN_FASTER',
    'GO_UP_FASTER',
    'GO_TO_MIN',
    'GO_TO_MAX'
]);

var container = document.getElementById('left-menu');
container.appendChild(leftGui.domElement);
