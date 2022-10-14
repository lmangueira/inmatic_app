const { app, BrowserWindow } = require('electron')

function createMainWindow() {
    const __assets_dir = './assets'
    const mainWindow = new BrowserWindow({
        title: 'Inmatic.ai',
        minWidth: 1280,
        minHeight: 1024,
        icon: __assets_dir + '/icon/icon.png'
    })
    
    mainWindow.removeMenu()
    mainWindow.loadURL('https://app.inmatic.ai', {
        userAgent: "InmaticApp"
    })
}

app.on('ready', createMainWindow)
