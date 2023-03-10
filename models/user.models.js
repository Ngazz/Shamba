const con = require('../config/db_connection')
const db_creation = require('./db_creation')


exports.addUser = (username, email, password) => {

    con.connect((err) => {
        if (err){
            throw err
        }else{
            console.log("Connected!");
            console.log('database created')
            var sql = `INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password})`;
            con.query(sql, function (err, result) {
                if (err){
                    return false
                }else{
                    console.log("1 record inserted");
                    return true
                }
                
            });
        }
    })
    
}

exports.is_userExist = email => {
    con.connect((err) => {
        if (err) throw err

        con.query(`SELECT * FROM users WHERE email = '${email}'`, function (err, result) {
            if (err){
                throw err
            }else{
                console.log(result);
                if (result.length > 0){
                    return true
                }else{
                    return false
                }
            }
        });
    })
    return false
}