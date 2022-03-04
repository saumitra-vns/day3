// console.log("lets start")


const express = require("express")

const app = express()

app.use(logger)

app.get("/users", (req,res) =>{

  

    return res.send("saum")
})


app.use(logger2)

app.get("/student", (req,res) =>{

    console.log("saumitra upadhayay")

    return res.send("saumit")
})

function logger(req,res,next) {

    console.log("logger test")

    next()

}

function logger2(req,res,next) {

    console.log("logger test22222222222")

    next()

}

app.listen(4000, () =>{

    console.log("listining on port 4000")
})

