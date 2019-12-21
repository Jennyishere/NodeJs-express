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
    getEditPage(req,res) {
        res.render('edit',{});
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
        
       
    }
}