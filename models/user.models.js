const con = require('../config/db_connection')
const db_creation = require('./db_creation')


exports.addUser = (username, email, password) => {

    con.connect((err) => {
        if (err){
            throw err
        }else{
            console.log("Connected!");
            console.log('database created')
            var sql = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`;
            con.query(sql, function (err, result) {
                if (err){
                    throw err
                }else{
                    console.log("1 record inserted");
                }
                
            });
        }
    })
}

exports.is_userExist =email => {
    con.connect(async (err) => {
        if (err) throw err

        try {
            const query = 'SELECT COUNT(*) as count FROM users WHERE email = ?';
            const [rows] = await con.execute(query, [email]);
            const count = rows[0].count;
            console.log(count)
            if (count > 0) {
              return true; // email exists
            } else {
              return false; // email does not exist
            }
          } catch (error) {
            console.error(error);
            return false; // error occurred
          }
    })
}