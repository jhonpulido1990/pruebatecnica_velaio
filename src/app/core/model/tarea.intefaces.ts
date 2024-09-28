export interface Tarea {
  id: string;
  nombre:    string;
  fecha:     Date;
  estado:    boolean;
  asociados: Asociado[];
}

export interface Asociado {
  nombre:      string;
  edad:        string;
  habilidades: Habilidade[];
}

export interface Habilidade {
  habilidad: string;
}
