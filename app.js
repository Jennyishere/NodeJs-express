const express = require('express')
//引入模块
let router = require('./router')
//创建服务器
const app = express();
//设置模板引擎
app.set('view engine','ejs');
//设置静态资源
app.use('/node_modules',express.static('node_modules'))
//监听
app.listen(3005,()=> {
    console.log('server is running at http://127.0.0.1:3005' );
    
})


// app.get('/',(req,res)=> {
//     res.send('index')
// })
app.use(router)