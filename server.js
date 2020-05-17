const express = require('express');
const bodyParser = require('body-parser');
const router = express();
router.use(bodyParser.json())
const request = require("request");

// First Api.........call
state_List = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","	Haryana",
"Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya",
"Mizoram","	Nagaland","	Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]

// 
captial_List = ["Amaravati","Itanagar","Dispur","Patna","Naya Raipur","Panaji","Gandhinagar","Chandigarh","Shimla","Ranchi","Bengaluru",
"Thiruvananthapuram","Bhopal","Mumbai","Imphal","Shillong","Aizawl","Kohima","Bhubaneswar",
"Chandigarh","Jaipur","Gangtok","Chennai","Hyderabad","Agartala","Lucknow","Dehradun","	Kolkata"]

function name() {
    router.get("/getApi",(req,res)=>{
        for (var i=0;i<captial_List.length; i++){
            j = 0
            request("http://api.openweathermap.org/data/2.5/weather?q="+captial_List[i]+"&appid=e6cc25bc3e6603eb2106be076489983b",function(err,res,body){
            var allData = JSON.parse(body);
            var capitalName = allData["name"];
            var temperature = allData['main']['temp'];
            var temp = temperature -273.15;
            var tempValue = Math.floor(temp);
            var state_data = state_List[j]
            // console.log(tempValue,state_data)  
            j =j+ 1
            return (state_data,tempValue)  
            })
            // console.log(state_data,tempValue)  
        // res.send(state_data,tempValue) 
        }
    })
} 
console.log(name())

router.listen(8000,()=>{
    console.log("server is listening..............)")
});

exports.module = router


