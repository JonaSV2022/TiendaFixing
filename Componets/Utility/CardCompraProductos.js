import { StyleSheet, Text, View , Button} from 'react-native';
import React from 'react';

const CardComponentPro = (props) =>{
    return (
        <View style={style.CardStyle}>
         
         <Text style ={style.Title}>CompraProductos</Text>
         <Text style ={style.Atribute}> idCompraProducto: {props.data.idCompraProducto}</Text>
         <Text style ={style.Atribute}> idProveedor: {props.data.idProveedor}</Text>
         <Text style ={style.Atribute}> cantidadProducto: {props.data. cantidadProducto}</Text>
         <Text style ={style.Atribute}> nombreProducto: {props.data.nombreProducto}</Text>
         <Text style ={style.Atribute}> NoFactura: {props.data.NoFactura}</Text>
         <Text style ={style.Atribute}> FechaCompra: {props.data.FechaCompra}</Text>
         <Text style ={style.Atribute}> iva: {props.data.iva}</Text>  
         <Text style ={style.Atribute}> total: {props.data.total}</Text>  
         <Text style ={style.Atribute}> Subtotal: {props.data.Subtotal}</Text>  
         <Text style ={style.Atribute}> estado: {props.data.estado}</Text>        
        </View>); 

    }

    export {CardComponentPro}
    const style = StyleSheet.create({
      CardStyle:{
          flex:4,
         // backgroundColor: '#0d47a1',
          backgroundColor: '#027373',
          width:"80%",
         // padding:20,
          //margin: 20 
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