const express = require("express");
const cli = require("nodemon/lib/cli");
const app = express();
const redis = require("redis");
const client = redis.createClient({
    host: '34.209.234.54',
    port: 6379,
    enableOfflineQueue: false,
    retry_strategy(options) {
        console.log(options)
      if (options.error && options.error.code === 'ECONNREFUSED') {
        return new Error('The server refused the connection');
      }
      if (options.total_retry_time > 1000 * 60 * 60) {
        return new Error('Retry time exhausted');
      }
      if (options.times_connected > 10) {
        return undefined;
      }
      return Math.max(options.attempt * 100, 3000);
    },
  });

client.set("foo","baar")




// client.on("connect",()=>{
//     console.log("Client Connected Successfully")
// })

// client.on("ready",()=>{
//     console.log("Client connected to redis and ready to use")
// })

// client.on("error",(err)=>{
//     console.log(err.message)
// })

// client.on("end",(err)=>{
//     console.log("Client Disconnected from server")
// })

// process.on("SIGINT",()=>{
//     console.log("Client disconnected from redis")
// })

app.get("/",async function(req,res){
    res.send("Hello There, This is OneDash Demo Project")
    //client.SET("foo","baar")
})
app.listen(8080,function(){
    console.log("Port is running on 8080")
});