import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'

import { WIDTH, HEIGHT } from './shared/constants'

let mainWindow: BrowserWindow | null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: WIDTH,
    height: HEIGHT,
    minWidth: WIDTH,
    minHeight: HEIGHT,
    maxWidth: WIDTH,
    maxHeight: HEIGHT,
    alwaysOnTop: true,
    center: true,
    maximizable: false,
    frame: true,
    fullscreen: false,
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true,
      disableHtmlFullscreenWindowResize: true,
    },
  })

  mainWindow.setMenu(null)

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
    mainWindow.webContents.openDevTools({ mode: 'undocked' })
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer', 'index.html'),
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
