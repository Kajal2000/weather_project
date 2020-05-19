var axios = require('axios');

captial_List = ["Amaravati", "Itanagar", "Dispur", "Patna", "Naya Raipur", "Panaji", "Gandhinagar", "Chandigarh", "Shimla", "Ranchi", "Bengaluru",
    "Thiruvananthapuram", "Bhopal", "Mumbai", "Imphal", "Shillong", "Aizawl", "Kohima", "Bhubaneswar",
    "Chandigarh", "Jaipur", "Gangtok", "Chennai", "Hyderabad", "Agartala", "Lucknow", "Dehradun", "	Kolkata"]


state_List = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "	Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "	Nagaland", "	Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]



async function findTemp(c_url,s_url, s) {
    const c_config = {
        method: 'get',
        url: c_url,
        headers: { 'User-Agent': 'Console app' }
    }
    try {
        var c_res = await axios(c_config)
    } catch (error) {
        console.log("Error ...");
        return false
        
    }
    const s_config = {
        method: 'get',
        url: s_url,
        headers: { 'User-Agent': 'Console app' }
    }
    try {
        var s_res = await axios(s_config)
    } catch (error) {
        console.log("Error ...");
        return false

    }

    var c_t = c_res.data.main.temp
    var c_temp = c_t - 273.15;

    var s_t = s_res.data.main.temp
    var s_temp = s_t - 273.15;

    var temp_zone = {State : s}
    if (s_temp < c_temp){
        temp_zone.zone = "red"
    }else{
        temp_zone.zone = "green"
    }
    console.log(temp_zone);
    
} 

for (var i = 0; i < captial_List.length; i++) {
    let c = captial_List[i]
    let s = state_List[i]
    let C_url = `http://api.openweathermap.org/data/2.5/weather?q=${c}&appid=e6cc25bc3e6603eb2106be076489983b`
    let S_url =  `http://api.openweathermap.org/data/2.5/weather?q=${s}&appid=e6cc25bc3e6603eb2106be076489983b`
    findTemp(C_url, S_url, s)
    
}