

const express = require('express')
const app = express()
const port = 3000

app.get('/home/:slug', (req, res) => {
  res.send(`this is home page ${req.params.slug}`);
  console.log(req.params)
});



// app.get('/about', (req, res) => {
//   res.send('what you want to know about us')
// })



// app.get('/blog', (req, res) => {
//   res.send('Blog is here')
// })



// app.get('/contactus', (req, res) => {
//   res.send('Contact US')
// })

// app.get('/description', (req, res) => {
//   res.send('Discription')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


