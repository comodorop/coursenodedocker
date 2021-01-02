const express = require('express')
const app = express()


app.get("/clients", (req, resp)=>{
  resp.status(200).send({
    "msg": "Hola este es un cambio"
  })
})

app.listen('8181', ()=>{
  console.log("Server start in 8181")
})