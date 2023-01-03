
config = require("./configDefault");

config.env = "development"
config.hostname= "localhost"
config.PORT=process.env.PORT

// all configurations for S3 , a service providing object storage through a web service interface.
config.s3Endpoint = `sgp1.digitaloceanspaces.com`
config.s3BucketName = "cdn123"
config.s3Key = "ZVQPRUPLOSXFMDSU7AJN"
config.s3Secret = "ussqFe0Xk3WUgWcw+VgLK+9aTYMUG4Ufc92kinzThi0"


// configuration for database
dbConfig = {};
dbConfig.HOST=  process.env.DB_HOST ?? "localhost"
dbConfig.USER= process.env.DB_USER ?? "thang"
dbConfig.PASSWORD= process.env.DB_PASSWORD ?? "060901ttvt"
dbConfig.DB= process.env.DB_NAME ?? "thang"
dbConfig.PORT= process.env.DB_PORT ?? 5432
config.db = dbConfig;



console.log("current configuration for development is",config);
module.exports = config
