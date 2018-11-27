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

var StopAllButton = function() {
    this.STOP_ALL = function() {
        if (window.confirm('ARE YOU SURE???? \n\nTHIS WILL STOP THE CURRENT ANIMATION(S)')) {
            socket.emit('stop');
        }
    };
    this.STOP_ALL.dangerous = true;
};

var AdminCommands = function() {
    this.DISABLE____0xFF = function() {
        if (window.confirm('ARE YOU SURE???? \n\nTHIS WILL DISABLE ALL MOTORS')) {
            socket.emit('animation', 0xFF);
        }
    };
    this.CALIBRATE____0xFE = function() {
        if (window.confirm('ARE YOU SURE???? \n\nTHIS WILL RECALIBRATE ALL THE MOTORS TO ZERO')) {
            socket.emit('animation', 0xFE);
        }
    };
    this.RESET____0xFC = function() {
        if (window.confirm('ARE YOU SURE???? \n\nTHIS WILL RESET ALL MOTORS')) {
            socket.emit('animation', 0xFC);
        }
    };
    this.SET_ZERO_TO_POS____0xFD = function() {
        if (window.confirm('ARE YOU SURE???? \n\nTHIS WILL SET THE CURRENT ANGLE TO ACT AS ZERO')) {
            socket.emit('animation', 0xFD);
        }
    };
    this.HALT____0xFB = function() {
        if (window.confirm('ARE YOU SURE???? \n\nTHIS WILL (CAN\'T REMEMBER) ALL THE MOTORS')) {
            socket.emit('animation', 0xFB);
        }
    };
    this.RANDOM_POSITION = function() {
        if (window.confirm('ARE YOU SURE???? \n\nTHIS WILL ROTATE ALL THE MOTORS TO A RANDOM POSITION')) {
            socket.emit('animation', {
                animation: 'RandomPosition'
            });
        }
    };
}

createFolder('Stop All', new StopAllButton(), ['STOP_ALL']);
createFolder('Admin Commands', new AdminCommands(), [
    'DISABLE____0xFF',
    'CALIBRATE____0xFE',
    'RESET____0xFC',
    'SET_ZERO_TO_POS____0xFD',
    'HALT____0xFB',
    'RANDOM_POSITION'
]);

var container = document.getElementById('left-menu');
container.appendChild(leftGui.domElement);
