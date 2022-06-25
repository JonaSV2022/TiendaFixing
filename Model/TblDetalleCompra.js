import { Entity } from "./Entity";

class TblDetalleCompra extends Entity{
    constructor (props)
        {
            super();
            for (const prop in props) {
            this[prop] = props[prop];
            }
        }
        ApiMethods = {
            Get:"TblDetalleCompra",
        }
        idDetalleCompra = "1";
        idCompraProducto = "1";
        idProductos  = "1";
}
export {TblDetalleCompra}

