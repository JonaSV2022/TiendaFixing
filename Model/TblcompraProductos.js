class TblcompraProductos{
    constructor (props)
        {
            //super();
            for (const prop in props) {
            this[prop] = props[prop];
            }
        }
        ApiMethods = {
            Get:"TblcompraProductos",
        }

        idCompraProducto ="";
        idProveedor ="";
        cantidadProducto = "";
        nombreProducto = "";
        NoFactura = ""
        FechaCompra = "";
        iva="";
        total= "";
        Subtotal = "";
        estado= "";

        
     Get = async (param)=>{
        const Compra = await import("../APIDatabase/TblcompraProductos.json");
         const compraFilt = Compra.default.filter(c => 
             c.nombreProducto.toUpperCase().includes(param.toUpperCase()))
         return compraFilt.map(c => (new TblcompraProductos(c)));
     }
       
}
export {TblcompraProductos}