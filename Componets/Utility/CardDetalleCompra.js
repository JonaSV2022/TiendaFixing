import { StyleSheet, Text, View , Button} from 'react-native';
import React from 'react';

const CardDetalleCompra = (props) =>{
    return (
        <View style={style.CardStyle}>
         
         <Text style ={style.Title}>Detalles-Compra</Text>
         <Text style ={style.Atribute}> idDetalleCompra  : {props.data. idDetalleCompra }</Text>
         <Text style ={style.Atribute}> idCompraProducto: {props.data. idCompraProducto}</Text>
         <Text style ={style.Atribute}> idProductos: {props.data.idProductos}</Text>
       
        </View>); 

    }
    export {CardDetalleCompra}
    
const style = StyleSheet.create({
    CardStyle:{
        flex:4,
        backgroundColor: '#1fafbf',
        width:"80%",
        padding:20,
        margin: 10
      },Title:{
          color:"#212529",
          fontSize: 26,
        fontWeight:600
    }
});