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
    folder.open();
    if (!!custom.after) {
        custom.after(folder, prop);
    }
};

var MotorA1 = function() {
    this.GO_UP = function() {
        socket.emit('animate', {"motor": "motor_a1", "command": "1_PASSO"});
    };
    this.GO_DOWN = function() {
        socket.emit('animate', {"motor": "motor_a1", "command": "-1_PASSO"});
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', {"motor": "motor_a1", "command": "5_PASSO"});
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', {"motor": "motor_a1", "command": "-5_PASSO"});
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', {"motor": "motor_a1", "command": "CLEAR_LIMITS"});
    }
    this.SET_MAX = function() {
        socket.emit('animate', {"motor": "motor_a1", "command": "SET_MAX"});
    }
    this.SET_MIN = function() {
        socket.emit('animate', {"motor": "motor_a1", "command": "SET_MIN"});
    }
}

var MotorA2 = function() {
    this.GO_UP = function() {
        socket.emit('animate', {"motor": "motor_a2", "command": "1_PASSO"});
    };
    this.GO_DOWN = function() {
        socket.emit('animate', {"motor": "motor_a2", "command": "-1_PASSO"});
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', {"motor": "motor_a2", "command": "5_PASSO"});
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', {"motor": "motor_a2", "command": "-5_PASSO"});
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', {"motor": "motor_a2", "command": "CLEAR_LIMITS"});
    }
    this.SET_MAX = function() {
        socket.emit('animate', {"motor": "motor_a2", "command": "SET_MAX"});
    }
    this.SET_MIN = function() {
        socket.emit('animate', {"motor": "motor_a2", "command": "SET_MIN"});
    }
}

var MotorA3 = function() {
    this.GO_UP = function() {
        socket.emit('animate', {"motor": "motor_a3", "command": "1_PASSO"});
    };
    this.GO_DOWN = function() {
        socket.emit('animate', {"motor": "motor_a3", "command": "-1_PASSO"});
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', {"motor": "motor_a3", "command": "5_PASSO"});
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', {"motor": "motor_a3", "command": "-5_PASSO"});
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', {"motor": "motor_a3", "command": "CLEAR_LIMITS"});
    }
    this.SET_MAX = function() {
        socket.emit('animate', {"motor": "motor_a3", "command": "SET_MAX"});
    }
    this.SET_MIN = function() {
        socket.emit('animate', {"motor": "motor_a3", "command": "SET_MIN"});
    }
}

var MotorB1 = function() {
    this.GO_UP = function() {
        socket.emit('animate', {"motor": "motor_b1", "command": "1_PASSO"});
    };
    this.GO_DOWN = function() {
        socket.emit('animate', {"motor": "motor_b1", "command": "-1_PASSO"});
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', {"motor": "motor_b1", "command": "5_PASSO"});
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', {"motor": "motor_b1", "command": "-5_PASSO"});
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', {"motor": "motor_b1", "command": "CLEAR_LIMITS"});
    }
    this.SET_MAX = function() {
        socket.emit('animate', {"motor": "motor_b1", "command": "SET_MAX"});
    }
    this.SET_MIN = function() {
        socket.emit('animate', {"motor": "motor_b1", "command": "SET_MIN"});
    }
}

var MotorB2 = function() {
    this.GO_UP = function() {
        socket.emit('animate', {"motor": "motor_b2", "command": "1_PASSO"});
    };
    this.GO_DOWN = function() {
        socket.emit('animate', {"motor": "motor_b2", "command": "-1_PASSO"});
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', {"motor": "motor_b2", "command": "5_PASSO"});
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', {"motor": "motor_b2", "command": "-5_PASSO"});
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', {"motor": "motor_b2", "command": "CLEAR_LIMITS"});
    }
    this.SET_MAX = function() {
        socket.emit('animate', {"motor": "motor_b2", "command": "SET_MAX"});
    }
    this.SET_MIN = function() {
        socket.emit('animate', {"motor": "motor_b2", "command": "SET_MIN"});
    }
}

var MotorB3 = function() {
    this.GO_UP = function() {
        socket.emit('animate', {"motor": "motor_b3", "command": "1_PASSO"});
    };
    this.GO_DOWN = function() {
        socket.emit('animate', {"motor": "motor_b3", "command": "-1_PASSO"});
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', {"motor": "motor_b3", "command": "5_PASSO"});
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', {"motor": "motor_b3", "command": "-5_PASSO"});
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', {"motor": "motor_b3", "command": "CLEAR_LIMITS"});
    }
    this.SET_MAX = function() {
        socket.emit('animate', {"motor": "motor_b3", "command": "SET_MAX"});
    }
    this.SET_MIN = function() {
        socket.emit('animate', {"motor": "motor_b3", "command": "SET_MIN"});
    }
}

var MotorC1 = function() {
    this.GO_UP = function() {
        socket.emit('animate', {"motor": "motor_c1", "command": "1_PASSO"});
    };
    this.GO_DOWN = function() {
        socket.emit('animate', {"motor": "motor_c1", "command": "-1_PASSO"});
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', {"motor": "motor_c1", "command": "5_PASSO"});
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', {"motor": "motor_c1", "command": "-5_PASSO"});
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', {"motor": "motor_c1", "command": "CLEAR_LIMITS"});
    }
    this.SET_MAX = function() {
        socket.emit('animate', {"motor": "motor_c1", "command": "SET_MAX"});
    }
    this.SET_MIN = function() {
        socket.emit('animate', {"motor": "motor_c1", "command": "SET_MIN"});
    }
}

var MotorC2 = function() {
    this.GO_UP = function() {
        socket.emit('animate', {"motor": "motor_c2", "command": "1_PASSO"});
    };
    this.GO_DOWN = function() {
        socket.emit('animate', {"motor": "motor_c2", "command": "-1_PASSO"});
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', {"motor": "motor_c2", "command": "5_PASSO"});
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', {"motor": "motor_c2", "command": "-5_PASSO"});
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', {"motor": "motor_c2", "command": "CLEAR_LIMITS"});
    }
    this.SET_MAX = function() {
        socket.emit('animate', {"motor": "motor_c2", "command": "SET_MAX"});
    }
    this.SET_MIN = function() {
        socket.emit('animate', {"motor": "motor_c2", "command": "SET_MIN"});
    }
}

var MotorC3 = function() {
    this.GO_UP = function() {
        socket.emit('animate', {"motor": "motor_c3", "command": "1_PASSO"});
    };
    this.GO_DOWN = function() {
        socket.emit('animate', {"motor": "motor_c3", "command": "-1_PASSO"});
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', {"motor": "motor_c3", "command": "5_PASSO"});
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', {"motor": "motor_c3", "command": "-5_PASSO"});
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', {"motor": "motor_c3", "command": "CLEAR_LIMITS"});
    }
    this.SET_MAX = function() {
        socket.emit('animate', {"motor": "motor_c3", "command": "SET_MAX"});
    }
    this.SET_MIN = function() {
        socket.emit('animate', {"motor": "motor_c3", "command": "SET_MIN"});
    }
}

var AllMotors = function() {
    this.GO_UP = function() {
        socket.emit('animate', {"motor": "all_motors", "command": "1_PASSO"});
    };
    this.GO_DOWN = function() {
        socket.emit('animate', {"motor": "all_motors", "command": "-1_PASSO"});
    };
    this.GO_UP_FASTER = function() {
        socket.emit('animate', {"motor": "all_motors", "command": "5_PASSO"});
    };
    this.GO_DOWN_FASTER = function() {
        socket.emit('animate', {"motor": "all_motors", "command": "-5_PASSO"});
    };
}

createFolder('Motor A1', new MotorA1(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'CLEAR_LIMITS'

]);

createFolder('Motor A2', new MotorA2(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'CLEAR_LIMITS'

]);

createFolder('Motor A3', new MotorA3(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'CLEAR_LIMITS'

]);

createFolder('Motor B1', new MotorB1(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'CLEAR_LIMITS'

]);

createFolder('Motor B2', new MotorB2(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'CLEAR_LIMITS'

]);

createFolder('Motor B3', new MotorB3(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'CLEAR_LIMITS'

]);

createFolder('Motor C1', new MotorC1(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'CLEAR_LIMITS'

]);

createFolder('Motor C2', new MotorC2(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'CLEAR_LIMITS'

]);

createFolder('Motor C3', new MotorC3(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER',
    'SET_MAX',
    'SET_MIN',
    'CLEAR_LIMITS'

]);

createFolder('All Motors', new AllMotors(), [
    'GO_UP',
    'GO_DOWN',
    'GO_UP_FASTER',
    'GO_DOWN_FASTER'
]);

var container = document.getElementById('left-menu');
container.appendChild(leftGui.domElement);
