const express = require('express');
const students = require('../models/student')

const getstudent = async (req, res) => {
    try {
        const get = await students.find()
        res.status(200).json(get)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

}
const addStudent = async (req, res) => {
    const add = new students({
        name: req.body.name,
        roll: req.body.roll,
        class: req.body.class,
        contactNumber: req.body.contactNumber,
        age: req.body.age

    })
    try {

        await add.save()
        res.status(400).json(add)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
const getSpecificStudent = async (req, res) => {
    const _id = req.params._id
    try {
        const specStud = await students.findOne({ _id: _id })
        res.status(200).json(specStud)

    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }

}
const updateStudent = async (req, res) => {
    const name = req.params.name;
    try {
        await students.findOneAndUpdate({
            name: name,
        },
            {
                $pop: { contactNumber: 1 }
            })
        res.status(201).json({ name: name })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
const deleteStudent = async (req, res) => {
    const roll = req.params.roll;
    try {
        await students.findOneAndRemove({
            roll: roll,
        })
        res.status(202).json(deleteStudent)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}



module.exports = { getstudent, addStudent, getSpecificStudent, updateStudent }