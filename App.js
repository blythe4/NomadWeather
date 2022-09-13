import Loading from "./Loading";
import * as Location from 'expo-location'
import {useEffect, useState} from "react";
import { ActivityIndicator, StyleSheet, Alert, StatusBar, View, Text, ScrollView} from "react-native";
import axios from 'axios';
import Weather from "./Weather";
import { Dimensions } from 'react-native';
import Moment from 'moment';
import { Fontisto } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const API_KEY = "bfaa613564b6762cbea175fd750e8735";
const icons = {
    Clouds : "cloudy",
    Rain: "rains",
    Clear: "day-sunny",
    Atmosphere: "cloudy-gusts",
    Snow: "snow",
    Drizzle: "rain",
    Thunderstorm: "lightning",
}

export default function App() {
    const [isLoading,setIsLoading] = useState(true);
    const [weatherData, setWeatherData] = useState({temp:0,condition:"Clear"});

    const [country, setCountry] = useState("en");
    const [city, setCity] = useState("Loading...");
    const [days, setDays] = useState([]);
    const [ok, setOk] = useState(true);
    Moment.locale('ko');

    const getWeather = async(latitude, longitude) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&units=metric&appid=${API_KEY}&lang=${country}`);
        const json = await response.json();
        setDays(json.daily);

        // setWeatherData({
        //     temp: data.main.temp,
        //     condition: data.weather[0].main,
        // })
    }

    const geoLocation = async () => {
            let { granted } = await Location.requestForegroundPermissionsAsync();
            if (!granted) {
                setOk(false);
                Alert.alert("위치 정보 알 수 없음.","허용바람.");
                return;
            }

            const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
            let location = await Location.reverseGeocodeAsync(
                {latitude, longitude},
                {useGoogleMaps: false}
            );
            setCity(location[0].city);
            setCountry(location[0].isoCountryCode);
            getWeather(latitude,longitude);
            setIsLoading(false);
    }

    useEffect(() => {
        geoLocation();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"}/>
            <View style={styles.city}>
                <Text style={styles.cityName}>{city}</Text>
            </View>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.weather}
            >
                { days.length === 0 ? (
                        <View style={styles.day}>
                            <ActivityIndicator color="white" style={{marginTop: 10}} size="large"/>
                        </View>
                    ) :(
                        days.map((day, index) => (
                            <View key={index} style={styles.day}>
                                <Text style={styles.date}>{Moment(day.dt*1000).format('MM. DD.')}</Text>
                                <View style={{
                                    flexDirection:"row",
                                    alignItems:"center",
                                    justifyContent: "space-between"
                                }}>
                                    <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
                                    <Fontisto name={icons[day.weather[0].main]} size={68} color="white" />
                                </View>
                                <Text style={styles.description}>{day.weather[0].main}</Text>
                                <Text style={styles.tinyText}>{day.weather[0].description}</Text>
                            </View>
                        ))
                    )}
            </ScrollView>
        </View>
        // isLoading ? <Loading /> : <Weather temp={weatherData.temp} condition={weatherData.condition} />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato",
    },
    paragraph: {
        color : "#2c2c2c",
        fontSize : 30,
    },
    city: {
        flex: 1.2,
        justifyContent: "center",
        alignItems: "center",
    },
    cityName: {
        fontSize: 50,
        fontWeight: "500",
        color: "white"
    },
    weather: {
    },
    day: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 20,
    },
    date:{
        marginTop: 50,
        fontSize: 30,
        color: "white"
    },
    temp:{
        marginTop: 30,
        fontSize: 100,
        fontWeight: "600",
        color: "white"
    },
    description:{
        fontSize: 30,
        color: "white"
    },
    tinyText: {
        fontSize: 20,
        color: "white"
    }
});

