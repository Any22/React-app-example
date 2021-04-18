const express = require('express');
const cors = require('cors');

const fs = require('fs')
const app = express()
app.use(cors()) 


const melbourneData = JSON.parse(fs.readFileSync('./server/melbourne.json')).map(
  (melbourneRecord) => ({
    id: melbourneRecord.id,
    name: melbourneRecord.name,
    info: melbourneRecord.info,
    image: melbourneRecord.image,
    price: melbourneRecord.price
  }),
)

app.get('/melbourne', (_, res) => {
  res.json(melbourneData)
})



// app.post('/saveData',  (req,_) =>{
//     // console.log("Using Body-parser: ", req.body.time);
//     req.stringify(req.body.time);
//     req.stringify(req.body.duration);
//     req.stringify(req.body.userId);
//     console.log(req.body.time);
//   })
app.listen(3001);
console.log("The server is listening on Port :3001");