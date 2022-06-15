import { StatusBar } from 'expo-status-bar';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native';


//AQUI EMPIEZA LO NUEVO
// import { ProveedorView } from './Componets/View/ProveedorView';
// export default function App() {
//   return (
//     <View style={styles.container}>
// <ProveedorView> </ProveedorView>
// <Text> Hola Estoy AQUI</Text>
//  <StatusBar style='auto'/>

//     </View>
//    );
// }

//AQUI EMPIEZA LO DEL LOGIN

import {LoginView} from './Componets/View/LoginView';
import {MainView} from './Componets/View/MainView';

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    
<NavigationContainer >
  
<Stack.Navigator screenOptions = {{ headerShown:false}}>

<Stack.Screen name = "LoginView" component = {LoginView} 
 options={{Title: "WELCOME"}}/>

<Stack.Screen name = "MainView" component = {MainView} />

</Stack.Navigator>

</NavigationContainer>
 
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },title:{
    height:50,
    fontSize: 26,
    fontWeight:800
}
});
