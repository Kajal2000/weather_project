const knex = require('../connection.js');

// post Data

let post_data = (store_data) => {    
    return knex("weather").insert(store_data)
}

let search_data = (search)=>{
    return knex.select("*")
    .from("weather").where("State","like","%" + search+ "%")
}

module.exports = {post_data,search_data}