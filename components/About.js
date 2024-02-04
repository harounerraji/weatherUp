import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import style from '../Style.js';
import TimeToDestination from './TimeToDestination';

export default class About extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'about',
            tabBarIcon: () => {
                return <Image source={require('./icons/about.png')} style={{ width: 30, height: 30 }} />
            }
        }
    }

   

    test() {
        this.props.navigation.navigate('ResultDetailed')
    }

    render() {
        const url = 'https://github.com/JGuiraud/ReactNative_MeteoApp'
        return (

            <View style={style.aboutBack}>
                <Text style={style.titleAbout}>À Propos de l'application</Text>
                <Text style={style.textAbout}>Cette application a été développée en quatre jours utilisant la technologie react-native dans le cadre de la formation Développeur Web/Mobile | Simplon Occitanie.</Text>
            </View >

        );
    }
}