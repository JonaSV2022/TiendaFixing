import { StyleSheet, Text, View ,Button,TextInput,ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import {TblDetalleCompra} from '../../Model/TblDetalleCompra'
import {CardDetalleCompra} from '../Utility/CardDetalleCompra'

class DetalleCompraView extends React.Component{

constructor(props) {
    super();
    this.state ={
        isLoading: true,
        Dataset: []
    }
    this.DetalleCompra = new TblDetalleCompra();
    this.CargarDetalles();
}
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
		  fontSize: 26, fontWeight:600}}>Sección De Deatlles-Compras</Text>
 
              {this.state.isLoading ?
              <ActivityIndicator/>:
              this.state.Dataset.map(Deta =>
              <CardDetalleCompra data={Deta}/>              
              )}     
        </ScrollView>)
}

}
export {DetalleCompraView}
const styles = StyleSheet.create({
	Title:{
		  color:"#212529",
		  fontSize: 26,
		fontWeight:600
	  }
	});