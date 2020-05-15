 
// const request = require("request")
// var readline = require('readline-sync');
// // var user_input = readline.question("put your city Name ?")
// var state = "delhi"
// request(`http://api.openweathermap.org/data/2.5/weather?q=${state},IN&appid=e6cc25bc3e6603eb2106be076489983b`,
// function(err,res,body){
// var allData = JSON.parse(body)
// // console.log(allData.main.temp)
// console.log(allData)

// })


const request = require("request")
var readline = require('readline-sync');
var user_input = readline.question("Enter your satate Name ?")
request("http://api.weatherstack.com/current?access_key=b3d1212d49a9746ce06fbacb533c9d93&query=("+user_input+")",
function(err,res,body){
var allData = JSON.parse(body)
// console.log(allData)

var region = allData['location']['name']
var temperature = allData["current"]["temperature"] 
var all_dic = {}
    all_dic["region"]=region
    all_dic["temperature"]=temperature

    var list_data = []
    list_data.push(all_dic)

    var a = {
        alldic : list_data
    }
    var list_1 = []
    for(var i=0; i< a['alldic'].length; i++){
        var region = a['alldic'][i]['region']
        var temperature = a['alldic'][i]['temperature']
        list_1.push(region,temperature)
    }
    console.log(list_1)

})
