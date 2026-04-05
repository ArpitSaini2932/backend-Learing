import express from 'express';  

const app = express()

app.get ("/",(req , res)=>{
    res.send("Vishu Saini")
})

const port  = process.env.PORT || 3000

app.get( "/api/jokes", (req ,res)=>{
    const jokes = [
        {
            id :1,
            title : "A Joke ",
            content  : "This is a joke "
        },
        {
            id :2,
            title : "Second Joke ",
            content  : "This good is a joke "
        },
        {
            id :3,
            title : "Third Joke ",
            content  : "This is also a good  joke "
        },
        {
            id :4,
            title : "Fourth Joke ",
            content  : "Not a bad a joke "
        },
        {
            id :5,
            title : "Fifth Joke ",
            content  : "This is a awesome joke "
        }
    ]

    res.json(jokes)
})


app.listen(port, ()=>{
    console.log("Sever is running on the port " + port )
})