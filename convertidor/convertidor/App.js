import React from 'react';

 import {SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput, 
  View,
 } from 'react-native';
 
 export default function App(){
 
   return(
 <>
     <SafeAreaView style={styles.encabezado}>
       <View>
 <text style={styles.sectionTitle}>
   Convertidor De Monedas - Rossell Jael Oseguera David 
 </text>
 
       </View>
        </SafeAreaView>
        <view>
 
        <TextInput
               style={styles.imput}
               placeholder="Escriba el valor en $"
           />
           <TextInput
               style={styles.imput}
               placeholder="Este es el valor en lempiras"
           />
 
 
        </view>
        </>
   )
 }
 
 const styles = StyleSheet.create({
   encabezado:{
 
     backgroundColor: '#CD5C5C',
     height: 200,
     borderBottomLeftRadius: 30,
     borderBottomRightRadius: 30,
     alignItems: 'center'
 
   },
 
 imput:{
   height: 40,
   margin: 12,
   borderWidth: 1
 
 } ,
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600'
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400'
   },
   highlight: {
     fontWeight: '700'
   }
 });
 
 export default App;