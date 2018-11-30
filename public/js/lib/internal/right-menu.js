var rightGui = new dat.GUI({
    autoPlace: false
});

var createFolder = function(name, prop, items, custom) {
    custom = custom || {};
    var folder = rightGui.addFolder(name);
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

var SensoresA = function() {
    this.SENSOR_A1_ON = function() {
        socket.emit('sensor', 'sensor_a1_on');
    };
    this.SENSOR_A1_OFF = function() {
        socket.emit('sensor', 'sensor_a1_off');
    };
    this.SENSOR_A2_ON = function() {
        socket.emit('sensor', 'sensor_a2_on');
    };
    this.SENSOR_A2_OFF = function() {
        socket.emit('sensor', 'sensor_a2_off');
    };
    this.SENSOR_A3_ON = function() {
        socket.emit('sensor', 'sensor_a3_on');
    };
    this.SENSOR_A3_OFF = function() {
        socket.emit('sensor', 'sensor_a3_off');
    };
}

var SensoresB = function() {
    this.SENSOR_B1_ON = function() {
        socket.emit('sensor', 'sensor_b1_on');
    };
    this.SENSOR_B1_OFF = function() {
        socket.emit('sensor', 'sensor_b1_off');
    };
    this.SENSOR_B2_ON = function() {
        socket.emit('sensor', 'sensor_b2_on');
    };
    this.SENSOR_B2_OFF = function() {
        socket.emit('sensor', 'sensor_b2_off');
    };
    this.SENSOR_B3_ON = function() {
        socket.emit('sensor', 'sensor_b3_on');
    };
    this.SENSOR_B3_OFF = function() {
        socket.emit('sensor', 'sensor_b3_off');
    };
}

var SensoresC = function() {
    this.SENSOR_C1_ON = function() {
        socket.emit('sensor', 'sensor_c1_on');
    };
    this.SENSOR_C1_OFF = function() {
        socket.emit('sensor', 'sensor_c1_off');
    };
    this.SENSOR_C2_ON = function() {
        socket.emit('sensor', 'sensor_c2_on');
    };
    this.SENSOR_C2_OFF = function() {
        socket.emit('sensor', 'sensor_c2_off');
    };
    this.SENSOR_C3_ON = function() {
        socket.emit('sensor', 'sensor_c3_on');
    };
    this.SENSOR_C3_OFF = function() {
        socket.emit('sensor', 'sensor_c3_off');
    };
}


createFolder('Sensores A', new SensoresA(), [
    'SENSOR_A1_ON',
    'SENSOR_A1_OFF',
    'SENSOR_A2_ON',
    'SENSOR_A2_OFF',
    'SENSOR_A3_ON',
    'SENSOR_A3_OFF'
]);

createFolder('Sensores B', new SensoresB(), [
    'SENSOR_B1_ON',
    'SENSOR_B1_OFF',
    'SENSOR_B2_ON',
    'SENSOR_B2_OFF',
    'SENSOR_B3_ON',
    'SENSOR_B3_OFF'
]);

createFolder('Sensores C', new SensoresC(), [
    'SENSOR_C1_ON',
    'SENSOR_C1_OFF',
    'SENSOR_C2_ON',
    'SENSOR_C2_OFF',
    'SENSOR_C3_ON',
    'SENSOR_C3_OFF'
]);




var container = document.getElementById('right-menu');
container.appendChild(rightGui.domElement);
