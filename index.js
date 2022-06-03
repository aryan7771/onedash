const express = require("express")
const app = express();

app.get("/",function(req,res){
    res.send("Hello There, This is OneDash Demo Project")
})
app.listen(8080,function(){
    console.log("Port is running on 8080")
});