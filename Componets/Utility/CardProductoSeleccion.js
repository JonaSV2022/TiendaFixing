import { StyleSheet, Text, View , Button} from 'react-native';
import React from 'react';


const CardProductoSeleccion = (props) =>{
    return (
        <View style={style.CardStyle}>
         
         <Text style ={style.Title}>Producto</Text>
         <Text style ={style.Atribute}> idProducto: {props.data.idProducto}</Text>
         <Text style ={style.Atribute}> Nombre Producto: {props.data.nombreProducto}</Text> 
         <Button title="SELECCIONAR ESTE PRODUCTO" onPress={() => { 
            props.ProductoSeleccionado ? props.NuevoProducto(props.data.idProducto):false
            // props.SeleccionarProducto();
        }}/>
    
        </View>); 

    }
    export {CardProductoSeleccion}
    
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