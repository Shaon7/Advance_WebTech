const { log } = require("console");
const http = require("http");

const server = http.createServer((req,res)=>{


    res.write("This is response from server");
    res.end();

})

server.listen((3000),()=>{

    console.log("Server is running");
    
})