const knex = require('../connection.js');

// post Data

let post_data = (store_data) => {
    console.log(store_data);
    
    return knex("weather").insert(store_data)
}


module.exports = {post_data}