import React from 'react';
import { View, TextInput, Image, Button, Text, TouchableOpacity } from 'react-native';
import style from '../Style.js';
import { StackNavigator } from 'react-navigation';
import Result from './Result'
import TimeToDestination from './TimeToDestination'


class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: ""
        }
    }

    static navigationOptions = {
        title: 'Rechercher une ville',
        tabBarIcon: () => {
            return <Image source={require('./icons/weather.png')} style={{ width: 30, height: 30 }} />
        }
    }

    setCity(city) {
        this.setState({ city })
    }

    submit() {
        this.props.navigation.navigate('Result', { city: this.state.city });
    }

    render() {
        return (
            <Image source={require('./images/landscape.jpg')} style={style.containerGeneral}>
                <View style={style.container}>
                    <Text style={style.title}>Quel temps fait-il à : </Text>
                    <TextInput
                        style={style.input}
                        value={this.state.city}
                        onChangeText={(text) => this.setCity(text)}
                        />
                    {/*<Button color={style.color} onPress={() => this.submit()} title="Rechercher" />*/}
                    <TouchableOpacity onPress={() => this.submit()}>
                        <Text style={style.button}>
                            Rechercher
                        </Text>
                    </TouchableOpacity>
                </View>
            </Image>
        )
    }
}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}

export default StackNavigator({
    Search: { screen: Search, navigationOptions },
    Result: { screen: Result, navigationOptions },
})