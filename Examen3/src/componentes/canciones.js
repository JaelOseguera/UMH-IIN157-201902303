import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
export default function Canciones(props){
    const {data} = props;
    const {id = 0, nombreCancion = nombreCancion, nombreArtista = nombreArtista, Genero = Genero} = data;

    return(
        <View style={estilos.contenedor}>
            <Text style= {estilos.titulo}>{"Nombre de Cancion:"}   <Text style= {estilos.descripcion}>{nombreCancion}</Text></Text>
            
            <Text style= {estilos.titulo}>{"Artista:"}   <Text style= {estilos.descripcion}>{nombreArtista}</Text></Text>
           
            <Text style= {estilos.titulo}>{"Genero:"}    <Text style= {estilos.descripcion}>{Genero}</Text></Text>
           
            </View>
    )
}

const estilos = StyleSheet.create({
    contenedor:{
        width:'95%',
        height:110,
        padding:10,
        marginLeft:8,
        marginRight:8,
        margin:8,
        marginBottom:8,
        marginTop:8,
        borderRadius:10,
        backgroundColor:'#C29696'
    },
    titulo:{
        fontSize:18,
        fontWeight:'500',
        color:'white'
    },
    descripcion: {
        fontSize: 20,
        fontWeight: '600',
        color:'#F5440C'
      },
       logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: 75,
        left:100
    }
})