var env = process.env.NODE_ENV || "development"
// console.log(("./config_"+env).split(" "))
,cfg = require(("./config_"+env).split(" ").join(""));

module.exports = cfg;