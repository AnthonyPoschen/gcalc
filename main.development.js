import { app, BrowserWindow, Menu, shell, globalShortcut } from 'electron'

let menu
let template
let mainWindow = null


if (process.env.NODE_ENV === 'development') {
  require('electron-debug')() // eslint-disable-line global-require
}


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});


const installExtensions = async () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer') // eslint-disable-line global-require

    const extensions = ['REACT_DEVELOPER_TOOLS', 'REACT_PERF']

    const forceDownload = !!process.env.UPGRADE_EXTENSIONS
    for (const name of extensions) {
      try {
        await installer.default(installer[name], forceDownload);
      } catch (e) {} // eslint-disable-line
    }
  }
}

app.on('ready', async () => {
  await installExtensions()

  mainWindow = new BrowserWindow({
    show: false,
    height: 360,
    width: 245,
    minHeight: 360,
  })
  // Remove the top window completely
  mainWindow.setMenu(null)
  mainWindow.loadURL(`file://${__dirname}/app/index.html`)
  mainWindow.setTitle("gcalc")
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show()
    mainWindow.focus()
  });

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

function numberkeyevent(Num, window) {
    if(!window.isFocused()){
      console.log("Not focused")
      return
    }
    window.webContents.sendInputEvent({
      type: 'keydow',
      keyCode: Num
    })
    console.log('KEY PRESSED')
  }