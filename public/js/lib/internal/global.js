window.AudioContext = window.AudioContext || window.webkitAudioContext;

var lastCommand = Date.now();

var socket = io();
socket
    .on('command', function (command) {
        lastCommand = Date.now();
        // here we animate the web
    });
