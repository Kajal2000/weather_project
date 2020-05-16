const request = require("request");

// First Api.........call
state_List = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","	Haryana",
"Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya",
"Mizoram","	Nagaland","	Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]

for(var j=0; j<state_List.length; j++){
    request("http://api.openweathermap.org/data/2.5/weather?q="+state_List[j]+"&appid=e6cc25bc3e6603eb2106be076489983b",function(err,res,body){
    var allData = JSON.parse(body);
    var stateName = allData["name"];
    // console.log(stateName)
    }
)}
// Second Api call................. 
captial_List = ["Amaravati","Itanagar","Dispur","Patna","Naya Raipur","Panaji","Gandhinagar","Chandigarh","Shimla","Ranchi","Bengaluru",
"Thiruvananthapuram","Bhopal","Mumbai","Imphal","Shillong","Aizawl","Kohima","Bhubaneswar",
"Chandigarh","Jaipur","Gangtok","Chennai","Hyderabad","Agartala","Lucknow","Dehradun","	Kolkata"]


for (var i=0;i<captial_List.length; i++){
    request("http://api.openweathermap.org/data/2.5/weather?q="+captial_List[i]+"&appid=e6cc25bc3e6603eb2106be076489983b",function(err,res,body){
    var allData = JSON.parse(body);
        var capitalName = allData["name"];
        var temperature = allData['main']['temp'];
        var temp = temperature -273.15;
        var tempValue = Math.floor(temp);
        console.log(capitalName,tempValue)
    }
)}
