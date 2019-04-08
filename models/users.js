let mongoose = require("mongoose");
let schema = new mongoose.Schema({
    name: String,
    gender: String,
});

//mongoose 需要把schema对象先变成可用model
module.exports = mongoose.model("Users", schema, "users");
//别人以后call的名字，原来对象的名字，在存储地里的名字
