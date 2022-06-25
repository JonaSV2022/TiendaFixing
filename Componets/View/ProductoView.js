import { StyleSheet, Text, View ,Button,TextInput,ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import {TblProducto} from "../../Model/TblProducto"
import {CardProducto} from "../Utility/CardProducto"

class ProductoView extends React.Component{

constructor(props) {
    super();
    this.state ={
        isLoading: true,
        Dataset: []
    }
    this.Producto = new TblProducto();
    this.CargarProductos();
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

           {/* //Posicion del Boton para mandar añadir Datos// */}
           <Button title="Añadir Nuevo producto" color={"#45aaad"} onPress={() => {
                  	 this.props.navigation.navigate("FrmProducto",{
                        CargarProductos:this.CargarProductos});
                      }}/> 
 
              {this.state.isLoading ?
              <ActivityIndicator/>:
              this.state.Dataset.map(vProducto=>
              <CardProducto data={vProducto}/>
              // vCompra es para cargar los datos en el card
              )}

        </ScrollView>)
}

}
export {ProductoView}
