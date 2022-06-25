import { Entity } from "./Entity";
class TblProducto extends Entity{
    constructor (product =  {})
        {
            super();
            for (const prop in product) {
                this[prop] = product[prop];
            }
        }
        ApiMethods = {
             Get:"TblProducto",
         }
    idProducto = "";
    nombreProducto ="";
    marca ="";
    categoria= "";
}
export {TblProducto}