const express = require("express")
const res = require("express/lib/response")

const app = express()

app.get("/user", logger, (req,res) =>{

    console.log("This is get_user excution ")

    return res.send({path:"/user", saomething : req.something})
})


app.get("/student", logger, (req,res) =>{

    console.log("This is get_user excution ")

    return res.send({path:"/student", saomething : req.something})
})

function logger(req,res,next){

    if(req.path==="/user")
    {
        req.something = "Anything"
    }
    else{
        req.something = "Nothing"
    }

    next()
}

// function logger2(req,res,next){

//     console.log(req.path)

//     next()
// }


app.listen(5500, () =>{

console.log("Lintining on 5500")

})