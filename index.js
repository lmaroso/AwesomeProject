/**
 * @format
 */

//Importamos una libreria para ayudarnos a crear un componente.
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Creamos un componente.
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);
//Renderizamos la app en el dispositivo.
AppRegistry.registerComponent('AwesomeProject', () => App);
