export class Evento {
    _id?: string;
    tituloEvento: string;
    facultadEvento: string;
    fechaInicio: Date;
    horaInicio: string;
    validezEvento: string;
    maximoAsistentes:Number;
    lugarEvento: string;
    imagenEvento: string;
    anfitrionEvento: string; 
    estadoEvento: boolean;
    usuariosInscritos: { usuario: string; activo: boolean }[]; // Arreglo de objetos con usuario y estado
    fechaCreacion?: Date; // Opcional, generado por defecto

    constructor(
        tituloEvento: string,
        fechaInicio: Date,
        horaInicio: string,
        tipoEvento: string,
        facultadEvento: string,
        validezEvento: string,
        lugarEvento: string,
        imagenEvento: string,
        estadoEvento: boolean,
        anfitrionEvento: string,
        maximoAsistentes: number,
        usuariosInscritos: { usuario: string; activo: boolean }[],
        fechaCreacion?: Date
    ) {
        this.tituloEvento = tituloEvento;
        this.fechaInicio = fechaInicio;
        this.horaInicio = horaInicio;
        this.facultadEvento = facultadEvento;
        this.validezEvento = validezEvento;
        this.lugarEvento = lugarEvento;
        this.imagenEvento = imagenEvento;
        this.estadoEvento = estadoEvento;
        this.anfitrionEvento = anfitrionEvento;
        this.maximoAsistentes = maximoAsistentes;
        this.usuariosInscritos = usuariosInscritos;
        this.fechaCreacion = fechaCreacion;
    }
}
