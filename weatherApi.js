var axios = require('axios');

captial_List = ["Amaravati", "Itanagar", "Dispur", "Patna", "Naya Raipur", "Panaji", "Gandhinagar", "Chandigarh", "Shimla", "Ranchi", "Bengaluru",
  "Thiruvananthapuram", "Bhopal", "Mumbai", "Imphal", "Shillong", "Aizawl", "Kohima", "Bhubaneswar",
  "Chandigarh", "Jaipur", "Gangtok", "Chennai", "Hyderabad", "Agartala", "Lucknow", "Dehradun", "	Kolkata"]

// First Api.........call
state_List = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","	Haryana",
"Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya",
"Mizoram","	Nagaland","	Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]


async function findTemp(c_url , c) {
  all_data = []
  try {
    var c_res = await axios.get(c_url)
  } catch (error) {
    console.log("Error ...");
    return false

  }
  var c_t = c_res.data.main.temp
  var c_temp = c_t - 273.15;
  var c_temp = Math.floor(c_temp)
  capital_temp = [c_temp , c] 
  all_data.push(capital_temp)
  // console.log(capital_temp)  
}

for (var i = 0; i < captial_List.length; i++){

  let c = captial_List[i]
  let C_url = `http://api.openweathermap.org/data/2.5/weather?q=${c}&appid=e6cc25bc3e6603eb2106be076489983b`
  (findTemp(C_url , c))
} 
