import { StyleSheet, Text, View, Button } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {ProveedorView} from "../View/ProveedorView"
import { CompraView } from './CompraView';
import {PrincipalView} from "../View/PrincipalView";
import { ProductoView } from './ProductoView';

const Tab = createBottomTabNavigator ();
const MainView =( Props) =>{
  return (

 <Tab.Navigator> 
  {/* El "PrincipalView" es la primera pantalla que cargará el proyecto 
    El primer Tab.Screen es la primera pantalla que carga el proyecto
    El segundo, es los botones de abajos.
  */}

  <Tab.Screen name = "Menú Principal" component = {PrincipalView} />
  <Tab.Screen name = "Menú de Proveedores" component = {ProveedorView} />
  <Tab.Screen name = "Menú de Productos" component = {ProductoView} />
  <Tab.Screen name = "Menú de Compra" component = {CompraView} />
</Tab.Navigator>
  );
}

export {MainView}