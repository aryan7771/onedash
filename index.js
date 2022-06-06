const express = require("express");
const cli = require("nodemon/lib/cli");
const app = express();
const redis = require("redis");
const client = redis.createClient({
    host: '34.209.234.54',
    port: 6379,
  });

client.on("connect",()=>{
    console.log("Client Connected Successfully")
})
//client.set("foo","baar")
// client.on("ready",()=>{
//     console.log("Client connected to redis and ready to use")
// })
// client.get("foo")
client.on("error",(err)=>{
    console.log("Error from log "+err.message)
})

// client.on("end",(err)=>{
//     console.log("Client Disconnected from server")
// })

// process.on("SIGINT",()=>{
//     console.log("Client disconnected from redis")
// })

app.get("/",async function(req,res){

    //await client.connect();

    client.on('error', err => {
        console.log('Error ' + err);
    });

    res.send("Hello There, This is OneDash Demo Project")
    await client.SET("foo","baar")
})

app.listen(8080,function(){
    console.log("Port is running on 8080")
});