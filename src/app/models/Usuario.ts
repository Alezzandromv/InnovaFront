export class User {
    _id?: string;
    nombres: string;
    apellidos: string;
    email: string;
    codigo: string;
    facultad: string;
    carrera: string;
    password: string;
    imagenPerfil?: string;

    constructor(
        nombres: string,
        apellidos: string,
        email: string,
        codigo: string,
        facultad: string,
        carrera: string,
        password: string,
        imagenPerfil?: string // Opcional
    ) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.codigo = codigo;
        this.facultad = facultad;
        this.carrera = carrera;
        this.password = password;
        this.imagenPerfil = imagenPerfil;
    }
}
