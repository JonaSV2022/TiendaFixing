import { StyleSheet, Text, View ,Button,TextInput,ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';

import {CardCompraSeleccion } from "../Utility/CardCompraSeleccion"
import { TblcompraProductos } from '../../Model/TblcompraProductos';

class CompraSeleccion extends React.Component{

constructor(props) {
    super();
    this.props = props;
    this.state ={
        isLoading: true,
        Dataset: [],
        CompraSeleccionado : this.props.route.params  ?? false
    }
    this.Compra = new TblcompraProductos();
    this.CargarCompras();
    
}

// addproducto
CompraNueva = async(idCompraProducto)=>{
    this.props.route.params.CompraNueva(idCompraProducto)
    this.props.navigation.navigate("FrmDetalle")
}

CargarCompras= async (param= "") =>{
    const VariableCompra = await this.Compra.Get(param);
    this.setState({
        isLoading : false,
        Dataset:VariableCompra
    });
}

render (){
    return(<ScrollView>

         <Text style={{
		  fontSize: 26, fontWeight:600}}>Sección de Productos</Text>
             <TextInput style={{ padding: 10, margin: 10 }}
					placeholder="Buscar el Id de la Compra"
					onChangeText={(val) => this.CargarCompras(val)} ></TextInput>

            <Button title="<- Regresar" onPress={()=>{
					 this.props.navigation.navigate("FrmDetalle");
				}}/>  

           {/* //Posicion del Boton para mandar añadir Datos// */}
              {this.state.isLoading ?
              <ActivityIndicator/>:
              this.state.Dataset.map(gCompra=>
              <CardCompraSeleccion key={gCompra.idCompraProducto}
                data={gCompra}
                CompraNueva={this.CompraNueva}
                CompraSeleccionado={this.state.CompraSeleccionado}
                />
              )}

        </ScrollView>)
}

}
export {CompraSeleccion}