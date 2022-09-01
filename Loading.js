import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>현재 위치의 날씨 정보를 가져오는중...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#fdf6aa",
    },
    text: {
        color : "#2c2c2c",
        fontSize : 30,
    }
});
