export const quienEsMayor = (nombre1:string, edad1:number, nombre2:string, edad2:number) => {
    if (edad1 > edad2) {
        return `${nombre1} es mayor que ${nombre2}`;
    }else if(edad1 < edad2){
        return `${nombre1} es menor que ${nombre2}`;
    }else return `${nombre1} y ${nombre2} tienen la misma edad`
}