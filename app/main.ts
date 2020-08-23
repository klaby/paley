import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'

let mainWindow: Electron.BrowserWindow | null

export const width = 350
export const height = 450

function createWindow() {
  mainWindow = new BrowserWindow({
    width,
    height,
    minWidth: width,
    minHeight: height,
    maxWidth: width,
    maxHeight: height,
    resizable: false,
    center: true,
    maximizable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
    mainWindow.webContents.openDevTools({ mode: 'undocked' })
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    )
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.allowRendererProcessReuse = true
