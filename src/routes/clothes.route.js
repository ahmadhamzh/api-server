'use strict'
const express = require('express');
const router = express.Router()
const {clothesCollection} = require('../models/index')

router.get('/clothes', getAllFood);
router.get('/clothes/:id', getFoodById);
router.post('/clothes', addFood);
router.put('/clothes/:id', updateFood);
router.delete('/clothes/:id', deleteFood);


async function getAllFood(req,res) {
    const allFood = await clothesCollection.read()
    res.status(200).json(allFood)
    
}

async function getFoodById(req,res) {
    const id = parseInt(req.params.id) 
    const oneFood = await clothesCollection.read(id)
    res.status(200).json(oneFood)    

}

async function addFood(req,res) {
    const foodObject = req.body;
    const addFood = await clothesCollection.create(foodObject)
    res.status(201).json(addFood)
    
}

async function updateFood(req,res) {
    const id = parseInt(req.params.id);
    const updatObject = req.body;     
    const updateFood = await clothesCollection.update(updatObject)
    res.status(201).json(updateFood);    
}

async function deleteFood(req,res) {
    const id = parseInt(req.params.id);     
    const deleteFood = await clothesCollection.delete(id)
    res.status(204).json(deleteFood);    
}

module.exports = router