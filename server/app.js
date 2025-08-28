import express from 'express'
import bodyParser from 'body-parser'

const app = express()


// Middlewares

app.use(bodyParser({
    limit : "16kb"
}))
app.use(express.urlencoded({
    extended : true,
    limit : "16kb"
}))
// cookie parser
// app.use()



app.get("/", (req, res) => {
    console.log("Server is working")

    return res.status(200).json({
        msg : "Server is working"
    })
})


// Routes

app.use("/api/v1", routes);





export default app