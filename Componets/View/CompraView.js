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

           {/* //Posicion del Boton para mandar añadir Datos// */}
           <Button title="AÑADIR" color={"#F2BF27"} onPress={() => {
             props.navigation.navigate('MainView');
          }}/> 
 
 
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