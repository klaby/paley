import { app, BrowserWindow } from 'electron'
import path from 'path'

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
    mainWindow.webContents.openDevTools({ mode: 'undocked' })
  } else {
    mainWindow.loadURL(
      `file://${path.resolve(process.cwd(), 'dist', 'index.html')}`,
    )
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.allowRendererProcessReuse = true
