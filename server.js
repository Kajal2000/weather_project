const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(bodyParser.json())
app.use(cors())
const data = require("./weather")
app.use("/",data)

app.listen(8000,()=>{
    console.log("server is listening..............)")
});
    