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
    this.CargarCompras();
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
		  fontSize: 26, fontWeight:600}}>Sección de Compras</Text>
             <TextInput style={{ padding: 10, margin: 10 }}
					placeholder="Buscar Nombre de La Compra"
					onChangeText={(val) => this.CargarCompras(val)} ></TextInput>

           {/* //Posicion del Boton para mandar añadir Datos// */}
           <Button title="Añadir Nueva Compra" color={"#45aaad"} onPress={() => {
                  	 this.props.navigation.navigate("FrmCompra",{
                        CargarCompras:this.CargarCompras});
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
		  color:"#O4738C",
		  fontSize: 26,
		fontWeight:600
	  }
	});