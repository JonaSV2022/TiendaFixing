import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';


const LoginView = (props) =>{
    return (
        <View style={styles.Conteiner}>     
        <Text style={styles.Title}>TIENDA FIXING </Text>
         <View style={styles.OptionConteiner}>
         <TextInput style={styles.CajasDeTexto}
					placeholder="Ingrese el usuario"></TextInput>
         <Button title="Acceder" onPress={() => {
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
            fontSize: 70,
            flex:1,
            justifyContent:'center',
            marginLeft:50
        },
        OptionConteiner:{
            flex: 3,
        },
        CajasDeTexto:{
            padding: 20, 
            margin: 10, 
            marginLeft: 1,
            width:480,
            fontSize:15,
            borderWidth: 1.5,
            borderColor: "#7D7D7D"
        }
      });