
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

        idCompraProducto ="1";
        idProveedor ="1";
        cantidadProducto = "18";
        nombreProducto = "Auriculares Celebrat";
        NoFactura = "12"
        FechaCompra = "25/09/2022";
        iva="2";
        total= "1620";
        Subtotal = "1620";
        estado= "1";

        
     Get = async (param)=>{
        const Compra = await import("../APIDatabase/TblcompraProductos.json");
         const compraFilt = Compra.default.filter(c => 
             c.nombreProducto.toUpperCase().includes(param.toUpperCase()))
         return compraFilt.map(c => (new TblcompraProductos(c)));
     }
       

}
export {TblcompraProductos}