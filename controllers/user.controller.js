const path = require('path')
const bcrypt = require('bcryptjs')
const userModal = require('../models/user.models')
const db_creation = require('../models/db_creation')



exports.signupProcess = async (req, res, next) => {
    console.log(req.body)
    const { username, user_email, password: passPlainText, c_password} = req.body

    if (passPlainText !== c_password){
        return res.json({ 'status': 'error', 'message': 'Passwords not match'})
    }
1 
    if (passPlainText.length < 8){
        return res.json({ 'status': 'error', 'message': '8 digit character password required'})
    }

    try{
        const result = await userModal.is_userExist(user_email)
        console.log(result)

        if (result === true ){
            return res.json({ 'status': 'error', 'message': 'User exist. Try to login', 'e': '1'})
        }
    }catch(err){
        return res.json({ 'status': 'error', 'message': 'Something went wrong. Try again', 'e': '1'})
    }

    const password = await bcrypt.hash(passPlainText, 10)
    console.log(password)


   
    try{
        await userModal.addUser(username, user_email, password)
        return res.json({ 'status': 'ok', 'message': 'Account has been created successfully'}) 
    }catch(err){
        console.log(err)
        return res.json({ 'status': 'error', 'message': 'Something went wrong. Try again', 'e': '3'})
    }
    
}