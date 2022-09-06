import {StyleSheet, Text, View, StatusBar} from "react-native";
import PropTypes from'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient: ['#e8cbc0','#636fa4'],
        title: "Thunderstorm",
        subtitle:"Thunderstorm",
    },
    Drizzle : {
        iconName : "weather-rainy",
        gradient: ['#e8cbc0','#636fa4'],
        title: "Drizzle",
        subtitle:"Drizzle",
    },
    Rain : {
        iconName : "weather-pouring",
        gradient: ['#e8cbc0','#636fa4'],
        title: "Rain",
        subtitle:"Rain",
    },
    Snow : {
        iconName : "weather-snowy",
        gradient: ['#e8cbc0','#636fa4'],
        title: "Snow",
        subtitle:"Snow",
    },
    Atmosphere : {
        iconName : "weather-hazy",
        gradient: ['#e8cbc0','#636fa4'],
        title: "Atmosphere",
        subtitle:"Atmosphere",
    },
    Clear : {
        iconName : "weather-sunny",
        gradient: ['#e8cbc0','#636fa4'],
        title: "Clear",
        subtitle:"Clear",
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient: ['#22c1c3','#fdbb2d'],
        title: "Clouds",
        subtitle:"Clouds",
    },
    Haze : {
        iconName : "weather-hazy",
        gradient: ['#e8cbc0','#636fa4'],
        title: "Haze",
        subtitle:"Haze",
    },
    Mist : {
        iconName : "weather-pouring",
        gradient: ['#e8cbc0','#636fa4'],
        title: "Mist",
        subtitle:"Mist",
    },
    Dust : {
        iconName : "weather-hazy",
        gradient: ['#e8cbc0','#636fa4'],
        title: "Dust",
        subtitle:"Dust",
    },
}

const Weather = ({temp, condition}) => {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={{...styles.halfContainer, ...styles.tempContainer}}>
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
    tempContainer: {
        paddingHorizontal: 20,
        alignItems: "center"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});
