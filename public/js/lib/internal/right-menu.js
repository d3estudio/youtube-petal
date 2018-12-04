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
        $("#sensor_a1").addClass('active');
    };
    this.SENSOR_A1_OFF = function() {
        socket.emit('sensor', 'sensor_a1_off');
        $("#sensor_a1").removeClass('active');
    };
    this.SENSOR_A2_ON = function() {
        socket.emit('sensor', 'sensor_a2_on');
        $("#sensor_a2").addClass('active');
    };
    this.SENSOR_A2_OFF = function() {
        socket.emit('sensor', 'sensor_a2_off');
        $("#sensor_a2").removeClass('active');
    };
    this.SENSOR_A3_ON = function() {
        socket.emit('sensor', 'sensor_a3_on');
        $("#sensor_a3").addClass('active');
    };
    this.SENSOR_A3_OFF = function() {
        socket.emit('sensor', 'sensor_a3_off');
        $("#sensor_a3").removeClass('active');
    };
}

var SensoresB = function() {
    this.SENSOR_B1_ON = function() {
        socket.emit('sensor', 'sensor_b1_on');
        $("#sensor_b1").addClass('active');
    };
    this.SENSOR_B1_OFF = function() {
        socket.emit('sensor', 'sensor_b1_off');
        $("#sensor_b1").removeClass('active');
    };
    this.SENSOR_B2_ON = function() {
        socket.emit('sensor', 'sensor_b2_on');
        $("#sensor_b2").addClass('active');
    };
    this.SENSOR_B2_OFF = function() {
        socket.emit('sensor', 'sensor_b2_off');
        $("#sensor_b2").removeClass('active');
    };
    this.SENSOR_B3_ON = function() {
        socket.emit('sensor', 'sensor_b3_on');
        $("#sensor_b3").addClass('active');
    };
    this.SENSOR_B3_OFF = function() {
        socket.emit('sensor', 'sensor_b3_off');
        $("#sensor_b3").removeClass('active');
    };
}

var SensoresC = function() {
    this.SENSOR_C1_ON = function() {
        socket.emit('sensor', 'sensor_c1_on');
        $("#sensor_c1").addClass('active');
    };
    this.SENSOR_C1_OFF = function() {
        socket.emit('sensor', 'sensor_c1_off');
        $("#sensor_c1").removeClass('active');
    };
    this.SENSOR_C2_ON = function() {
        socket.emit('sensor', 'sensor_c2_on');
        $("#sensor_c2").addClass('active');
    };
    this.SENSOR_C2_OFF = function() {
        socket.emit('sensor', 'sensor_c2_off');
        $("#sensor_c2").removeClass('active');
    };
    this.SENSOR_C3_ON = function() {
        socket.emit('sensor', 'sensor_c3_on');
        $("#sensor_c3").addClass('active');
    };
    this.SENSOR_C3_OFF = function() {
        socket.emit('sensor', 'sensor_c3_off');
        $("#sensor_c3").removeClass('active');
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
