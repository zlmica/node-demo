const express = require('express')
const app = express()
const socket = process.env.SOCKET
const port = socket

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
