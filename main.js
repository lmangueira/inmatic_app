const { app, BrowserWindow } = require('electron')
const path = require('path')


function createMainWindow() {
    const __assets_dir = './assets'
    const _icon = __assets_dir + '/icon/icon.png'

    const mainWindow = new BrowserWindow({
        title: 'Inmatic.ai',
        width: 1280,
        height: 1024,
        minWidth: 1024,
        minHeight: 768,
        show: false,
        icon: _icon,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
          }
    });

    mainWindow.removeMenu()
    mainWindow.loadURL('https://app.inmatic.ai', {
        userAgent: "InmaticApp"
    })

    const splashWindow = new BrowserWindow({ 
        width: 500, 
        height: 300, 
        transparent: true, 
        frame: false, 
        alwaysOnTop: true,
        icon: _icon,
        skipTaskbar: true
      });

    splashWindow.loadFile('splash.html')
    splashWindow.center()

    mainWindow.once('ready-to-show', () => {
        splashWindow.close()

        mainWindow.show()
        mainWindow.maximize()
    })

}

app.on('ready', createMainWindow)
