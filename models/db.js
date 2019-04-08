let mongoose = require("mongoose");
let url = "mongodb+srv://mingjun:qwertyuiop22@cluster0-6p0dh.mongodb.net/test?retryWrites=true";

mongoose.connect(url, {useNewUrlParser: true});//建立连接
let db = mongoose.connection;//获得连接内容
db.on("error", console.error.bind(console, "connection error"));//打开数据库&报错

module.exports = db;

