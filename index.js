const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user:'root',
        password: '',
        database: 'cadastro'
    }
})
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/*
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password: '',
    database: 'cadastro'
})
*/

const dependecies = {
    db
}
const routes = require('./routes/routes')
app.get('/', (req,res) => res.render('home'))
app.use('/pessoas', routes(dependecies))

const execute = async() =>{
    app.listen(port, () => console.log('Starting na porta', + port) )
}

execute()
