const {Pool} = require("pg");

const pool = new Pool({
    user: "jhxmjrlzdswfvg",
    host: "ec2-44-194-112-166.compute-1.amazonaws.com",
    database: "dec9bdmhmb9fp7",
    password: "276c32910f3b687a5606ff00673a7ba800fe7852d96a75db91551630ba000be6",
    port: 5432
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}