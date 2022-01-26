const express = require('express')
const app = express()
const socket = process.env.SOCKET
const port = socket

app.get('/', (req, res) => {
  res.send('你好啊，哈哈')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
