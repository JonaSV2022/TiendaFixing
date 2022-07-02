import { StyleSheet, Text, View ,Button,TextInput,ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import {TblProducto} from "../../Model/TblProducto"
import {CardProductoSeleccion } from "../Utility/CardProductoSeleccion"

class ProductoSeleccion extends React.Component{

constructor(props) {
    super();
    this.props = props;
    this.state ={
        isLoading: true,
        Dataset: [],
        ProductoSeleccionado : this.props.route.params  ?? false
    }
    this.Producto = new TblProducto();
    this.CargarProductos();
    
}

// addproducto
SelectProducto = async(idProducto,nombreProducto)=>{
    this.props.route.params.SelectProducto(idProducto,nombreProducto)
    this.props.navigation.navigate("FrmCompra")
}

CargarProductos= async (param= "") =>{
    const VariableProducto = await this.Producto.Get(param);
    this.setState({
        isLoading : false,
        Dataset:VariableProducto
    });
}

render (){
    return(<ScrollView>

         <Text style={{
		  fontSize: 26, fontWeight:600}}>Sección de Productos</Text>
             <TextInput style={{ padding: 10, margin: 10 }}
					placeholder="Buscar Nombre del producto"
					onChangeText={(val) => this.CargarProductos(val)} ></TextInput>

            <Button title="<- Regresar" onPress={()=>{
					 this.props.navigation.navigate("FrmDetalle");
				}}/>  

           {/* //Posicion del Boton para mandar añadir Datos// */}
              {this.state.isLoading ?
              <ActivityIndicator/>:
              this.state.Dataset.map(vProducto=>
              <CardProductoSeleccion key={vProducto.idProducto}
                data={vProducto}
                SelectProducto={this.SelectProducto}
                ProductoSeleccionado={this.state.ProductoSeleccionado}
                />
              )}

        </ScrollView>)
}

}
export {ProductoSeleccion}
