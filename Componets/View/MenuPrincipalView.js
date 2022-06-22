import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';

const MenuPrincipalView = (props) =>{
    return (
        <View>     
        <Text style={styles.Title}>TIENDA FIXING</Text>
                 {/* Botones de navegación */}
        <View  style={styles.Conteiner}>
        <Text style={styles.BienvenidaTexto}>¡Bienvenido al menú principal!</Text>
       <Button title="Menú de proveedores" color={"#14a839"} onPress={()=>{
                props.navigation.navigate('ProveedorView');}}/>  
       <Text style ={styles.Espacio}></Text>
       <Button title="Menú de Compra" color={"#45aaad"}onPress={()=>{
                props.navigation.navigate('CompraView');}}/> 
        <Text style ={styles.Espacio}></Text>
       <Button title="Salir" color={"#8a5353"}onPress={()=>{
                props.navigation.navigate('LoginView');}}/>   
        </View>
        </View>);

    }

    export {MenuPrincipalView}
    const styles = StyleSheet.create({
        Conteiner:{
            flex:1,
            backgroundColor: "#f2f2f2",
            padding:20,
        },Title:{
            color:"#000",
            marginTop: 50,
            marginBottom: 50,
            fontSize: 55,
            justifyContent:'center',
            marginLeft:50,
            fontWeight: "bold",
            //zona del efecto de sombra
            textShadowColor: '#034AA6',
            textShadowOffset: { width: 2, height: 2 }, 
            textShadowRadius:3     
        },BienvenidaTexto:{
            marginLeft:97,
            marginBottom:30,
            justifyContent:'center',
            fontWeight: "bold",
            fontSize: 20,
        },Espacio:{
            marginTop: 45,
        }
      });