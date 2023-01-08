const { format } = require("date-fns");
const { v4:uuid} = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEventt = async ( message )=>{
   const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
   const logItem = `${dateTime}\t${uuid()}\t${message}`;

   console.log(logItem)
}

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));
console.log(uuid());
// const logEventt = (err, req, res, next) => {
//     logEvents(`${err.name}, ${err.message}`, 'errLog.txt')
//     console.error(err.stack)
//     res.status(500).send(err.message);
// }
module.exports = logEventt;