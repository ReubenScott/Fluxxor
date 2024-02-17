//主进程

//引入electron模块
const {app, BrowserWindow} = require('electron')

//nodejs中的path模块
const path = require('path')

const createWindow = ()=>{
    //创建BrowserWindow的实例 赋值给mainWindow打开窗口
    //软件默认打开的宽度高度 {width:400,height:400}
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    /*把index.html加载到窗口里面*/
    win.loadFile('index.html');
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


app.on("window-all-closed", ()=>{
    if(process.platform !== 'darwin') {
        app.quit();
    }
});



