import { StyleSheet, Text, View ,Button} from 'react-native';

const CardModelo = (props) =>{
    return (
        <View style={style.CardStyle}>
         
         <Text style ={style.Title}> MODELOS</Text>
         <Text style ={style.Atribute}> Especificaciones:{props.data.especificaciones}</Text>
         <Text style ={style.Atribute}> Descripcion:{props.data.descripcion}</Text>   
        </View>); 

    }

    export {CardModelo}
    const style = StyleSheet.create({
      CardStyle:{
          flex:4,
          backgroundColor: '#0d47a1',
          width:"80%",
          padding:20,
          margin: 20 
        },Title:{
            color:"#ffffff",
            fontSize: 26,
            fontWeight:600
        },Atribute: {
            color: "#ffffff",
            fontSize:17
        }

      });