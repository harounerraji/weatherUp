import React from 'react'
import { Text, ActivityIndicator, ListView, Image, View, Button } from 'react-native';
import style from '../Style'
import TimeToDestination from './TimeToDestination'

export default class ResultGoogle extends React.Component {


    static navigationOptions = ({navigation}) => {
        return {
            title: `Trajet entre ${navigation.state.params.depart} et ${navigation.state.params.destination}`,
            tabBarIcon: () => {
                return <Image source={require('./icons/sign.png')} style={{ width: 30, height: 30 }} />
            }
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            depart: this.props.navigation.state.params.depart,
            destination: this.props.navigation.state.params.destination,
            selectedlocomotion: this.props.navigation.state.params.selectedlocomotion,
            report: null,
            address: "",
            distace: "",
            duration: ""
        }
        setTimeout(() => this.getTrafficFromGoogle(), 1000);
    }

    getTrafficFromGoogle() {
        return fetch('https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + this.state.depart + '&destinations=' + this.state.destination + '&mode=' + this.state.selectedlocomotion + '&language=fr-FR&key=AIzaSyBxe6_zFX7HT0DNZ6BsFc34H_ASLkur0N0')
            .then((response) => response.json())
            .then((responseText) => {
                this.setState({ report: responseText })
                this.setState({ address: this.state.report.destination_addresses })
                this.setState({ distance: this.state.report.rows[0].elements[0].distance.text })
                this.setState({ duration: this.state.report.rows[0].elements[0].duration.text })
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
                <Image source={require('./images/roadback.jpg')} style={style.containerGeneral}>
                    <View style={style.containerTraffic}>
                        <Text style={style.textCentered}>
                            <Text style={style.infoTrajet}>Info Trajet : </Text>
                            Il y a {this.state.distance} entre {this.state.depart} et {this.state.destination}.
                            Il vous faudra {this.state.duration}
                        </Text>

                    </View>
                </Image>
            )
        }
    }
}
