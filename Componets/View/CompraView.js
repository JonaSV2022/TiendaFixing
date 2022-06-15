import { StyleSheet, Text, View ,Button,TextInput,ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import {TblcompraProductos} from "../../Model/TblcompraProductos"
import {CardCompra} from "../Utility/CardCompra"

class CompraView extends React.Component{

constructor(props) {
    super();
    this.state ={
        isLoading: true,
        Dataset: []
    }
    this.Compra = new TblcompraProductos();
    this.CargarCompra();
}
CargarCompra= async (param= "") =>{
    const VariableCompra = await this.Compra.Get(param);
    this.setState({
        isLoading : false,
        Dataset:VariableCompra
    });
}

render (){
    return(<ScrollView>
      
        <Text style={{
		  fontSize: 26, fontWeight:600}}>Sección de Compras</Text>
             <TextInput style={{ padding: 10, margin: 10 }}
					placeholder="Buscar nombre"
					onChangeText={(val) => this.CargarCompra(val)} ></TextInput>
 
              {this.state.isLoading ?
              <ActivityIndicator/>:
              this.state.Dataset.map(vCompra=>
              <CardCompra data={vCompra}/>
              // vCompra es para cargar los datos en el card
              )}
        </ScrollView>)
}

}
export {CompraView}
const styles = StyleSheet.create({
	Title:{
		  color:"#212529",
		  fontSize: 26,
		fontWeight:600
	  }
	});