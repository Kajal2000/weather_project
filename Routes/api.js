const express = require('express');
const app = express();
const appDB = require("../Model/appDB");


// const request = require("request")
// var readline = require('readline-sync');
// var user_input = readline.question("Enter your satate Name ?")
// request("http://api.weatherstack.com/current?access_key=b3d1212d49a9746ce06fbacb533c9d93&query=("+user_input+")",
// function(err,res,body){
// var allData = JSON.parse(body)
// // console.log(allData)

// var region = allData['location']['region']
// var temperature = allData["current"]["temperature"] 
// console.log(region,temperature)

app.post("/postApi",(req,res)=>{
    var store_data = {
        id : req.body.id,
        State : region,
        Temperature : temperature
    }
    appDB.post_data(store_data)
    .then(()=>{
        res.send("inserted data")
    })
    .catch((err)=>{
        res.send(err)
    })
})


app.get("/getApi/:search",(req,res)=>{
    var search = req.params.search
    appDB.search_data(search)
    .then((res_data)=>{
        res.send(res_data)
    }).catch((err)=>{
        res.send(err)
    })

})
// })



module.exports = app;


