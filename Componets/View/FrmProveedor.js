import React from 'react';
import { StyleSheet, Text, View,Button, TextInput ,ScrollView} from 'react-native';
import { TblProveedor } from '../../Model/TblProveedor';
class FrmProveedor extends React.Component {
	constructor(props) {
		super();
		this.props = props;
        this.Problock= new TblProveedor();
        //Mi variable para cargar es Problock = Bloque
	}
	render() {
		return <View style={{padding:10 }}>
				<Text style={styles.Title}>Nuevo Proveedor</Text>
                {/* FORMULARIO */}

                <TextInput style={styles.InputStyle}
					placeholder="Nombre Proveedor"
					onChangeText={val =>  this.Problock.nombreProveedor = val} ></TextInput> 
                 
                <TextInput style={styles.InputStyle}
					placeholder="Ruc"
					onChangeText={val =>  this.Problock.RUC = val} ></TextInput>  

                <TextInput style={styles.InputStyle}
					placeholder="Nombre De La Empresa"
					onChangeText={val =>  this.Problock.nombreDeLaEmpresa = val} ></TextInput>  

                <TextInput style={styles.InputStyle}
					placeholder="Cedula"
					onChangeText={val =>  this.Problock.cedula = val} ></TextInput>  

                {/* Opciones */}
                <Button title="Guardar" onPress={ async ()=>{
                await this.props.route.params.GuardarProveedor(this.Problock);
				}}/>     
                <Button title="Cancelar" onPress={()=>{
				}}/>             
			</View>;
		
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