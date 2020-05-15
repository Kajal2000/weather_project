let knexData = require('./connection.js')

// first tbl/SingUP tbl
knexData.schema.createTable('weather', (table) => {
    table.increments("id")
    table.string('State');
    table.string('Temperature');
    }).then(()=>{
        console.log("created tbl")
    }).catch((err)=>{
        console.log(err,"some error")
    })