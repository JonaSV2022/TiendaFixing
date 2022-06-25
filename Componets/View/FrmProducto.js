import React from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ScrollView} from 'react-native';
import { TblProducto } from '../../Model/TblProducto';
class FrmProducto extends React.Component {
	constructor(props) {
		super();
		this.props = props;
        this.ProductoBlock= new TblProducto();
		this.state = {
		
		}
        //Mi variable para cargar es Problock = Bloque
		this.CargarProductos = this.props.route.params.CargarProductos;
	}


	GuardarProductos = async()=>{
		await this.ProductoBlock.Save("idProducto");
		this.CargarProductos();
	}

	render() {
		return <ScrollView style={{padding:10}}>
				<Text style={styles.Title}>Datos del nuevo Proveedor</Text>
                {/* FORMULARIO */}

                <TextInput style={styles.InputStyle}
					placeholder="Nombre del Producto"
					onChangeText={val =>  this.ProductoBlock.nombreProducto = val} ></TextInput>
                <TextInput style={styles.InputStyle}
					placeholder="Marca"
					onChangeText={val =>  this.ProductoBlock.marca = val} ></TextInput> 
                <TextInput style={styles.InputStyle}
					placeholder="Categoría"
					onChangeText={val =>  this.ProductoBlock.categoria = val} ></TextInput>  

                {/* Opciones */}
                <Button title="Guardar" onPress={ async ()=>{
				await this.GuardarProductos();
				this.props.navigation.navigate("MenuPrincipalView");
				}}/>     
                <Button title="Cancelar"onPress={()=>{
					 this.props.navigation.navigate("ProductoView");
				}}/>   



			</ScrollView>	
	}    
}
export {FrmProducto};

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