import { StyleSheet, Text, View ,Button,TextInput,ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import {CardProveedorSeleccion} from "../Utility/CardProveedorSeleccion"
import { TblProveedor } from '../../Model/TblProveedor';

class ProveedorSeleccion extends React.Component{

constructor(props) {
    super();
    this.props = props;
    this.state ={
        isLoading: true,
        Dataset: [],
        ProveedorSeleccionado : this.props.route.params  ?? false
    }
    this.Proveedor = new TblProveedor();
    this.CargarProveedor();
    
}

// addproducto
SelectProveedor = async(idProveedor,nombreProveedor)=>{
    this.props.route.params.SelectProveedor(idProveedor,nombreProveedor)
    this.props.navigation.navigate("FrmCompra")
}

CargarProveedor= async (param= "") =>{
    const Prove = await this.Proveedor.Get(param);
    this.setState({
        isLoading : false,
        Dataset:Prove
    });
}

render (){
    return(<ScrollView>

         <Text style={{
		  fontSize: 26, fontWeight:600}}>Sección de Productos</Text>
             <TextInput style={{ padding: 10, margin: 10 }}
					placeholder="Buscar proveedor"
					onChangeText={(val) => this.CargarCompras(val)} ></TextInput>

            <Button title="<- Regresar" onPress={()=>{
					 this.props.navigation.navigate("FrmCompra");
				}}/>  

           {/* //Posicion del Boton para mandar añadir Datos// */}
              {this.state.isLoading ?
              <ActivityIndicator/>:
              this.state.Dataset.map(provee=>
              <CardProveedorSeleccion key={provee.idProveedor}
                data={provee}
                SelectProveedor={this.SelectProveedor}
                ProveedorSeleccionado={this.state.ProveedorSeleccionado}
                />
              )}

        </ScrollView>)
}

}
export {ProveedorSeleccion}