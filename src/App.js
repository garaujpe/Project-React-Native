/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Foto from './assets/Foto.jpg';
import Cards from './components/Cards';

const App = () => {

    function handleRedeSocial(redesSociais){

      switch(redesSociais){
        case 'Github':
        Alert.alert('Meu Github', 'https://github.com/in/guilherme_1014')
        break
        case 'Facebook':
        Alert.alert('Meu Facebook', 'https://facebook.com/in/guilherme_1014')
        break
        case 'Linkedin':
        Alert.alert('Meu Linkedin', 'https://linkedin.com/in/guilherme_1014')
        break
      }
    }

  return(
    <>
        <View style ={style.pageContainer}>
            <View style ={style.fotoContainer}>
              <Image source ={Foto} style ={style.fotoConfig}/>
              <Text style={style.nomeConfig}>GUILHERME DE ARAUJO</Text>
              <Text style={style.carrerConfig}>Programador Mobile</Text>
              <View style={style.redesSociaisContainer}>
                  <TouchableOpacity onPress={() => handleRedeSocial('Github')}>
                    <Text>Github</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleRedeSocial('Facebook')}>
                    <Text>Facebook</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleRedeSocial('Linkedin')}>
                    <Text>Linkedin</Text>
                  </TouchableOpacity>
              </View>
              <Cards titulo="Experiencia Profissional">
                  <Text style={style.cardConfig}>Kotlin Mobile Desenvolvimento</Text>
                  <Text style={style.cardConfig}>HTML Web Desenvolvimento</Text>
                  <Text style={style.cardConfig}>React Native Mobile Desenvolvimento</Text>
              </Cards>
              <Cards titulo="Formação Academica">
                  <Text style={style.cardConfig}>Ciencia da Computação</Text>
                  <Text style={style.cardConfig}>Excell Avançado</Text>
                  <Text style={style.cardConfig}>Ingles Fluente</Text>
              </Cards>
            </View>
        </View>
    </>
  );
};

const style = StyleSheet.create({
    pageContainer:{
      backgroundColor: 'white',
      flex: 1,
    },
    fotoConfig:{
      width: 250,
      height: 250,
      borderRadius: 125,
    },
    fotoContainer:{
       alignItems: 'center',
    },
    nomeConfig:{
      fontSize: 32,
      fontWeight: 'bold',
    },
    carrerConfig:{
      fontSize: 24,
      color: '#708090',
    },
    redesSociaisContainer:{
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    cardConfig:{
      color: '#D3D3D3',
      marginTop: 5,
    },
  })


export default App;
