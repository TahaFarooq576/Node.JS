
//Creating a database in mongodb

use('todo')

console.log(db)
//Creating aa collection in that particular database
db.createCollection('list')
//inserting one record in database collection
db.list.insertOne({
    name:"Taha",
    fname:"Amjad",
    ph:"03437646310"
})
//insert multiple recordes in database
db.list.insertMany([
  { "name": "Taha",    "fname": "Amjad",   "ph": "03437646310" },
  { "name": "Sara",    "fname": "Khan",    "ph": "03441234567" },
  { "name": "Bilal",   "fname": "Hussain", "ph": "03001234567" },
  { "name": "Ayesha",  "fname": "Ali",     "ph": "03211234567" },
  { "name": "Zara",    "fname": "Raza",    "ph": "03131234567" },
  { "name": "Zara",   "fname": "Saeed",   "ph": "03331234567" },
  { "name": "Hira",    "fname": "Naz",     "ph": "03451234567" },
  { "name": "Omar",    "fname": "Faisal",  "ph": "03021234567" },
  { "name": "Maryam",  "fname": "Rehman",  "ph": "03221234567" },
  { "name": "Usman",   "fname": "Yasin",   "ph": "03341234567" },
  { "name": "Fatima",  "fname": "Javed",   "ph": "03491234567" }
]
)
//Read Operation
let a=db.list.find({"name":"Taha"})
console.log(a.count())
console.log(a.toArray())
let ac=db.list.findmany({"name":"Zara"}).toarray()
console.log(ac)

//Read only one record
let b=db.list.findOne({"name":"Taha"})
console.log(b)


//Update operations
db.list.updateOne({"name":"Taha"},{$set:{"name":"Mian"}})
db.list.updateMany({"name":"Taha"},{$set:{"name":"Mian"}})


db.list.deleteOne({"name":"Mian"})

db.list.deleteMany({"name":"Mian"})

 db.list.deleteMany({})
