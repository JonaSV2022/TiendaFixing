import { StyleSheet, Text, View, Button } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {ProveedorView} from "../View/ProveedorView"
import { CompraView } from './CompraView';

const Tab = createBottomTabNavigator ();
const MainView =( Props) =>{
  return (

 <Tab.Navigator> 
  <Tab.Screen name = "Proveedor" component = {ProveedorView}/>
  <Tab.Screen name = "Compra" component = {CompraView} />
</Tab.Navigator>
  );

}

export {MainView}
const style = StyleSheet.create({
    Conteiner:{
        flex:1,
        backgroundColor: '#999',
        padding:20
      },Title:{
          flex:1,
          color:"#ffffff",
          fontSize: 26,
          justifyContent:"center"
      },OptionConteiner: {
          flex: 3
      }

    });