const express = require('express')

const app = express()


app.get('/', (req,res)=>{
  res.send('INDEX PAGE')
})

const port = 5000

app.listen(port, ()=> {
  console.log(`Server start on port ${port}`)
})
