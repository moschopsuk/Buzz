var app = require('app');
var BrowserWindow = require('browser-window');
var path = require('path');

app.on('ready', function(){
    var mainWindow = new BrowserWindow({
        'width': 1000,
        'height': 600,
        'min-width': 1000,
        'min-height': 600,
        'show': false,
    });

    mainWindow.loadUrl(path.normalize('file://' + path.join(__dirname, 'index.html')));

    mainWindow.openDevTools();

    mainWindow.webContents.on('did-finish-load', function() {
        mainWindow.setTitle('LA1:TV CasparCG Client');
        mainWindow.show();
        mainWindow.focus();
    });
});
