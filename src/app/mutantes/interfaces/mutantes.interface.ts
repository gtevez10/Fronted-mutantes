export interface InterfaceMutante {
    registrosTotales: number;
    mutantesActivos:  MutantesActivos[];
}

export interface MutantesActivos {
    _id?:             string;
    nombre:           string;
    grupo:            string;
    condicion:        string;
    lugarDeOperacion: string;
    superPoder:       string;
    vehiculo:         string;
    img?:             string;
    estado:           boolean;
}
