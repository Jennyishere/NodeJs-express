const expess = require('express')
const ejs = require('ejs')
const url = require('url')
const querystring = require('querystring')
let heroDta = require('./heroData')

module.exports = {
    // let 
    getIndexPage(req,res) {
        heroDta.getAllHero((err,data)=> {
            if(err) {
                return res.send(JSON.stringify({
                code: 201,
                msg: '获取数据出错'
            }))
        }
        res.render('index',{data: data});
        })
        
    },
    getAddPage(req,res) {
        res.render('add',{});
    },
    //编辑页面
    getEditPage(req,res) {
        // 前面的显示数据的步骤与info的相似
        let {id} = url.parse(req.url,true).query;
        heroDta.getOneHero(id,(err,data)=> {
            if(err) {
                return res.send(JSON.stringify({
                code: 201,
                msg: '获取数据出错'
            }))
        }
        res.render('edit',{data:data});
        })
       
    },
    //加载info页面
    getInfoPage(req,res) {
        let {id} = url.parse(req.url,true).query;
        // console.log(id);
        
        heroDta.getOneHero(id,(err,data)=> {
            if(err) {
                return res.send(JSON.stringify({
                code: 201,
                msg: '获取数据出错'
            }))
        }
        res.render('info',{data:data});
        })
        
    },
    //添加英雄
    addHero(req,res) {
        //拿到数据
        let str = '';
        req.on('data',chunk=> {
            str += chunk;
        })
        req.on('end',()=> {
            let addhero = querystring.parse(str);
            // console.log(addhero); 
            heroDta.addHero(addhero,(err)=> {
            if(!err) {
                return res.send({
                code: 201,
                msg: '添加失败'
            })
        }
        res.send({
            code: 200,
            msg: '添加成功'
        })
        })
        })
        
       
    },
    //编辑英雄
    editHero(req,res) {
        let {id} = url.parse(req.url,true).query;
            // console.log(id);
        let str = '';
        req.on('data',chunk=> {
            str += chunk;
        })
        req.on('end',()=> {
            let edithero = querystring.parse(str);
            // console.log(edithero);
            heroDta.editHero(edithero,(err)=> {
                if(!err) {
                    return res.send({
                    code: 201,
                    msg: '修改失败'
                })
            }
            res.send({
                code: 200,
                msg: '修改成功'
            })
            })
        })
    },
    //删除英雄
    deleteHero(req,res) {
        let {id} = url.parse(req.url,true).query;
        // console.log(id);
        heroDta.deleteHero(id,(err)=> {
            if(!err) {
                return res.send({
                code: 201,
                msg: '删除失败'
            })
        }
        res.send({
            code: 200,
            msg: '删除成功'
        })
        })
    }
}