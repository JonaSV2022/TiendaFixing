import { StatusBar } from 'expo-status-bar';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { CompraView } from './CompraView';
import { ProveedorView } from './ProveedorView';
import { FrmProveedor } from './FrmProveedor';

//Aquí cargan todas las vista de nuestro proyecto
//El primer stackview, es la vista principal del proyecto
const Stack = createNativeStackNavigator ();

export function PrincipalView() {
  return (
    
<Stack.Navigator screenOptions = {{ headerShown:false}}>
<Stack.Screen name = "ProveedorView" component = {ProveedorView}/>
<Stack.Screen name = "CompraView" component = {CompraView}/>
<Stack.Screen name = "FrmProveedor" component = {FrmProveedor}/>
</Stack.Navigator>
  );
}