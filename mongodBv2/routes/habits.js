const express = require('express')
const router = express.Router()
const Habit = require('./models/habit')


router.get('/', async (req, res) => {
    try {
        const habits = await Habit.find()
        res.json(habits)
    } catch (err){
        res.status(500).json({ msg: err.msg})
    }
})

router.get('/:id', getHabit, (req, res) => {
    res.json(res.habit)
})

router.post('/', async (req, res) => {
    const habit = new Habit({
        name: req.body.name,
        priority: req.body.priority,
    })
    try {
        const newHabit = await habit.save()
        res.status(201).json(newHabit)
    } catch (err) {
        res.status(400).json({ msg: err.msg})
    }
})

router.patch('/:id', getHabit, async (req, res) => {
    if (req.body.name !== null) {
        res.habit.name = req.body.name
    }
    if (req.body.priority !== null) {
        res.habit.priority = req.body.priority
    }
    try {
        const updatedHabit =  await res.habit.save()
        res.json(updatedHabit)
    }
    catch(err) {
        res.status(400).json({ message: err.message})
    }
})

router.delete('/:id', getHabit, async (req, res) => {
    try {
        await res.habit.deleteOne()
        res.json({ message: 'deleted habit'})
    }
    catch(err) {
        res.status(500).json({ message: err.message})
    }
})

async function getHabit(req, res, next) {
    let habit
    try {
     habit = await Habit.findById(req.params.id)
     if (habit === null) {
        return res.status(404).json({ msg: 'habit not found'})
     }
} catch(err){
    return res.status(500).json({ msg: err.msg})
}

res.habit = habit
next()
}

module.exports = router

