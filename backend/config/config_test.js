config = require("./configDefault");

config.env = "test"
config.hostname= "localhost"
config.PORT = 3000;

// all configurations for S3 , a service providing object storage through a web service interface.
config.s3Endpoint = `sgp1.digitaloceanspaces.com`
config.s3BucketName = "cdn123"

dbConfig = {};
dbConfig.HOST= "/var/run/postgresql",
dbConfig.USER= "root",
dbConfig.DB= "root",
dbConfig.PORT= 5432
// dbConfig.PASSWORD= "tt06092001",
config.db = dbConfig;

console.log("current configuration for testing is",config);
module.exports = config