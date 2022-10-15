import express from 'express';
import parseUrl from 'body-parser';
const app = express()
const encodeUrl = parseUrl.urlencoded({ extended: false })

app.get('/', async (req, res) => {
  res.sendFile(__dirname + '/form/form.html')
})

app.post('/', encodeUrl, (req, res) => {
  console.log('Form request:', req.body)
  res.sendStatus(200)
})

app.listen(4000, () => {
  console.log("App running with http://localhost:"+ 4000)
});