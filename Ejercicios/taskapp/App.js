import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Button
} from 'react-native';


import Tarea from "./src/componentes/Tarea";

export default function App(){

const [listaTareas, setTareas] = useState([
                                  {id:1, titulo : "Tarea 1", descripcion :"lorem ipsum text 1"},
                                  {id:2, titulo : "Tarea 2", descripcion :"lorem ipsum text 1"},
                                  {id:3, titulo : "Tarea 3", descripcion :"lorem ipsum text 1"},
]);

const [nuevaTarea,addTarea ] = useState(false);
useEffect( ()=>{
if(nuevaTarea === true){
  listaTareas.push({id:4, titulo : "Tarea X+1", descripcion :"Esta es una tarea agregada"});

}
addTarea(false);

},
[nuevaTarea])

const agragarTarea =() =>{
  addTarea(true);
}

  return(
    <SafeAreaView>
      <Button style={styles.btn} title="Nueva Tarea" color="#FF5733" onPress={agragarTarea}></Button>
      <ScrollView>

      {
       listaTareas.map((item,index)=> (
       <Tarea data={item}/>

  ))

/*
<Tarea
        titulo="Tarea 1"
        descripcion = "Descaripcion Tarea 1"
        />

      <Tarea
        titulo="Tarea 2"
        descripcion = "Descaripcion Tarea 2"
        />

        <Tarea
        />
        <Tarea
        />
        <Tarea
        />
        <Tarea
        />
        */

      }


      </ScrollView>
    </SafeAreaView>
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
  highlight: {
    fontWeight: '700',
  },
  titulo:{
    fontSize: 100,
    fontWeight: '600',

  },
  btn:{
marginTop:8,
marginLeft:8,
marginRight:8


/*Jael Oseguera - 201902303*/

  }
});


