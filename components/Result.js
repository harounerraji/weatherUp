import React from 'react'
import { Text, ActivityIndicator, ListView, Image, View } from 'react-native';
import style from '../Style'
import WeatherRow from './weather/Row'
import { StackNavigator } from 'react-navigation';

export default class Result extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo ${navigation.state.params.city} | 16j`,
            tabBarIcon: () => {
                return <Image source={require('./icons/weather.png')} style={{ width: 30, height: 30 }} />
            }
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null,
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        }
        setTimeout(() => this.getWeatherFromApiAsync(), 1000)
    }

    details() {
        navigate('ResultDetailed')
    }

    getWeatherFromApiAsync() {
        return fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.state.city + '&mode=json&units=metric&appid=d82ce537f5b61d85d53557bad5a65ae1&cnt=16')
            .then((response) => response.json())
            .then((responseText) => {
                this.setState({ report: responseText })
                console.log(this.state.report.list)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.report === null) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color={style.color} size="large" />
                    <Text>Chargement...</Text>
                </View >
            )
        } else {
            return (
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.state.report.list)}
                    renderRow={(row, j, k) => (<WeatherRow day={row} index={parseInt(k, 10)} />)}
                    />
            )
        }
    }
}

