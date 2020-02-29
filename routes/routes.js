const express = require('express')
const PessoasController = require('../controllers/ControllerPessoas')

const pessoasRouter = ({db}) => {
    const router = express.Router()
    router.get('/', PessoasController.index.bind(null, db))  
    router.get('/delete/:id', PessoasController.deleteOne.bind(null, db))
    router.get('/create', PessoasController.createForm)  
    router.post('/create', PessoasController.create.bind(null, db)) 
    router.get('/update/:id', PessoasController.updateForm.bind(null,db))  
    router.post('/update/:id', PessoasController.update.bind(null,db)) 
    return router
}


module.exports = pessoasRouter