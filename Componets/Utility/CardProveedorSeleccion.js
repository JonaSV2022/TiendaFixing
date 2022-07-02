import { StyleSheet, Text, View , Button} from 'react-native';
import React from 'react';


const CardProveedorSeleccion = (props) =>{
    return (
        <View style={style.CardStyle}>
         
         <Text style ={style.Title}>🚚Proveedor</Text>
         <Text style ={style.Atribute}> 📄 Código del proveedor: {props.data.idProveedor}</Text>
         <Text style ={style.Atribute}> 🙎‍♂️ Nombre del proveedor: {props.data.nombreProveedor}</Text>
         <Text style ={style.Atribute}> 🏛 Nombre de la empresa: {props.data.nombreDeLaEmpresa}</Text>
         <Text style ={style.Atribute}> 📱 Teléfono: {props.data.telefono}</Text>
         <Text style ={style.Atribute}> 📄 Cédula: {props.data.cedula}</Text>
         <Button color={"#068a64"} title="SELECCIONAR ESTE PROVEEDOR" onPress={() => { 
            props.ProveedorSeleccionado ? props.SelectProveedor(props.data.idProveedor,props.data.nombreProveedor):false
        }}/>
    
        </View>); 

    }
    export {CardProveedorSeleccion}
    
const style = StyleSheet.create({
    CardStyle:{
        flex:4,
        backgroundColor: "#06678a",
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