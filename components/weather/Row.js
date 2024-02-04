import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import moment from 'moment'
import 'moment/locale/fr'
import globalStyle from '../../Style'
import TimeToDestination from '../TimeToDestination'
import { StackNavigator } from 'react-navigation';

moment.locale('fr')

export default class Row extends React.Component {

    static propTypes = {
        day: React.PropTypes.object,
        index: React.PropTypes.number
    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    date() {
        let day = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text style={[style.bold]}>{day}</Text>
        )
    }

    icon(size = 60) {
        const type = this.props.day.weather[0].main.toLowerCase()
        let image
        switch (type) {
            case 'clear':
                image = require('./icons/sun.png')
                break;
            case 'rain':
                image = require('./icons/rainy.png')
                break
            default:
                image = require('./icons/cloudy.png')
                break;
        }
        return <Image source={image} style={{ width: size, height: size }} />
    }

    details() {
        return (
            <TimeToDestination />
        )
    }


    render() {
        if (this.props.index === 0) {
            return (

                <TouchableOpacity onPress={() => this.details()}>
                    <View style={[style.view, style.firstView]}>
                        <View >
                            < Text style={{ color: 'white' }} > {this.day()} {this.date()}</Text>
                            {this.icon(90)}
                        </View>
                        <Text style={[style.temp, { fontSize: 50 }]}>{Math.round(this.props.day.temp.day)}°C</Text>
                        <View>
                            <Text style={[style.temp, { fontSize: 15 }]}>min {Math.round(this.props.day.temp.min)}°C</Text>
                            <Text style={[style.temp, { fontSize: 15 }]}>max {Math.round(this.props.day.temp.max)}°C</Text>
                            <Text style={[style.temp, { fontSize: 15 }]}>{this.props.day.pressure} psi</Text>
                            <Text style={[style.temp, { fontSize: 15 }]}>{this.props.day.humidity}% humidité.</Text>
                            <Text style={[style.temp, { fontSize: 15 }]}>{this.props.day.speed} km/h</Text>
                        </View>
                    </View >
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={() => this.details()}>
                    <View style={style.view}>
                        <View style={style.flex}>
                            {this.icon()}
                            < Text style={{ marginLeft: 10 }} > {this.day()} {this.date()}</Text>
                        </View>
                        <Text style={style.temp}>{Math.round(this.props.day.temp.day)}°C</Text>
                    </View >
                </TouchableOpacity>
            )
        }
    }
}

const style = StyleSheet.create({
    white: {
        color: 'white'
    },
    bold: {
        fontWeight: 'bold'
    },
    blue: {
        color: '#3583a8'
    },
    firstView: {
        backgroundColor: '#3583a8'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    view: {
        backgroundColor: globalStyle.color,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#35a894',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    temp: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    }
});