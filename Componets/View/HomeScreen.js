import { StyleSheet,Text, View, Button } from 'react-native';
 
const HomeScreen = (props) =>{
    return (
        <View>
            <Text> Menu</Text>   
       <Button title="Ver Cursos" onPress={() => { props.navigation.navigate('CursosView2')}}/>
       <Button title="Ver Usuarios" onPress={() => { props.navigation.navigate('UsuarioView')}}/>

    </View>

   
	);
};
    export {HomeScreen}
    