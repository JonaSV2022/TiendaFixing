import React from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ScrollView} from 'react-native';
import { TblcompraProductos } from '../../Model/TblcompraProductos';
class FrmCompra extends React.Component {
	constructor(props) {
		super();
		this.props = props;
        this.CompraBlock= new TblcompraProductos();
        // Mi variable para cargar es: "CompraBlock"
	}
	render() {
		return <ScrollView style={{padding:10 }}>
				<Text style={styles.Title}>Datos de la nueva Compra</Text>
                {/* FORMULARIO */}

                <TextInput style={styles.InputStyle}
					placeholder="ID Proveedor"
					onChangeText={val =>  this.CompraBlock.idProveedor = val} ></TextInput> 

                <TextInput style={styles.InputStyle}
					placeholder="Cantidad del producto"
					onChangeText={val =>  this.CompraBlock.cantidadProducto = val} ></TextInput>     

                 <TextInput style={styles.InputStyle}
					placeholder="Nombre del producto"
					onChangeText={val =>  this.CompraBlock.nombreProducto = val} ></TextInput> 
                 
                 <TextInput style={styles.InputStyle}
					placeholder="Número de factura"
					onChangeText={val =>  this.CompraBlock.NoFactura = val} ></TextInput> 

                <TextInput style={styles.InputStyle}
					placeholder="Fecha de la compra"
					onChangeText={val =>  this.CompraBlock.FechaCompra = val} ></TextInput> 

                <TextInput style={styles.InputStyle}
					placeholder="IVA"
					onChangeText={val =>  this.CompraBlock.iva = val} ></TextInput> 

                <TextInput style={styles.InputStyle}
					placeholder="Total"
					onChangeText={val =>  this.CompraBlock.total = val} ></TextInput> 
                 

                {/* Opciones */}
                <Button title="Guardar" onPress={ async ()=>{               
                    //Añadir Guardar aquí***** 
				}}/>     
                <Button title="Cancelar" onPress={()=>{
					 this.props.navigation.navigate("CompraView");
				}}/>             
			</ScrollView>;
		
	}
    
}
export {FrmCompra};

const styles = StyleSheet.create({
	Title:{
		  color:"#212529",
		  fontSize: 26,
		fontWeight:600
	  },
      InputStyle:{
        padding: 10, margin: 10, borderWidth:2, borderRadius:3
      }
	});