import { Entity } from "./Entity";

class TblcompraProductos extends Entity{
    constructor (props)
        {
            super();
            for (const prop in props) {
            this[prop] = props[prop];
            }
        }
        ApiMethods = {
            Get:"TblcompraProductos",
        }

        idCompraProducto ="";
        idProveedor ="";
        idProducto = ""; //Agregado
        nombreProveedor = ""; //Agregado
        cantidadProducto = "";
        nombreProducto = "";
        NoFactura = ""
        FechaCompra = "";
        iva="";
        total= "";
        Subtotal = "";
        estado= "";

    // TblcompraProductos = {
    //     val: this,
    //      get: async()=>{
    //         if(this.idCompraProducto !=""){
    //            const ComBloques = new TblcompraProductos();
    //            return await ComBloques.GetByProps("idCompraProducto ", this.idCompraProducto );
    //         }else{
    //             return this.TblcompraProductos.val
    //         }
              
    //        },
    //        set:(newValue)=>{
    //            this.val = newValue;
    //        }
    //    }
       
}
export {TblcompraProductos}