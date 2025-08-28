import express from 'express'
import bodyParser from 'body-parser'

import cors from 'cors'
const app = express()

// Middlewares

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
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
import userRoutes from './routes/user.routes.js'
import urlRoutes from "./routes/url.routes.js"

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/url", urlRoutes);




export default app