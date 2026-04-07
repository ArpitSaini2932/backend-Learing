import express from "express"

const app = express()

const port = process.env.PORT || 3000

app.get("/", (req,res)=>{
    res.send("Vishu Saini")
})

app.listen(port ,()=>{
    console.log("The server is running on port " + port)
})