import { StyleSheet, Text, View , Button} from 'react-native';
import React from 'react';


const CardCompraSeleccion = (props) =>{
    return (
        <View style={style.CardStyle}>
         
         <Text style ={style.Title}>Compras</Text>
         <Text style ={style.Atribute}> idCompraProducto: {props.data.idCompraProducto}</Text>
         <Text style ={style.Atribute}> NoFactura: {props.data.NoFactura}</Text> 
        

        <Button title="SELECCIONAR ESTA COMPRA" onPress={() => { 
            props.CompraSeleccionado ? props.CompraNueva(props.data.idCompraProducto):false
            
        }}/>
    
        </View>); 

    }
    export {CardCompraSeleccion}
    
const style = StyleSheet.create({
    CardStyle:{
        flex:4,
        backgroundColor: "#8a5353",
        width:"80%",
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