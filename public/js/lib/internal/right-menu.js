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
    folder.open();
    if (!!custom.after) {
        custom.after(folder, prop);
    }
};

var SensoresA = function() {
    this.TEST_A = function() {
        socket.emit('animate', {"sensor": "sensor_a", "command": "TEST_A"});
    };
}

var SensoresB = function() {
    this.TEST_B = function() {
        socket.emit('animate', {"sensor": "sensor_b", "command": "TEST_B"});
    };
}

var SensoresC = function() {
    this.TEST_C = function() {
        socket.emit('animate', {"sensor": "sensor_c", "command": "TEST_C"});
    };
}


createFolder('Sensores A', new SensoresA(), [
    'TEST_A'
]);

createFolder('Sensores B', new SensoresB(), [
    'TEST_B'
]);

createFolder('Sensores C', new SensoresC(), [
    'TEST_C'
]);


var container = document.getElementById('right-menu');
container.appendChild(rightGui.domElement);
