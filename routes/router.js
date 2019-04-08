let express = require("express");
let router = express.Router();
let controller = require("../controllers/controller");

//set callback
// router.get("/users",function (req,res) {
//     res.send("烦人");
// });

 router.get("/users", controller.data);

 router.get("/createuser", controller.register);



//export 之后别的文件也可以用router
module.exports = router;
