import { StyleSheet, Text, View , Button} from 'react-native';
import React from 'react';

const CardCompra = (props) =>{
    return (
        <View style={style.CardStyle}>
         
         <Text style ={style.Title}>π²Detalles de la Compra</Text>
         <Text style ={style.Atribute}> π Codigo del Proveedor: {props.data.idProveedor}</Text>
         <Text style ={style.Atribute}> π Codigo del producto: {props.data.idProducto}</Text>
         <Text style ={style.Atribute}> πββοΈ Nombre del proveedor: {props.data.nombreProveedor}</Text>
         <Text style ={style.Atribute}> πΌ Cantidad del producto: {props.data.cantidadProducto}</Text>
         <Text style ={style.Atribute}> π± Nombre del producto: {props.data.nombreProducto}</Text>
         <Text style ={style.Atribute}> π Numero de la Factura: {props.data.NoFactura}</Text>
         <Text style ={style.Atribute}> π Fecha de la compra: {props.data.FechaCompra}</Text>
         <Text style ={style.Atribute}> π IVA : {props.data.iva}</Text>
         <Text style ={style.Atribute}> π Total: {props.data.total}</Text>
         {/* <Text style ={style.Atribute}> Sub Total: {props.data.Subtotal}</Text>    */}
         {/* <Text style ={style.Atribute}> Estado: {props.data.estado}</Text>            */}
        </View>); 

    }

    export {CardCompra}
    const style = StyleSheet.create({
      CardStyle:{
          flex:4,
          backgroundColor: '#06678a',
          width:"90%",
          padding: 20, margin: 20, borderWidth:4, borderRadius:8,borderColor: "#0d0d0d"
        },Title:{
            color:"#0d0d0d",
            fontSize: 26,
            fontWeight:700      
        },Atribute: {
            color: "#ffffff",
            fontSize:17,
            fontWeight:'bold',
        }
      });