const { MongoClient } = require('mongodb')

const uri = ''

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb+srv://yoshi:test123@cluster0.mvbijlu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}
//
// 