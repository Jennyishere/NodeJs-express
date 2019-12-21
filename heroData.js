const mysql = require('mysql')
const moment = require('moment');
let conn = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'hahahhah'
})

conn.connect();

module.exports = {
    //获取所有英雄
    getAllHero(callback) {
        let sql = 'select * from users'
        conn.query(sql,(err, result)=> {
            // console.log(err);
            if(err) return callback(err);
            // console.log(result); //得到数组
            callback(null,result);
        })
    },
    //根据id获取英雄
    getOneHero(id,callback) {
        let sql = 'select * from users where id=?'
        conn.query(sql,[id],(err, result)=> {
            // console.log(err);
            if(err) return callback(err);
            // console.log(result[0]); 
            callback(null,result[0]);
        })
    },
    //添加英雄
    addHero(addhero,callback) {
        addhero.date = moment().format('YYYY-MM-DD')
        // console.log(addhero);
        
        let sql = 'insert into users set ?';
        conn.query(sql,[addhero],(err,result)=> {
            if(err) return callback(false);
            callback(true)
            // console.log(result);
            
        })
    }
}