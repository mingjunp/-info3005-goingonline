let express = require("express"); //require express
let app = express(); //call can assign

let router = require("./routes/router");//同级文件夹用./

//create 路由器 for homepage
// app.get("/homepage", function (req,res) {
//
//    res.send("看到你了");
// });


// tell express to relay requests to the '/' path to the router
app.use("/",router);


//start the server with listen
app.listen(process.env.PORT||3000,function () {
    console.log("开启");
    //http://localhost:3000/homepage
});




