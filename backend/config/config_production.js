config = require("./configDefault");
const fs = require('fs');

config.env = "production"
config.hostname= process.env.HOST
config.PORT=process.env.PORT

// all configurations for S3 , a service providing object storage through a web service interface.
config.s3Endpoint = `sgp1.digitaloceanspaces.com`
config.s3BucketName = process.env.S3_BUCKET_NAME;
config.s3Key = process.env.S3_KEY;
config.s3Secret = process.env.S3_SECRET;


// configuration for database
dbConfig = {};
dbConfig.HOST=  process.env.DB_HOST
dbConfig.USER= "thang"
dbConfig.PASSWORD= process.env.DB_PASSWORD,
dbConfig.DB= "defaultdb",
dbConfig.PORT= process.env.DB_PORT,
dbConfig.enableSSL=true;
dbConfig.caFile =fs.readFileSync('./ca-certificate.crt').toString();

config.db = dbConfig;


// should errors related to deployment be fixed in staging branch, or should we create a new branch to fix it?

console.log("current configuration for production is",config);
module.exports = config