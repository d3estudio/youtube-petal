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
    this.sensor_1a_ON = function() {
        socket.emit('sensor', 'sensor_1a_on');
        $("#sensor_1a").addClass('active');
    };
    this.sensor_1a_OFF = function() {
        socket.emit('sensor', 'sensor_1a_off');
        $("#sensor_1a").removeClass('active');
    };
    this.sensor_1b_ON = function() {
        socket.emit('sensor', 'sensor_1b_on');
        $("#sensor_1b").addClass('active');
    };
    this.sensor_1b_OFF = function() {
        socket.emit('sensor', 'sensor_1b_off');
        $("#sensor_1b").removeClass('active');
    };
    this.sensor_1c_ON = function() {
        socket.emit('sensor', 'sensor_1c_on');
        $("#sensor_1c").addClass('active');
    };
    this.sensor_1c_OFF = function() {
        socket.emit('sensor', 'sensor_1c_off');
        $("#sensor_1c").removeClass('active');
    };
}

var SensoresB = function() {
    this.sensor_2a_ON = function() {
        socket.emit('sensor', 'sensor_2a_on');
        $("#sensor_2a").addClass('active');
    };
    this.sensor_2a_OFF = function() {
        socket.emit('sensor', 'sensor_2a_off');
        $("#sensor_2a").removeClass('active');
    };
    this.sensor_2b_ON = function() {
        socket.emit('sensor', 'sensor_2b_on');
        $("#sensor_2b").addClass('active');
    };
    this.sensor_2b_OFF = function() {
        socket.emit('sensor', 'sensor_2b_off');
        $("#sensor_2b").removeClass('active');
    };
    this.sensor_2c_ON = function() {
        socket.emit('sensor', 'sensor_2c_on');
        $("#sensor_2c").addClass('active');
    };
    this.sensor_2c_OFF = function() {
        socket.emit('sensor', 'sensor_2c_off');
        $("#sensor_2c").removeClass('active');
    };
}

var SensoresC = function() {
    this.sensor_3a_ON = function() {
        socket.emit('sensor', 'sensor_3a_on');
        $("#sensor_3a").addClass('active');
    };
    this.sensor_3a_OFF = function() {
        socket.emit('sensor', 'sensor_3a_off');
        $("#sensor_3a").removeClass('active');
    };
    this.sensor_3b_ON = function() {
        socket.emit('sensor', 'sensor_3b_on');
        $("#sensor_3b").addClass('active');
    };
    this.sensor_3b_OFF = function() {
        socket.emit('sensor', 'sensor_3b_off');
        $("#sensor_3b").removeClass('active');
    };
    this.sensor_3c_ON = function() {
        socket.emit('sensor', 'sensor_3c_on');
        $("#sensor_3c").addClass('active');
    };
    this.sensor_3c_OFF = function() {
        socket.emit('sensor', 'sensor_3c_off');
        $("#sensor_3c").removeClass('active');
    };
}


createFolder('Sensores A', new SensoresA(), [
    'sensor_1a_ON',
    'sensor_1a_OFF',
    'sensor_1b_ON',
    'sensor_1b_OFF',
    'sensor_1c_ON',
    'sensor_1c_OFF'
]);

createFolder('Sensores B', new SensoresB(), [
    'sensor_2a_ON',
    'sensor_2a_OFF',
    'sensor_2b_ON',
    'sensor_2b_OFF',
    'sensor_2c_ON',
    'sensor_2c_OFF'
]);

createFolder('Sensores C', new SensoresC(), [
    'sensor_3a_ON',
    'sensor_3a_OFF',
    'sensor_3b_ON',
    'sensor_3b_OFF',
    'sensor_3c_ON',
    'sensor_3c_OFF'
]);




var container = document.getElementById('right-menu');
container.appendChild(rightGui.domElement);
