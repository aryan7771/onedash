### Welcome to Readme file for Redis intigration with nodeJS and AWS Elastice Cache

TO Intigrate redis with nodeJS using AWS Follow these Steps

1. Create a Eclastic Cache instance with t2 micro

2. After Successfully creating Eclastic Cache instance now create a EC2 instance with AWS

3. After Successfully setting up the EC2 instance connect with that EC2 instance on Command Line from AWS EC2 instance management console

4. Now Install NodeJS , GitHub and Redis on that EC2 instance / Server

##################Go to root of the Server and run the following command

To go to root Run the following command

$ sudo su

After going to root run the following command

$ yum update

######################### Instructions to install redis server

$ yum install redis-6.2.6-1.amzn2.x86_64


######################### Instructions to install GitHub are given below:

Run Following commands on the server

$ yum install git

##################### Instructions to install NodeJS are given below:

$  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

$  . ~/.nvm/nvm.sh

$  nvm install node

$  node -e "console.log('Running Node.js ' + process.version)"

If the last command executed thorws any error just restart the command prompt and check Node version

##### Now check Node version on your device

$ node --version

You might be able to see node version installed on your device

##### Now check Git version on your device

$ git --version


5. After Installing all necessary dependencies on your server

5.1  Create a node Project

5.2  Install a redis library on your node Project

5.3  Paste following code into your project

const redis = require("redis");
const client = redis.createClient({
    host: 'your host',
    port: your port or default port is 6379,
  });

client.connect();
client.on("connect",()=>{
    console.log("Client Connected Successfully")
})

# To set a value in redis use

client.set("key", "value");

$ To get a value in redis use

client.get("key")

5.4  Now create a git repository and upload your code to git repository

5.5 Now clone that repository to AWS EC2 instance

5.6 After cloning repo install all the dependencies on your server

5.7 start project with `node index` or `npm start` any command you use

Check the output should be `Client Connected Successfully`


# These are the steps you need to intigrate redis configuration