export interface listbrutPokemon {
  count : number
  next : string
  previous : string
  results : listpokemon[]
}

export interface listpokemon{
  name: string
  url : string
}

export interface detailPokemon {
  name: string
  height : string
  weight : string
  types : types[]
  stats : stats[]
  sprites : sprites
}

export interface sprites {
  back_default: string
  front_default: string
  other : othersprites
}

export interface othersprites {
  'official-artwork' : artwork
}

export interface artwork {
  front_default: string
}

export interface types {
  slot : number
  type: type
}

export interface type {
  name : string
  url : string
}

export interface stats {
  base_stat : number
  stat: stat
}

export interface stat {
  name : string
  url : string
}
