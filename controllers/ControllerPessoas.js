const pessoas = require('../models/ModelPessoas')

const index = async(db, req, res) => {
    const results = await pessoas.findAll(db)
    res.render('pessoas/index', {
        pessoas: results})
}

const deleteOne = async(db, req, res) =>{
    await pessoas.deleteOne(db, req.params.id)
    res.redirect('/pessoas')
}

const createForm = (req,res) =>{
    res.render('pessoas/new')
}

const create = async(db, req,res) =>{
   await pessoas.create(db, req.body)
   res.redirect('/pessoas')

}

const updateForm = async(db,req,res) =>{
    const pessoa = await pessoas.findById(db, req.params.id)   
    res.render('pessoas/update',{
        pessoa
    })
}

const update = async(db,req,res) =>{
   await pessoas.update(db,req.params.id, req.body)
   res.redirect('/pessoas')

}

    module.exports = {index,deleteOne,createForm,create,updateForm,update}