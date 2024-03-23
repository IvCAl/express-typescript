import { diarioEntry } from '../types'
import diarioData from './diarios.json'

// crea diarios como un array del tipo diarioEntry creado en el TS de tipos
// y se le asigna los valores traidos de diarioData
// as array<diarioEntry> parsea los datos de diarioData al formato diarioEntry
const diarios: diarioEntry[] = diarioData as diarioEntry[]

export const getEntries = (): diarioEntry[] => diarios

export const addEntry = (): undefined => undefined
