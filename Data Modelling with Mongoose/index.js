import express from "express"

const app = express()

const port = process.env.PORT || 3000

app.get("/", (req,res)=>{
    res.send("Vishu Boss")
})

app.listen(port ,()=>{
    console.log("The server is running on port " + port)
})