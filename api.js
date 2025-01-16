const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).send('Authentication API')
})

app.post('/', (req, res) => {
  res.status(201).send('Created')
})

app.put('/:id', (req, res) => {
  console.log(req.params)
  res.sendStatus(204)// No Content just the status code
})

app.patch('/:id', (req, res) => {
  res.sendStatus(204)// No Content just the status code
})

app.delete('/:id', (req, res) => {
  res.sendStatus(204)// No Content just the status code
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})