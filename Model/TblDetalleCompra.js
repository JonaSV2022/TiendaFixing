import { Entity } from "./Entity";
import {TblProducto} from "../Model/TblProducto.js"

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
        idDetalleCompra = "";
        idCompraProducto = "";
        idProducto  = "";


        TblProducto= {
            val: [],
            get : async ()=>{
                if(this.idProducto!=""){
                    const Contenidos = new TblProducto();
                    return await Contenidos.GetByProps("idProducto",this.idProducto);
                } else {
                    return this.TblProducto.val
                }
             
            },
            set: (newValue)=> {
                this.val = newValue;
            }
        }
    }
export {TblDetalleCompra}

