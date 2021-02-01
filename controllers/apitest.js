const Apitest = require('../models/apitest');

exports.getApitest = async (req, res, next) => {
    try {
        const apitest = await Apitest.find();

        return res.status(200).json({
            success: true,
            count: apitest.length,
            data: apitest
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        });
    }
}

exports.addApitest = async (req, res, next) => {
    try {
        const {name, email, address} = req.body;
        console.log(req.body);
        const apitest = await Apitest.create(req.body);
        return res.send(201).json({
            success: true,
            data: apitest
        });
    } catch (err) {
        if(err.name === 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: message
            });
        }else{
            return res.status(500).json({
                success: false,
                error: 'server error'
            });
        }
    }
}   

exports.editApitest = async (req, res, next) => {
    try {
        const apitest = await Apitest.findById(req.params.id);

        if(!apitest){
            return res.status(404).json({
                success: false,
                error: 'data not found!'
            });
        }
        apitest.name = req.body.name;
        apitest.email = req.body.email;
        apitest.address = req.body.address;
        apitest.save();
        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        if(err.name === 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: message
            });
        }else{
            return res.status(500).json({
                success: false,
                error: 'server error'
            });
        }
    }
}

exports.deleteApitest = async (req, res, next) => {
    try {
        const apitest = await Apitest.findByIdAndRemove(req.params.id);

        if(!apitest){
            return res.status(404).json({
                success: false,
                error: 'data not found!'
            });
        }
        return res.status(204).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        });
    }
}