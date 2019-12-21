//引入框架
const express = require('express')
let controller = require('./controller')

//创建路由
let router = express.Router();

router.get('/',(req,res)=> {
    controller.getIndexPage(req,res)
})
.get('/add',(req,res)=> {
    controller.getAddPage(req,res)
})
.get('/edit',(req,res)=> {
    controller.getEditPage(req,res)
})
.get('/info',(req,res)=> {
    controller.getInfoPage(req,res)
})
.post('/addHero',(req,res)=> {
    controller.addHero(req,res)
})
.post('/editHero',(req,res)=> {
    controller.editHero(req,res)
})
.get('/deleteHero',(req,res)=> {
    controller.deleteHero(req,res)
})
//暴露路由
module.exports = router;