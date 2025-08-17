/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigma');

// Insert a few documents into the sales collection.
db.getCollection('course').insertMany([
    
  { "name": "Web dev course",         "price": "2000" },
  { "name": "JavaScript basics",      "price": "1500" },
  { "name": "HTML & CSS",             "price": "1800" },
  { "name": "Backend fundamentals",   "price": "2200" },
  { "name": "React intro",            "price": "2500" },
  { "name": "Node.js essentials",     "price": "2300" },
  { "name": "Full-stack Uprising",    "price": "3000" },
  { "name": "Database deep-dive",     "price": "2100" }


]);


console.log("Done inserting data");
