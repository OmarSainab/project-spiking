const express = require('express')
const { connectToDb, getDb } = require('./db')

const app = express()
app.use(express.json())



let db


connectToDb((err) => {
if (!err){
    app.listen(3000, () => {
        console.log('app listening on port 3000')
    })    
    db = getDb()
}
})


app.get('/habits', (req, res) => {
let habits = []

    db.collection('habits')
    .find()
    .sort({ habit: 1})
    .forEach(habit => habits.push(habit))
    .then(() => {
        res.status(200).json(habits)
    })
    .catch(() => {
        res.status(500).json({ error: 'Could not fetch the documents '})
    })
})

app.post('/habits', (req, res) => {
    const habit = req.body
    
    db.collection('habits')
    .insertOne(habit)
    .then((result) => {
        res.status(201).json(result)
    })
    .catch((err) => {
        res.status(500).json({ err: 'Could not create a new document'})
    })
})

