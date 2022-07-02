// bringing in mysql
// and we're creating a connection
// the connection object takes in DB_HOST, DB_USER,DB_PASSPORD, DB_NAME, PORT

let mysql = require("mysql");

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
});

connection.connect();

// issue a query to take in two things. Query you want to send
// as string and the function that tells you how to handle the function of the query
// once query finished the results the function we use for callbacks is how we handle the query
connection.query("select now()", function(err, results){
    // if err is truthy (if there is an err) console log "Could not test database connection" then print error
    // other wise console log ("connection test retults") and the results
    if(err){
        console.log("Could not test database connection", err);
    } else {
        console.log("Connection test results", results);
    }
}),

// exporting connection
module.exports = connection;