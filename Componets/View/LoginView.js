import reactDom from 'react-dom';
import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';


const LoginView = (props) =>{
    return (
        <View style={styles.Conteiner}>     
        <Text style={styles.Title}>TIENDA FIXING</Text>
         <View style={styles.ContenedorDelBoton}>
         <TextInput style={styles.CajasDeTexto}
					placeholder="Ingrese el usuario"></TextInput>
            {/* Modificar estilo del botón de acceso */}
        <Button title="Acceder" color={"#8a5353"} onPress={() => {
             props.navigation.navigate('MainView');
          }}/>  
             </View> 
        </View>);

    }

    export {LoginView}
    const styles = StyleSheet.create({
        Conteiner:{
          flex:1,
          backgroundColor: "#f2f2f2",
          padding:20,

        },Title:{
            color:"#000",
            marginTop: 300,
            fontSize: 55,
            justifyContent:'center',
            marginLeft:45,
            fontWeight: "bold"
        },
        ContenedorDelBoton:{
            top: 50,
            flex: 21,
        },
        CajasDeTexto:{
            padding: 20, 
            margin: 10, 
            marginLeft: 1,
            width:480,
            fontSize:15,
            borderWidth: 1.5,
            borderColor: "#7D7D7D",
            marginBottom: 60
        }
      });