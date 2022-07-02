import { StyleSheet, Text, View ,Button,TextInput,ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import {TblProveedor} from '../../Model/TblProveedor'
import {CardComponentPro} from '../Utility/CardComponentPro'
import { CardDetalleCompra } from '../Utility/CardDetalleCompra';

class ProveedorView extends React.Component{

constructor(props) {
    super();
    this.state ={
        isLoading: true,
        Dataset: []
    }
    this.Proveedor = new TblProveedor();
    this.CargarProveedor();
}
CargarProveedor= async (param= "") =>{
    const Prove = await this.Proveedor.Get(param);
    this.setState({
        isLoading : false,
        Dataset:Prove
    });
}
//Cargar los detalles
CargarDetalles= async (param= "") =>{
    const Detalle = await this.DetalleCompra.Get(param);
    this.setState({
        isLoading : false,
        Dataset:Detalle
    });
}

render (){
    return(<ScrollView>

        <Text style={{
		  fontSize: 26, fontWeight:600}}>Sección de Proveedores</Text>
             <TextInput style={{ padding: 10, margin: 10 }}
					placeholder="🔍Buscar proveedor"
					onChangeText={(val) => this.CargarProveedor(val)} ></TextInput>

                <Button color={"#053F80"} title="⬅ Regresar" onPress={()=>{
					 this.props.navigation.navigate("MenuPrincipalView");
				}}/>  
                      
                    {/* //Posicion del Boton para mandar añadir Datos// */}
                     <Button title="Añadir nuevo Proveedor +" color={"#05803a"} onPress={() => {
                  	 this.props.navigation.navigate("FrmProveedor",{
                        CargarProveedor:this.CargarProveedor});
                      }}/> 
 
              {this.state.isLoading ?
              <ActivityIndicator/>:
              this.state.Dataset.map(provee =>
              <CardComponentPro data={provee}
              CargarDetalles={this.CargarDetalles}/> 
                       
              )}     
        </ScrollView>)
}

}
export {ProveedorView}
const styles = StyleSheet.create({
	Title:{
		  color:"#212529",
		  fontSize: 26,
		fontWeight:600
	  }
	});