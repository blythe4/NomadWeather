import {StyleSheet, Text, View, StatusBar, Alert} from "react-native";
import PropTypes from'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import {useEffect} from "react";

const weatherOptions = {
    Thunderstorm : {
        iconName : "weather-cloudy",
        gradient: ['#e8cbc0','#636fa4']
    },
    Drizzle : {
        iconName : "weather-cloudy",
        gradient: ['#e8cbc0','#636fa4']
    },
    Rain : {
        iconName : "weather-cloudy",
        gradient: ['#e8cbc0','#636fa4']
    },
    Snow : {
        iconName : "weather-cloudy",
        gradient: ['#e8cbc0','#636fa4']
    },
    Atmosphere : {
        iconName : "weather-cloudy",
        gradient: ['#e8cbc0','#636fa4']
    },
    Clear : {
        iconName : "weather-cloudy",
        gradient: ['#e8cbc0','#636fa4']
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient: ['#22c1c3','#fdbb2d'],
        title: "Clouds",
        subtitle:"I knew, fucking boring",
    },
    Haze : {
        iconName : "weather-cloudy",
        gradient: ['#e8cbc0','#636fa4']
    },
    Mist : {
        iconName : "weather-cloudy",
        gradient: ['#e8cbc0','#636fa4']
    },
    Dust : {
        iconName : "weather-cloudy",
        gradient: ['#e8cbc0','#636fa4']
    },
}

const Weather = ({temp, condition}) => {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="white" />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}
export default Weather

Weather.prototype = {
    temp : PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist","Dust"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    temp: {
        fontSize: 40,
        color: 'white'
    },
    title: {
        fontSize: 44,
        fontWeight : "300",
        color: 'white',
        marginBottom: 10,
    },
    subtitle:{
        fontSize: 24,
        fontWeight: "600",
        color: 'white'
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});
