// datos del paquete
export type clima = 'Soleado' | 'Nublado' | 'Lluvioso' | 'Ventoso' | 'Tormenta'
export type visibilidad = 'Exelente' | 'Buena' | 'Poca' | 'Mala'
export type humor = 'Feliz' | 'Bueno' | 'Malo' | 'Triste' | 'Enojado'

export interface diarioEntry {
  id: number
  fecha: string
  clima: clima
  visibilidad: visibilidad
  descripcion: string
}

interface ExtraDiarioEntry extends diarioEntry {
  humor: humor
}
