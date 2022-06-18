import React from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ScrollView} from 'react-native';
import { TblProveedor } from '../../Model/TblProveedor';
class FrmProveedor extends React.Component {
	constructor(props) {
		super();
		this.props = props;
        this.Problock= new TblProveedor();
		this.state = {
			Bloques: []
		}
        //Mi variable para cargar es Problock = Bloque
		this.CargarProveedor = this.props.route.params.CargarProveedor;
	}


	GuardarProveedor = async()=>{
		await this.Problock.Save("IdProveedor");
		this.CargarProveedor();
	}

	render() {
		return <ScrollView style={{padding:10}}>
				<Text style={styles.Title}>Datos del nuevo Proveedor</Text>
                {/* FORMULARIO */}

                <TextInput style={styles.InputStyle}
					placeholder="Nombre del Proveedor"
					onChangeText={val =>  this.Problock.nombreProveedor = val} ></TextInput>

				<TextInput style={styles.InputStyle}
					placeholder="Apellido del Proveedor"
					onChangeText={val =>  this.Problock.apellidoProveedor = val} ></TextInput>  
                 
                <TextInput style={styles.InputStyle}
					placeholder="RUC"
					onChangeText={val =>  this.Problock.RUC = val} ></TextInput>  

				<TextInput style={styles.InputStyle}
					placeholder="Télefono de contacto"
					onChangeText={val =>  this.Problock.telefono = val} ></TextInput>  

                <TextInput style={styles.InputStyle}
					placeholder="Nombre de la empresa"
					onChangeText={val =>  this.Problock.nombreDeLaEmpresa = val} ></TextInput>  

                <TextInput style={styles.InputStyle}
					placeholder="Cédula"
					onChangeText={val =>  this.Problock.cedula = val} ></TextInput> 

				<TextInput style={styles.InputStyle}
					placeholder="Dirección"
					onChangeText={val =>  this.Problock.direccion = val} ></TextInput>   

                {/* Opciones */}
                <Button title="Guardar" onPress={ async ()=>{
                //await this.props.route.params.GuardarProveedor(this.Problock);
				await this.GuardarProveedor();
				this.props.navigation.navigate("ProveedorView");
				}}/>     
                <Button title="Cancelar" onPress={()=>{
					 this.props.navigation.navigate("ProveedorView");
				}}/>             
			</ScrollView>	
	}    
}
export {FrmProveedor};

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