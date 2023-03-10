const loginBtn = document.getElementById('loginBtn')
const error_smg = document.getElementById('error_smg')
error_smg.style.display = 'none'

const signup_error_smg = document.getElementById('signup_error_smg')
signup_error_smg.style.display = 'none'

const signupBtn = document.getElementById('signupBtn')

signupBtn.addEventListener('click', async (event) =>{
    event.preventDefault()
    console.log('sign up clicked')

    const username = document.getElementById('username').value
    const user_email = document.getElementById('signup_user_email').value
    const password = document.getElementById('password').value
    const c_password = document.getElementById('c_password').value

    console.log(user_email, username, password, c_password)

    if (username === "" || user_email === "" || password === "" || c_password === ""){
        signup_error_smg.style.display = 'block'
        signup_error_smg.style.color = 'red'
        signup_error_smg.innerHTML = 'Fill the empty fields !'
    }else{
        const result = await fetch('/api/signup/process', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username,
                user_email,
                password,
                c_password
            })
        }).then(res => res.json())

        console.log(result)

        if (result.status === 'error'){
            signup_error_smg.style.display = 'block'
            signup_error_smg.style.color = 'red'
            signup_error_smg.innerHTML = result.message

            setTimeout(() => {
                signup_error_smg.style.display = 'none'
            }, 2000)
        }
    }
})

loginBtn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('clicked')

    const user_email = document.getElementById('user_email').value
    const user_password = document.getElementById('user_password').value

    console.log(user_email,user_password)
    if (user_email === "" || user_password === ""){
        error_smg.style.display = 'block'
        error_smg.style.color = 'red'
        error_smg.innerHTML = 'Fill the enpty fields!'
    }else{
        // fetch user in the db
    }
})
