import express from 'express';


const router= express.Router()

//get es un oyente para request
router.get('/',(_req,res)=>{
    res.send('buscando actualizaciones')
})

//post genera un cambio
router.post('/',(_req,res)=>{
    res.send('Guardar actualizacion')
})

export default router