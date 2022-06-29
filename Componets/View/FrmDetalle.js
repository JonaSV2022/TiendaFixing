import React from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ScrollView} from 'react-native';
import { TblDetalleCompra } from '../../Model/TblDetalleCompra';
import { TblProducto } from '../../Model/TblProducto';
class FrmDetalle extends React.Component {
	constructor(props) {
		super();
		this.props = props; //Se declaró este props.
        this.DetalleBlock= new TblDetalleCompra();
        // Mi variable para cargar o el constructor es: "DetalleBlock"
		this.state = {
			Productos:[]
		}
		this.CargarDetalles = this.props.route.params.CargarDetalles;
		this.GuardarProducto = this.props.route.params.GuardarProducto;
	}

	GuardarDetalles = async()=>{
		await this.DetalleBlock.Save("idDetalleCompra");
		this.CargarDetalles();
	}

//Este método lo que hace es traer el IDProducto.
NuevoProducto = async (idProducto) => {
	this.setState({
		idProducto:idProducto
	})
	this.DetalleBlock.idProducto = idProducto.toString();
	}


	render() {
		return <ScrollView style={{padding:10 }}>
				<Text style={styles.Title}>Datos de la nueva Compra</Text>
                {/* FORMULARIO */}

                <TextInput style={styles.InputStyle}
					placeholder="ID COMPRA PRODUCTO"
					onChangeText={val =>  this.DetalleBlock.idCompraProducto = val} ></TextInput> 
				
			{/* ESTE MUESTRA EL ID del producto seleccionado*/}
				<TextInput
				style={styles.InputStyle}
				placeholder="idProducto"
				value={this.state.idProducto}
				disabled
				/>
	
                {/* Opciones */}

			{/*Aquí se selecciona el producto para mandarlo a traer al formulario*/}
			<Button title="Seleccionar producto +" onPress={()=>
			this.props.navigation.navigate("ProductoSeleccion",{
			NuevoProducto:this.NuevoProducto,
				})
			}
			/>
		
			<Button title="Guardar" onPress={ async ()=>{
				await this.GuardarDetalles();
				this.props.navigation.navigate("MenuPrincipalView");
				}}/>     
                <Button title="Cancelar" onPress={()=>{
					 this.props.navigation.navigate("DetalleCompraView");
				}}/>     
		        
			</ScrollView>;
		
	}
    
}
export {FrmDetalle};

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