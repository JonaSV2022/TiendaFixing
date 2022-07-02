import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';

const LoginView = (props) =>{
    return (
        <View style={styles.Conteiner}>     
        <Text style={styles.Title}>TIENDA FIXING</Text>
         <View style={styles.ContenedorDelBoton}>
         <TextInput style={styles.CajasDeTexto}
					placeholder="📄Ingrese su usuario"></TextInput>

            {/* Modificar estilo del botón de acceso */}
        <Button title="Acceder ➡" Class="Boton"color={"#05803a"} onPress={() => {
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
            marginTop: 150,
            fontSize: 60,
            justifyContent:'center',
            marginLeft:45,
            fontWeight: "bold",
            //zona del efecto de sombra
            textShadowColor: '#034AA6',
            textShadowOffset: { width: 2, height: 2 }, 
            textShadowRadius:3     
        },
        ContenedorDelBoton:{
            top: 50,
            flex: 21,
        },
        CajasDeTexto:{
            padding: 20, 
            margin: 10, 
            marginLeft: 1,
            width:550,
            fontSize:15,
            borderWidth: 1.5,
            borderColor: "#7D7D7D",
            marginBottom: 60
        }
      });