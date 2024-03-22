import express from 'express'
import 

const app=express()
app.use(express.json()) //middleware que transforma la req.body a un json

const PORT=3000


app.get('/buscaminas',(_req,res)=>{
    res.send('Juego abierto')
    console.log('Aqui deberia abrirse una ventana')
})
app.get('/ping',(_req,res) => {
    console.log('alguien hizo ping')
    res.send('pong')
})

app.listen(PORT, ()=>{
    console.log(`El servidor esta en el puerto ${PORT}`)
})