var axios = require('axios')
const express = require('express');
const app = express();

state_List = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","	Haryana",
"Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya",
"Mizoram","	Nagaland","	Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]


captial_List = ["Amaravati", "Itanagar", "Dispur", "Patna", "Naya Raipur", "Panaji", "Gandhinagar", "Chandigarh", "Shimla", "Ranchi", "Bengaluru",
  "Thiruvananthapuram", "Bhopal", "Mumbai", "Imphal", "Shillong", "Aizawl", "Kohima", "Bhubaneswar",
  "Chandigarh", "Jaipur", "Gangtok", "Chennai", "Hyderabad", "Agartala", "Lucknow", "Dehradun", "	Kolkata"]


app.get("/getApi",(req,res)=>{
  function new_data(all_data) {
    res.send(all_data.sort())
    // console.log(all_data.sort())
  }
  async function findTemp(captial_List , state_List) {
    j = 0
    all_data = []
    try {
      for (var i = 0; i < captial_List.length; i++) {
        item = captial_List[i]
        cap_data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${item}&appid=e6cc25bc3e6603eb2106be076489983b`)
        var c_t = cap_data.data.main.temp
        var c_temp = c_t - 273.15;
        var c_temp = Math.floor(c_temp)

        capital_temp = [c_temp, captial_List[i] , state_List[j]]
        j = j + 1
        if (all_data.indexOf(capital_temp)) {
          all_data.push(capital_temp)
        } else {
          return True
        }
      }
    } catch (error) {
      console.log("Error ...");
      return false
    }
    return new_data(all_data)
  }
  findTemp(captial_List , state_List)
})
module.exports = app;