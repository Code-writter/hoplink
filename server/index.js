
import dotenv from 'dotenv'
import chalk from 'chalk'


import app from './app.js'
import connectDB from './database/connectDB.js'

const PORT = process.env.PORT || 8000


dotenv.config()


connectDB()
.then(() => {
    // After connectin db we will start the server
    app.listen(PORT, () => {
        console.log(chalk.blueBright(`\nServer started at : http://localhost:${PORT}`))
    })

    // Global Cathes
    app.on( "ERROR :",(error)  => {
        console.log(chalk.bgRedBright(`Error : ${error.message}`))
        throw error
    })
})
.catch((error) => {
    console.log(chalk.bgRedBright(`Database connection Error : ${error.message}`))
    return error
}) 

