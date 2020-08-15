import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'
import shellPath from 'shell-path'

shellPath.sync()

let mainWindow: Electron.BrowserWindow | null

const width = 300
const height = 350

function createWindow() {
  mainWindow = new BrowserWindow({
    width,
    height,
    minWidth: width,
    minHeight: height,
    maxWidth: width,
    maxHeight: height,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    )
  }

  mainWindow.webContents.openDevTools({ mode: 'undocked' })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.disableHardwareAcceleration()
app.on('ready', createWindow)
app.allowRendererProcessReuse = true
