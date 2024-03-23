import express from 'express'
import * as diarioServices from '../services/diarioServices'
const router = express.Router()

// get es un oyente para request
router.get('/', (_req, res) => {
  res.send(diarioServices.getEntriesSinDescripcion())
})

// post genera un cambio
router.post('/', (_req, res) => {
  res.send('Guardar actualizacion')
})

export default router
