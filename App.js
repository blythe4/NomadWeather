import Loading from "./Loading";
import * as Location from 'expo-location'
import {useEffect, useState} from "react";
import {StyleSheet, Alert} from "react-native";
import axios from 'axios';
import Weather from "./Weather";

const API_KEY = "bfaa613564b6762cbea175fd750e8735";

export default function App() {
    const [isLoading,setIsLoading] = useState(true);
    const [weatherData, setWeatherData] = useState({temp:0,condition:"Clear"});

    const getWeather = async(latitude, longitude) => {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        // console.log(data);
        setWeatherData({
            temp: data.main.temp,
            condition: data.weather[0].main,
        })
    }

    const geoLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert("위치 정보 알 수 없음.","허용바람.");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
            getWeather(latitude,longitude);
            setIsLoading(false);
    }

    useEffect(() => {
        geoLocation();
    }, []);

    return (
        isLoading ? <Loading /> : <Weather temp={weatherData.temp} condition={weatherData.condition} />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    paragraph: {
        color : "#2c2c2c",
        fontSize : 30,
    }
});

