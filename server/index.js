const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.js'))
})

app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../style.css'))
})