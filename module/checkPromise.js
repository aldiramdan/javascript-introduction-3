const data =[
    {
        username: 'aldi',
        password: '12345'
    },
    {
        username: 'aldiramdan',
        password: '12345'
    },
    {
        username: 'aldi',
        password: '123451'
    }
]

const checkUsername = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = 'aldiramdan1'
            for (let i = 0; i < data.length; i++) {
                if (user === data[i].username) {        
                    reject(new Error('Username sudah ada'))  
                }
            }
           resolve(user)
        }, 2000)
    })
}

const checkPassword = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pass = '1234512'
            if (8 <= pass.length) {
                resolve(pass)
            } else {
                reject(new Error('Password kurang dari 8 kata'))
            }
        }, 1000)
    })
}

function userRegistry() {
    checkUsername()
    .then((user) => {
        checkPassword()
        .then((pass) => {
            console.log('Anda bisa daftar');
        })
    })
    .catch((err) => {
        console.log(err)
    })
}
userRegistry()