import {Entity} from './Entity'

class TblModelo extends Entity{
    constructor(modelo =  {
        descripcion : "undefined",
        especificasiones : "",
       
        
    }){
        super()
        for (const prop in modelo) {
            this[prop] = modelo[prop];
        }
    }
    ApiMethods = {
        Get:"TblModelo",
    }
      descripcion = "Undefined";
      especificasiones  = 
      "Marca Celebrat-Modelo V5-Capacidad de la batería:60 mAh- Tiempo de carga: 2h Peso: 50.5G";
       
     
}
export {TblModelo}