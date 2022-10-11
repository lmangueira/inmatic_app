const { app, BrowserWindow } = require('electron')

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Inmatic.ai',
        minWidth: 1000,
        minHeight: 800,
    })
    mainWindow.removeMenu()
    mainWindow.loadURL('https://app.inmatic.ai')
}

app.on('ready', createMainWindow)
