const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password: '',
    database: 'cadastro'
})


app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req,res) => res.render('home'))


connection.connect((err) =>{
    app.listen(port, () => console.log('Starting na porta', + port) )
})

