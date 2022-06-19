import { Entity } from "./Entity";
class TblProveedor extends Entity{
    constructor (pros =  {})
        {
            super();
            for (const prop in pros) {
                this[prop] = pros[prop];
            }
        }
        ApiMethods = {
             Get:"TblProveedor",
         }
    idProveedor = "";
    nombreProveedor ="";
    apellidoProveedor ="";
    RUC= "";
    telefono="";
    nombreDeLaEmpresa ="";
    cedula ="";
    direccion = "";
    
 TblProveedor = {
     val: this,
      get: async()=>{
         if(this.idProveedor!=""){
            const Bloques = new TblProveedor();
            return await Bloques.GetByProps("idProveedor", this.idProveedor);
         }else{
             return this.TblProveedor.val
         }
           
        },
        set:(newValue)=>{
            this.val = newValue;
        }
    }
}
export {TblProveedor}