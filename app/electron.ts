import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'

let mainWindow: BrowserWindow | null

export const width = 320
export const height = 420

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
