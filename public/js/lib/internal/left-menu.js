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
    this.ALL_IDLE_ON = function() {
        setTimeout(function(){
            socket.emit('idle', 'idle_1_on');
        }, 0);
        setTimeout(function(){
            socket.emit('idle', 'idle_2_on');
        }, 1000);
        setTimeout(function(){
            socket.emit('idle', 'idle_3_on');
        }, 2000);
    }
    this.ALL_IDLE_OFF = function() {
        setTimeout(function(){
            socket.emit('idle', 'idle_1_off');
        }, 0);
        setTimeout(function(){
            socket.emit('idle', 'idle_2_off');
        }, 1000);
        setTimeout(function(){
            socket.emit('idle', 'idle_3_off');
        }, 2000);
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
    this.GO_UP_180 = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": 101 });
    };
    this.GO_DOWN_180 = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": -101 });
    };
    this.GO_UP_360 = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": 105 });
    };
    this.GO_DOWN_360 = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": -105 });
    };
    this.GO_UP_4X = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": 106 });
    };
    this.GO_DOWN_4X = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": -106 });
    };
    this.GO_UP_5X = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": 107 });
    };
    this.GO_DOWN_5X = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": -107 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": 110 });
    };
    this.SET_BOTTOM = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": 111 });
    };
    this.SET_ORIGIN = function() {
      socket.emit('animate', { "motor": "motor_1F1", "command": 150 });
    }
    this.SET_TOP = function() {
        socket.emit('animate', { "motor": "motor_1F1", "command": -111 });
    };
}

var MotorA2 = function() {
    this.GO_UP_180 = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": 101 });
    };
    this.GO_DOWN_180 = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": -101 });
    };
    this.GO_UP_360 = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": 105 });
    };
    this.GO_DOWN_360 = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": -105 });
    };
    this.GO_UP_4X = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": 106 });
    };
    this.GO_DOWN_4X = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": -106 });
    };
    this.GO_UP_5X = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": 107 });
    };
    this.GO_DOWN_5X = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": -107 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": 110 });
    };
    this.SET_BOTTOM = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": 111 });
    };
    this.SET_ORIGIN = function() {
      socket.emit('animate', { "motor": "motor_1F2", "command": 150 });
    }
    this.SET_TOP = function() {
        socket.emit('animate', { "motor": "motor_1F2", "command": -111 });
    };
}

var MotorA3 = function() {
    this.GO_UP_180 = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": 101 });
    };
    this.GO_DOWN_180 = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": -101 });
    };
    this.GO_UP_360 = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": 105 });
    };
    this.GO_DOWN_360 = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": -105 });
    };
    this.GO_UP_4X = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": 106 });
    };
    this.GO_DOWN_4X = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": -106 });
    };
    this.GO_UP_5X = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": 107 });
    };
    this.GO_DOWN_5X = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": -107 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": 110 });
    };
    this.SET_BOTTOM = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": 111 });
    };
    this.SET_ORIGIN = function() {
      socket.emit('animate', { "motor": "motor_1B1", "command": 150 });
    }
    this.SET_TOP = function() {
        socket.emit('animate', { "motor": "motor_1B1", "command": -111 });
    };
}

var MotorA4 = function() {
    this.GO_UP_180 = function() {
        socket.emit('animate', { "motor": "motor_1B2", "command": 101 });
    };
    this.GO_DOWN_180 = function() {
        socket.emit('animate', { "motor": "motor_1B2", "command": -101 });
    };
    this.GO_UP_360 = function() {
        socket.emit('animate', { "motor": "motor_1B2", "command": 105 });
    };
    this.GO_DOWN_360 = function() {
        socket.emit('animate', { "motor": "motor_1B2", "command": -105 });
    };
    this.GO_UP_4X = function() {
        socket.emit('animate', { "motor": "motor_1B2", "command": 106 });
    };
    this.GO_DOWN_4X = function() {
        socket.emit('animate', { "motor": "motor_1B2", "command": -106 });
    };
    this.GO_UP_5X = function() {
        socket.emit('animate', { "motor": "motor_1B2", "command": 107 });
    };
    this.GO_DOWN_5X = function() {
        socket.emit('animate', { "motor": "motor_1B2", "command": -107 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_1B2", "command": 110 });
    };
    this.SET_BOTTOM = function() {
        socket.emit('animate', { "motor": "motor_1B2", "command": 111 });
    };
    this.SET_ORIGIN = function() {
      socket.emit('animate', { "motor": "motor_1B2", "command": 150 });
    }
    this.SET_TOP = function() {
        socket.emit('animate', { "motor": "motor_1B2", "command": -111 });
    };
}

var MotorB1 = function() {
    this.GO_UP_180 = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": 101 });
    };
    this.GO_DOWN_180 = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": -101 });
    };
    this.GO_UP_360 = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": 105 });
    };
    this.GO_DOWN_360 = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": -105 });
    };
    this.GO_UP_4X = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": 106 });
    };
    this.GO_DOWN_4X = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": -106 });
    };
    this.GO_UP_5X = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": 107 });
    };
    this.GO_DOWN_5X = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": -107 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": 110 });
    };
    this.SET_BOTTOM = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": 111 });
    };
    this.SET_ORIGIN = function() {
      socket.emit('animate', { "motor": "motor_2F1", "command": 150 });
    }
    this.SET_TOP = function() {
        socket.emit('animate', { "motor": "motor_2F1", "command": -111 });
    };
}

var MotorB2 = function() {
    this.GO_UP_180 = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": 101 });
    };
    this.GO_DOWN_180 = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": -101 });
    };
    this.GO_UP_360 = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": 105 });
    };
    this.GO_DOWN_360 = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": -105 });
    };
    this.GO_UP_4X = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": 106 });
    };
    this.GO_DOWN_4X = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": -106 });
    };
    this.GO_UP_5X = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": 107 });
    };
    this.GO_DOWN_5X = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": -107 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": 110 });
    };
    this.SET_BOTTOM = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": 111 });
    };
    this.SET_ORIGIN = function() {
      socket.emit('animate', { "motor": "motor_2F2", "command": 150 });
    }
    this.SET_TOP = function() {
        socket.emit('animate', { "motor": "motor_2F2", "command": -111 });
    };
}

var MotorB3 = function() {
    this.GO_UP_180 = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": 101 });
    };
    this.GO_DOWN_180 = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": -101 });
    };
    this.GO_UP_360 = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": 105 });
    };
    this.GO_DOWN_360 = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": -105 });
    };
    this.GO_UP_4X = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": 106 });
    };
    this.GO_DOWN_4X = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": -106 });
    };
    this.GO_UP_5X = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": 107 });
    };
    this.GO_DOWN_5X = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": -107 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": 110 });
    };
    this.SET_BOTTOM = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": 111 });
    };
    this.SET_ORIGIN = function() {
      socket.emit('animate', { "motor": "motor_2B1", "command": 150 });
    }
    this.SET_TOP = function() {
        socket.emit('animate', { "motor": "motor_2B1", "command": -111 });
    };
}

var MotorB4 = function() {
    this.GO_UP_180 = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": 101 });
    };
    this.GO_DOWN_180 = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": -101 });
    };
    this.GO_UP_360 = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": 105 });
    };
    this.GO_DOWN_360 = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": -105 });
    };
    this.GO_UP_4X = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": 106 });
    };
    this.GO_DOWN_4X = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": -106 });
    };
    this.GO_UP_5X = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": 107 });
    };
    this.GO_DOWN_5X = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": -107 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": 110 });
    };
    this.SET_BOTTOM = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": 111 });
    };
    this.SET_ORIGIN = function() {
      socket.emit('animate', { "motor": "motor_2B2.", "command": 150 });
    }
    this.SET_TOP = function() {
        socket.emit('animate', { "motor": "motor_2B2", "command": -111 });
    };
}

var MotorC1 = function() {
    this.GO_UP_180 = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": 101 });
    };
    this.GO_DOWN_180 = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": -101 });
    };
    this.GO_UP_360 = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": 105 });
    };
    this.GO_DOWN_360 = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": -105 });
    };
    this.GO_UP_4X = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": 106 });
    };
    this.GO_DOWN_4X = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": -106 });
    };
    this.GO_UP_5X = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": 107 });
    };
    this.GO_DOWN_5X = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": -107 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": 110 });
    };
    this.SET_BOTTOM = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": 111 });
    };
    this.SET_ORIGIN = function() {
      socket.emit('animate', { "motor": "motor_3F1", "command": 150 });
    }
    this.SET_TOP = function() {
        socket.emit('animate', { "motor": "motor_3F1", "command": -111 });
    };
}

var MotorC2 = function() {
    this.GO_UP_180 = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": 101 });
    };
    this.GO_DOWN_180 = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": -101 });
    };
    this.GO_UP_360 = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": 105 });
    };
    this.GO_DOWN_360 = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": -105 });
    };
    this.GO_UP_4X = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": 106 });
    };
    this.GO_DOWN_4X = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": -106 });
    };
    this.GO_UP_5X = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": 107 });
    };
    this.GO_DOWN_5X = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": -107 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": 110 });
    };
    this.SET_BOTTOM = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": 111 });
    };
    this.SET_ORIGIN = function() {
      socket.emit('animate', { "motor": "motor_3F2", "command": 150 });
    }
    this.SET_TOP = function() {
        socket.emit('animate', { "motor": "motor_3F2", "command": -111 });
    };
}

var MotorC3 = function() {
    this.GO_UP_180 = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": 101 });
    };
    this.GO_DOWN_180 = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": -101 });
    };
    this.GO_UP_360 = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": 105 });
    };
    this.GO_DOWN_360 = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": -105 });
    };
    this.GO_UP_4X = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": 106 });
    };
    this.GO_DOWN_4X = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": -106 });
    };
    this.GO_UP_5X = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": 107 });
    };
    this.GO_DOWN_5X = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": -107 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": 110 });
    };
    this.SET_BOTTOM = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": 111 });
    };
    this.SET_ORIGIN = function() {
      socket.emit('animate', { "motor": "motor_3B1", "command": 150 });
    }
    this.SET_TOP = function() {
        socket.emit('animate', { "motor": "motor_3B1", "command": -111 });
    };
}

var MotorC4 = function() {
    this.GO_UP_180 = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": 101 });
    };
    this.GO_DOWN_180 = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": -101 });
    };
    this.GO_UP_360 = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": 105 });
    };
    this.GO_DOWN_360 = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": -105 });
    };
    this.GO_UP_4X = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": 106 });
    };
    this.GO_DOWN_4X = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": -106 });
    };
    this.GO_UP_5X = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": 107 });
    };
    this.GO_DOWN_5X = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": -107 });
    };
    this.CLEAR_LIMITS = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": 110 });
    };
    this.SET_BOTTOM = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": 111 });
    };
    this.SET_ORIGIN = function() {
      socket.emit('animate', { "motor": "motor_3B2", "command": 150 });
    }
    this.SET_TOP = function() {
        socket.emit('animate', { "motor": "motor_3B2", "command": -111 });
    };
}

var AllMotors = function() {

    this.GO_DOWN_180 = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -101 });
        });
    };
    this.GO_UP_180 = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 101 });
        });
    };
    this.GO_UP_360 = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 105 });
        });
    };
    this.GO_DOWN_360 = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -105 });
        });
    };
    this.GO_UP_4X = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 106 });
        });
    };
    this.GO_DOWN_4X = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -106 });
        });
    };
    this.GO_UP_5X = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 107 });
        });
    };
    this.GO_DOWN_5X = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -107 });
        });
    };
}

var AllF1F2B1 = function() {

    this.GO_DOWN_180 = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_2F1", "motor_2F2", "motor_2B1", "motor_3F1", "motor_3F2", "motor_3B1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -101 });
        });
    };
    this.GO_UP_180 = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_2F1", "motor_2F2", "motor_2B1", "motor_3F1", "motor_3F2", "motor_3B1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 101 });
        });
    };
    this.GO_UP_360 = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_2F1", "motor_2F2", "motor_2B1", "motor_3F1", "motor_3F2", "motor_3B1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 105 });
        });
    };
    this.GO_DOWN_360 = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_2F1", "motor_2F2", "motor_2B1", "motor_3F1", "motor_3F2", "motor_3B1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -105 });
        });
    };
    this.GO_UP_4X = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_2F1", "motor_2F2", "motor_2B1", "motor_3F1", "motor_3F2", "motor_3B1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 106 });
        });
    };
    this.GO_DOWN_4X = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_2F1", "motor_2F2", "motor_2B1", "motor_3F1", "motor_3F2", "motor_3B1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -106 });
        });
    };
    this.GO_UP_5X = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_2F1", "motor_2F2", "motor_2B1", "motor_3F1", "motor_3F2", "motor_3B1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 107 });
        });
    };
    this.GO_DOWN_5X = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_2F1", "motor_2F2", "motor_2B1", "motor_3F1", "motor_3F2", "motor_3B1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -107 });
        });
    };

}

var AllF1F2 = function() {

    this.GO_DOWN_180 = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_2F1", "motor_2F2", "motor_3F1", "motor_3F2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -101 });
        });
    };
    this.GO_UP_180 = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_2F1", "motor_2F2", "motor_3F1", "motor_3F2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 101 });
        });
    };
    this.GO_UP_360 = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_2F1", "motor_2F2", "motor_3F1", "motor_3F2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 105 });
        });
    };
    this.GO_DOWN_360 = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_2F1", "motor_2F2", "motor_3F1", "motor_3F2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -105 });
        });
    };
    this.GO_UP_4X = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_2F1", "motor_2F2", "motor_3F1", "motor_3F2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 106 });
        });
    };
    this.GO_DOWN_4X = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_2F1", "motor_2F2", "motor_3F1", "motor_3F2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -106 });
        });
    };
    this.GO_UP_5X = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_2F1", "motor_2F2", "motor_3F1", "motor_3F2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 107 });
        });
    };
    this.GO_DOWN_5X = function() {
        $.each(["motor_1F1", "motor_1F2", "motor_2F1", "motor_2F2", "motor_3F1", "motor_3F2"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -107 });
        });
    };

}

var AllF1 = function() {

    this.GO_DOWN_180 = function() {
        $.each(["motor_1F1", "motor_2F1", "motor_3F1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -101 });
        });
    };
    this.GO_UP_180 = function() {
        $.each(["motor_1F1", "motor_2F1", "motor_3F1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 101 });
        });
    };
    this.GO_UP_360 = function() {
        $.each(["motor_1F1", "motor_2F1", "motor_3F1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 105 });
        });
    };
    this.GO_DOWN_360 = function() {
        $.each(["motor_1F1", "motor_2F1", "motor_3F1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -105 });
        });
    };
    this.GO_UP_4X = function() {
        $.each(["motor_1F1", "motor_2F1", "motor_3F1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 106 });
        });
    };
    this.GO_DOWN_4X = function() {
        $.each(["motor_1F1", "motor_2F1", "motor_3F1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -106 });
        });
    };
    this.GO_UP_5X = function() {
        $.each(["motor_1F1", "motor_2F1", "motor_3F1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": 107 });
        });
    };
    this.GO_DOWN_5X = function() {
        $.each(["motor_1F1", "motor_2F1", "motor_3F1"], function(index, value) {
        socket.emit('animate', { "motor": value, "command": -107 });
        });
    };

}

var All_motions = function() {

    this.PLAY = function() {
        socket.emit('allmotions', 'allmotions_on');
    };
    this.STOP = function() {
        socket.emit('allmotions', 'allmotions_off');
    };
}

var Unicast = function() {
    this.SEND = function() {
        var goTo;

        goTo = this.command;

        if (this.motor == 'all_motors') {
            $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2", "motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2", "motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
                socket.emit('animate', {
                    "motor": value,
                    "command": goTo
                });
            });
        } else if (this.motor == 'petal_1'){
            $.each(["motor_1F1", "motor_1F2", "motor_1B1", "motor_1B2"], function(index, value) {
                socket.emit('animate', {
                    "motor": value,
                    "command": goTo
                });
            });
        } else if (this.motor == 'petal_2'){
            $.each(["motor_2F1", "motor_2F2", "motor_2B1", "motor_2B2"], function(index, value) {
                socket.emit('animate', {
                    "motor": value,
                    "command": goTo
                });
            });
        } else if (this.motor == 'petal_3'){
            $.each(["motor_3F1", "motor_3F2", "motor_3B1", "motor_3B2"], function(index, value) {
                socket.emit('animate', {
                    "motor": value,
                    "command": goTo
                });
            });
        } else {
            socket.emit('animate', {
                "motor": this.motor,
                "command": goTo
            });
        }
        console.log(this.command);
    };
    this.motor = 'motor_1F1';
    this.command = 0;
}

createFolder('Teste - Unicast', new Unicast(), ['SEND'], {
    before: function(folder, prop) {
        folder.add(prop, 'motor', {
            'Motor 1F1': 'motor_1F1',
            'Motor 1F2': 'motor_1F2',
            'Motor 1B1': 'motor_1B1',
            'Motor 1B2': 'motor_1B2',
            'Motor 2F1': 'motor_2F1',
            'Motor 2F2': 'motor_2F2',
            'Motor 2B1': 'motor_2B1',
            'Motor 2B2': 'motor_2B2',
            'Motor 3F1': 'motor_3F1',
            'Motor 3F2': 'motor_3F2',
            'Motor 3B1': 'motor_3B1',
            'Motor 3B2': 'motor_3B2',
            'Petal 1': 'petal_1',
            'Petal 2': 'petal_2',
            'Petal 3': 'petal_3',
            'All motors': 'all_motors'

        });
        folder.add(prop, 'command', 0, 100);
    }
});

createFolder('All motions', new All_motions(), [
    'PLAY',
    'STOP'
]);

createFolder('Motion - Idle', new Idle_motion(), [
    'IDLE_1_ON',
    'IDLE_1_OFF',
    'IDLE_2_ON',
    'IDLE_2_OFF',
    'IDLE_3_ON',
    'IDLE_3_OFF',
    'ALL_IDLE_ON',
    'ALL_IDLE_OFF'
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
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X'
]);

createFolder('Calibração - All F1, F2 e B1', new AllF1F2B1(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X'
]);

createFolder('Calibração - All F1, F2', new AllF1F2(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X'
]);

createFolder('Calibração - All F1', new AllF1(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X'
]);

createFolder('Calibração - Motor 1 F1', new MotorA1(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X',
    'CLEAR_LIMITS',
    'SET_ORIGIN',
    'SET_TOP',
    'SET_BOTTOM'
]);

createFolder('Calibração - Motor 1 F2', new MotorA2(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X',
    'CLEAR_LIMITS',
    'SET_ORIGIN',
    'SET_TOP',
    'SET_BOTTOM'
]);

createFolder('Calibração - Motor 1 B1', new MotorA3(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X',
    'CLEAR_LIMITS',
    'SET_ORIGIN',
    'SET_TOP',
    'SET_BOTTOM'
]);

createFolder('Calibração - Motor 1 B2', new MotorA4(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X',
    'CLEAR_LIMITS',
    'SET_ORIGIN',
    'SET_TOP',
    'SET_BOTTOM'
]);

createFolder('Calibração - Motor 2 F1', new MotorB1(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X',
    'CLEAR_LIMITS',
    'SET_ORIGIN',
    'SET_TOP',
    'SET_BOTTOM'
]);

createFolder('Calibração - Motor 2 F2', new MotorB2(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X',
    'CLEAR_LIMITS',
    'SET_ORIGIN',
    'SET_TOP',
    'SET_BOTTOM'
]);

createFolder('Calibração - Motor 2 B1', new MotorB3(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X',
    'CLEAR_LIMITS',
    'SET_ORIGIN',
    'SET_TOP',
    'SET_BOTTOM'
]);

createFolder('Calibração - Motor 2 B2', new MotorB4(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X',
    'CLEAR_LIMITS',
    'SET_ORIGIN',
    'SET_TOP',
    'SET_BOTTOM'
]);

createFolder('Calibração - Motor 3 F1', new MotorC1(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X',
    'CLEAR_LIMITS',
    'SET_ORIGIN',
    'SET_TOP',
    'SET_BOTTOM'
]);

createFolder('Calibração - Motor 3 F2', new MotorC2(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X',
    'CLEAR_LIMITS',
    'SET_ORIGIN',
    'SET_TOP',
    'SET_BOTTOM'
]);

createFolder('Calibração - Motor 3 B1', new MotorC3(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X',
    'CLEAR_LIMITS',
    'SET_ORIGIN',
    'SET_TOP',
    'SET_BOTTOM'
]);

createFolder('Calibração - Motor 3 B2', new MotorC4(), [
    'GO_UP_180',
    'GO_DOWN_180',
    'GO_UP_360',
    'GO_DOWN_360',
    'GO_UP_4X',
    'GO_DOWN_4X',
    'GO_UP_5X',
    'GO_DOWN_5X',
    'CLEAR_LIMITS',
    'SET_ORIGIN',
    'SET_TOP',
    'SET_BOTTOM'
]);

var container = document.getElementById('left-menu');
container.appendChild(leftGui.domElement);
