import { StyleSheet } from 'react-native';

const green = '#3BB8A2';

export default {
    color: green,
    containerGeneral: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 100,
        width: null,
        height: null
    },
    containerGeneral2: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,

        width: null,
        height: null
    },
    container: {
        padding: 30,
        width: '100 %',
    },
    text: {
        fontSize: 20
    },
    containerTraffic: {
        paddingLeft: 20,
        paddingRight: 20

    },
    infoTrajet: {
        color: 'red',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'red',
    },
    textCentered: {
        fontSize: 20,
        textAlign: 'center',
        padding: 30,
        backgroundColor: 'rgba(255, 255, 255, .7)',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: 'transparent',
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        borderColor: 'transparent',
        backgroundColor: 'rgba(255, 255, 255, .7)',
        borderWidth: 1,
        marginBottom: 30,
        paddingHorizontal: 10
    },
    picker: {
        height: 80,
        backgroundColor: 'rgba(255, 255, 255, .7)',
        paddingBottom: 15,
        marginBottom: 30
    },
    button: {
        textAlign: 'center',
        backgroundColor: green,
        fontSize: 18,
        height: 40,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 6,
        marginRight: 50,
        marginLeft: 50
    },
    header: {
        backgroundColor: green,
    },
    headerTitle: {
        color: 'white',
        fontSize: 22
    },
    aboutBack: {
        backgroundColor: green,
        padding: 30,
        width: '100 %',
        height: '100 %',
    },
    titleAbout: {
        fontSize: 24,
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        color: 'white'
    },
    textAbout: {
        color: 'white',
        fontSize: 18,
        // fontWeight: 'bold',
    }
}