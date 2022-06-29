import { StatusBar } from 'expo-status-bar';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { CompraView } from './CompraView';
import { ProveedorView } from './ProveedorView';
import { FrmProveedor } from './FrmProveedor';
import { FrmCompra } from './FrmCompra';
import { MenuPrincipalView } from './MenuPrincipalView';
import { DetalleCompraView } from './DetalleCompraView';
import { ProductoView } from './ProductoView';
import { FrmProducto } from './FrmProducto';
import { ProductoSeleccion } from './ProductoSeleccion';
import { FrmDetalle } from './FrmDetalle';

//Aquí cargan todas las vista de nuestro proyecto
//El primer stackview, es la vista principal del proyecto
const Stack = createNativeStackNavigator ();

export function PrincipalView() {
  return (
    
<Stack.Navigator screenOptions = {{ headerShown:false}}>
<Stack.Screen name = "MenuPrincipalView" component = {MenuPrincipalView}/>
<Stack.Screen name = "ProveedorView" component = {ProveedorView}/>
<Stack.Screen name = "CompraView" component = {CompraView}/>
<Stack.Screen name = "ProductoView" component = {ProductoView}/>
<Stack.Screen name = "FrmProveedor" component = {FrmProveedor}/>
<Stack.Screen name = "FrmCompra" component = {FrmCompra}/>
<Stack.Screen name = "FrmProducto" component = {FrmProducto}/>
<Stack.Screen name = "DetalleCompraView" component = {DetalleCompraView}/>
<Stack.Screen name = "ProductoSeleccion" component = {ProductoSeleccion}/>
<Stack.Screen name = "FrmDetalle" component = {FrmDetalle}/>
</Stack.Navigator>
  );
}