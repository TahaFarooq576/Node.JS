const express = require('express')
const app = express()
const port = 3000
app.set ('view engine','ejs')
app.get('/', (req, res) => {

   let name='taha'
   let fname='amjad'
   let arr=["TAHA","TAYYAB","AHTISHAM"]
   let search="SEARCH NOW"

  res.render('index', {name, fname, search, arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})