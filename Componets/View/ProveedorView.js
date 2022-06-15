import { StyleSheet, Text, View ,Button,TextInput,ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import {TblProveedor} from '../../Model/TblProveedor'
import {CardComponentPro} from '../Utility/CardComponentPro'

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

render (){
    return(<ScrollView>
      
        <Text style={{
		  fontSize: 26, fontWeight:600}}>Sección de Proveedores</Text>
             <TextInput style={{ padding: 10, margin: 10 }}
					placeholder="Buscar nombre de proveedor"
					onChangeText={(val) => this.CargarProveedor(val)} ></TextInput>
 
              {this.state.isLoading ?
              <ActivityIndicator/>:
              this.state.Dataset.map(provee =>
              <CardComponentPro data={provee}/>
              
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