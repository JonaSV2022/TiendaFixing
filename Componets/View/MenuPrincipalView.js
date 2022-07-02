import { StyleSheet, Text, View ,Button,ScrollView, TextInput} from 'react-native';

const MenuPrincipalView = (props) =>{
    return (
        <ScrollView>     
        <Text style={styles.Title}>TIENDA FIXING</Text>
                 {/* Botones de navegación */}
        <View style={styles.Conteiner}>
        <Text style={styles.BienvenidaTexto}>¡Bienvenido al menú principal!</Text>
       <Button title="🚚Menú de proveedores" color={"#05803a"} onPress={()=>{
                props.navigation.navigate('ProveedorView');}}/>  
       <Text style ={styles.Espacio}></Text>
       <Button title="💲Menú de Compra" color={"#05803a"}onPress={()=>{
                props.navigation.navigate('CompraView');}}/> 
        <Text style ={styles.Espacio}></Text>
       <Button title="📲Menú de Productos" color={"#05803a"}onPress={()=>{
                props.navigation.navigate('ProductoView');}}/> 
        <Text style ={styles.Espacio}></Text>
       <Button title="🏃Salir" color={"#053f80"}onPress={()=>{
                props.navigation.navigate('LoginView');}}/>   
        </View>
        </ScrollView>);

    }

    export {MenuPrincipalView}
    const styles = StyleSheet.create({
        Conteiner:{
            flex:1,  
            padding:20,
        },Title:{
            color:"#000",
            marginTop: 50,
            marginBottom: 50,
            fontSize: 55,
            justifyContent:'center',
            marginLeft:90,
            fontWeight: "bold",
            //zona del efecto de sombra
            textShadowColor: '#034AA6',
            textShadowOffset: { width: 2, height: 2 }, 
            textShadowRadius:3     
        },BienvenidaTexto:{
            marginLeft:120,
            marginBottom:30,
            justifyContent:'center',
            fontWeight: "bold",
            fontSize: 20,
        },Espacio:{
            marginTop: 45,
        }
      });