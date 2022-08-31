import express from 'express'
const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.send('Hello World My First Node JS!')
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
