const mysql = require('mysql')
let conn = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'hahahhah'
})

conn.connect();

module.exports = {
    getAllHero(callback) {
        let sql = 'select * from users'
        conn.query(sql,(err, result)=> {
            // console.log(err);
            if(err) return callback(err);
            // console.log(result); //得到数组
            callback(null,result);
        })
    },
    getOneHero(id,callback) {
        let sql = 'select * from users where id=?'
        conn.query(sql,[id],(err, result)=> {
            // console.log(err);
            if(err) return callback(err);
            console.log(result[0]); 
            callback(null,result[0]);
        })
    }
}