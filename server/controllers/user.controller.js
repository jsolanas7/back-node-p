const express = require('express');
const app = express();
const User = require('../models/user');


app.post('/user/create',[], async function(req, res){
    const body = req.body;
    try{
        const user = new User({
            email: body.email,
            password: body.password,
            firstName: body.firstName,
            surName: body.surName
        });
        const userDB = await user.save();
        return res.json({
            userDB
        });
    }catch(err){
        res.status(400).json({
            ok:false,
            err,
            message: 'No se pudo crear el usuario'
        })
    }
});
app.get('/user/getAll',[], async function(req, res){
    try{
        const users = await User.find();
        return res.json({
            users
        });
    }catch(err){
        res.status(400).json({
            ok:false,
            err,
            message: 'No se pudo obtener la lista de usuarios'
        })
    }
});

app.put('/user/update/:id',[], async function(req, res){
    const id = req.params.id;
    try{
        const user = await User.findByIdAndUpdate(id, req.body);
        return res.json({
            user
        });
    }catch(err){
        res.status(400).json({
            ok:false,
            err,
            message: 'No se pudo crear el usuario'
        })
    }
});

module.exports = app;