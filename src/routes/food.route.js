'use strict'
const express = require('express');
const router = express.Router()
const {foodCollection} = require('../models/index')

router.get('/food', getAllFood);
router.get('/food/:id', getFoodById);
router.post('/food', addFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);


async function getAllFood(req,res) {
    const allFood = await foodCollection.read()
    res.status(200).json(allFood)
    
}

async function getFoodById(req,res) {
    const id = parseInt(req.params.id) 
    const oneFood = await foodCollection.read(id)
    res.status(200).json(oneFood)    

}

async function addFood(req,res) {
    const foodObject = req.body;
    const addFood = await foodCollection.create(foodObject)
    res.status(201).json(addFood)
    
}

async function updateFood(req,res) {
    const id = parseInt(req.params.id);
    const updatObject = req.body;     
    const updateFood = await foodCollection.update(updatObject)
    res.status(201).json(updateFood);    
}

async function deleteFood(req,res) {
    const id = parseInt(req.params.id);     
    const deleteFood = await foodCollection.delete(id)
    res.status(204).json(deleteFood);    
}

module.exports = router