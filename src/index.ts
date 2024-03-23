import express from 'express'
import diarioRouter from './routes/diario';

const app=express()

app.use(express.json()) //middleware que transforma la req.body a un json
 
const PORT=3000


app.get('/ping',(_req,res) => {
    console.log('alguien hizo ping '+ new Date().toLocaleDateString())
    res.send('pong')
})

app.use('/api/diario',diarioRouter)

//Oyente para 
app.listen(PORT, ()=>{
    console.log(`El servidor esta en el puerto ${PORT}`)
})