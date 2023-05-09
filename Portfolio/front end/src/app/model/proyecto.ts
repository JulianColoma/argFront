export class Proyecto {
    id?: number;
    nombre: string;
    descripcion:string;
    img: String;

    constructor(nombre: string, descripcion: string,img: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
    }
}
