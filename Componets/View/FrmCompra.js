import React from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ScrollView} from 'react-native';
import { TblcompraProductos } from '../../Model/TblcompraProductos';
class FrmCompra extends React.Component {
	constructor(props) {
		super();
		this.props = props;
        this.CompraBlock= new TblcompraProductos();
        // Mi variable para cargar es: "CompraBlock"
		this.state = {
			//ComBloques: []
		}
		this.CargarCompras = this.props.route.params.CargarCompras;

	}

	GuardarCompras = async()=>{
		await this.CompraBlock.Save("idCompraProducto");
		this.CargarCompras();
	}

	SelectProveedor = async (idProveedor,nombreProveedor) => {
		this.setState({
			idProveedor:idProveedor,
			nombreProveedor:nombreProveedor
		})
		this.CompraBlock.idProveedor=idProveedor.toString();
		this.CompraBlock.nombreProveedor=nombreProveedor.toString();
	}

	//Esto iguala la propiedad del idproducto de compra con el idproducto de la tabla producto
	//Es decir, verifica si ambos campos son iguales y luego los guarda.
	SelectProducto = async (idProducto,nombreProducto) => {
		this.setState({
			idProducto:idProducto,
			nombreProducto:nombreProducto
		})
		this.CompraBlock.idProducto = idProducto.toString();
		this.CompraBlock.nombreProducto = nombreProducto.toString();
		}

	render() {
		return <ScrollView style={{padding:10 }}>
				<Text style={styles.Title}>Datos de la nueva Compra</Text>
                {/* FORMULARIO */}

				<Text style={styles.Textos}>🚚Selección del Proveedor</Text>

				 {/* ESTOS INPUT LO QUE HACEN ES REFLEJAR EL VALOR DE LA OTRA VISTA */}
				<TextInput
				style={styles.InputStyle}
				placeholder="Selecciona un proveedor para ver su ID aquí"
				value={this.state.idProveedor}
				disabled
				/>

				<TextInput
				style={styles.InputStyle}
				placeholder="Selecciona un proveedor para ver su nombre aquí"
				value={this.state.nombreProveedor}
				disabled
				/>

		<Button color={"#05803a"} title="Seleccionar Proveedor ➡" onPress={()=>
			this.props.navigation.navigate("ProveedorSeleccion",{
				SelectProveedor:this.SelectProveedor,
				})
			}/>
			
			<Text style ={styles.Espacio}></Text>

			<Text style={styles.Textos}>📱Selección del Producto</Text>

			<TextInput
				style={styles.InputStyle}
				placeholder="Selecciona un Producto para ver su ID aquí"
				value={this.state.idProducto}
				disabled
				/>

             <TextInput
				style={styles.InputStyle}
				placeholder="Selecciona un Producto para ver su nombre aquí"
				value={this.state.nombreProducto}
				disabled
				/>
			
		<Button color={"#05803a"} title="Seleccionar Producto ➡" onPress={()=>
			this.props.navigation.navigate("ProductoSeleccion",{
				SelectProducto:this.SelectProducto,
				})
			}/>

		<Text style ={styles.Espacio}></Text>

		<Text style={styles.Textos}>📝Detalle de la compra</Text>

			<TextInput style={styles.InputStyle}
					placeholder="Cantidad del producto"
					onChangeText={val =>  this.CompraBlock.cantidadProducto = val} ></TextInput>     

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
				<Button color={"#05803a"} title="Guardar ✔" onPress={ async ()=>{
				await this.GuardarCompras();
				this.props.navigation.navigate("MenuPrincipalView");
				}}/>     
                <Button color={"#053F80"} title="Cancelar ✖" onPress={()=>{
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
		  fontWeight:600,
		  marginBottom: 40,
	  },
      InputStyle:{
        padding: 10, margin: 10, borderWidth:2, borderRadius:3
      },
	  Textos:{
		MarginTop: 100,
		fontSize: 20, 
		fontWeight:600,
	  },
	  Espacio:{
		marginTop: 25,
	  }
	});