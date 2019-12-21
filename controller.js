const expess = require('express')
const ejs = require('ejs')
const url = require('url')
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
    getInfoPage(req,res) {
        let {id} = url.parse(req.url,true).query;
        console.log(id);
        
        heroDta.getOneHero(id,(err,data)=> {
            if(err) {
                return res.send(JSON.stringify({
                code: 201,
                msg: '获取数据出错'
            }))
        }
        res.render('info',{data:data});
        })
        
    }
}