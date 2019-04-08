let faker = require("faker");
let User = require("../models/users");
let db = require("../models/db");

//let randomEmail = faker.internet.email();
//let randomCard = faker.helpers.createCard();



//define and export callback, module.exports.名字
//  module.exports.data = function (req,res) {
//     let randomName = faker.name.findName();
//     res.send(randomName);
// };

module.exports.data = function (req,res) {
    User.find({}, function (error, result) {
        res.send(result);

    });
};

//createuse 的具体function
module .exports.register = function (req,res) {
    let randomName = faker.name.findName();
    let newuser = new User({
        name: randomName,

    });
    newuser.save().then(res.send("Success" +   " "+ randomName));
};
