class TblProveedor {
    constructor (props)
        {
            //super();
            for (const prop in props) {
            this[prop] = props[prop];
            }
        }
        ApiMethods = {
            Get:"TblProveedor",
        }
    idProveedor = "1";
    nombreProveedor ="Alejandro";
    apellidoProveedor ="Castillo";
    RUC= "001160597006V-3-J041000023095-9";
    telefono="56788976";
    nombreDeLaEmpresa ="MundoMovil";
    cedula ="408-120397-2345N";
    direccion = "Monseñor Lescano,1 cuadra al lago,1 cuadra abajo,media cuadra al lago";
   

     Get = async (param)=>{
        const Prove = await import("../APIDatabase/TblProveedor.json");
         const proveeFilt = Prove.default.filter(c => 
             c.nombreProveedor.toUpperCase().includes(param.toUpperCase()))
         return proveeFilt.map(c => (new TblProveedor(c)));
     }

       

}
export {TblProveedor}