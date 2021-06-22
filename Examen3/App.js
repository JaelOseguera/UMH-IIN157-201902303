import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  Image,
  Alert
} from 'react-native';
import Canciones from './src/componentes/canciones';


function App(){
  const [nombreCancion, setNombreCancion] = useState("");
  const [nombreArtista, setNombreArtista] = useState("");
  const [Genero, setGenero] = useState("");

  const [listacancion, setCancion] = useState( [
  {id:0, nombreCancion : "", nombreArtista : "", Genero : ""}

   ]);

  const [nuevaCancion, addCancion] = useState(false);

  useEffect( () => {
    if(nuevaCancion === true){
      listacancion.push({id:1, nombreCancion : nombreCancion, nombreArtista : nombreArtista, Genero : Genero});
    }
    addCancion(false);
  },[nuevaCancion])

  const agregarCancion = () => {
    addCancion(true);
    Alert.alert(
      "..........Felicidades........",
      "Cancion agregada exitosamente",
      [
        
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }
  const limpiar = () =>{
    setNombreCancion(0);
    setNombreArtista(0);
    setGenero(0);

  }

  return(
    <>
    <ScrollView style={styles.fondo}>
    <Text/>
    <Imageg
          style={styles.logo}
          source={require("./music.png")}
        />
    <Text/>
   
    <Text style={styles.sectionDescriptionTop}>                         Nombre de la Cancion:</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba......"
      value={nombreCancion}
      onChangeText={(newValue)=> setNombreCancion(newValue)}
      ></TextInput>

      <Text style={styles.sectionDescriptionTop}>                         Nombre del Artista:</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba....."
      value={nombreArtista}
      onChangeText={(newValue)=> setNombreArtista(newValue)}></TextInput>

      <Text style={styles.sectionDescriptionTop}>                                   Genero:</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba......"
      value={Genero}
      onChangeText={(newValue)=> setGenero(newValue)}
      >
      </TextInput>
      <Button styles={styles.Button} title="Agregar Cancion" color="#2980b9"onPress={agregarCancion  }></Button><Text/>
      <Button styles={styles.Button} title="Limpiar"  color="#2980b9"  onPress={limpiar}></Button><Text/>
      
      <ScrollView style={styles.fondoScroll}>
        {
          listacancion.map( (item,index) => (
                <Canciones data={item}/>
          ))
        }

      </ScrollView>
      </ScrollView>
      </>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',

  },
  sectionDescriptionTop: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: "#5D9BDC",
    
  },
  highlight: {
    fontWeight: '700',
  },
  titulo: {
    fontSize: 100,
    fontWeight: '600',
    
  },
  Button:{
    paddingVertical:14,
    paddingHorizontal:10,
    borderRadius:8,
    height:20,
    width:20,
    justifyContent:'center',
    marginTop:10,
    marginBottom:10,


  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    left:130
},
fondo: {
  backgroundColor: "#FFFFFF"
},
fondoScroll: {
  backgroundColor: "#FFFFFF"
},
input:{
  height: 40,
margin: 12,
borderWidth: 1,
backgroundColor:"#E9E9E9"
},

});

export default App;