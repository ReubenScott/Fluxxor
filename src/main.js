//主进程

//引入electron模块
const {app, BrowserWindow} = require('electron')

//nodejs中的path模块
const path = require('path')
const url = require("url");

const createWindow = ()=>{
    //创建BrowserWindow的实例 赋值给mainWindow打开窗口
    //软件默认打开的宽度高度 {width:400,height:400}
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    /* 把index.html加载到窗口里面
    win.loadFile(path.join(__dirname, 'index.html'));
    */

    // 加载应用----react 打包
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    /* 加载应用----适用于 react 开发时项目
    mainWindow.loadURL('http://localhost:3000/');
    */

    // 打开开发者工具，默认不打开
    // mainWindow.webContents.openDevTools();

};

app.whenReady().then(()=>{
    createWindow();

    // 苹果在退出后仍驻留
    app.on('activate', ()=>{
        if (BrowserWindow.getAllWindows().length === 0 ){
            createWindow();
        }
    });
});

// 所有窗口关闭时退出应用.
app.on("window-all-closed", ()=>{
    if(process.platform !== 'darwin') {
        app.quit();
    }
});



