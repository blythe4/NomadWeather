import {StyleSheet, Text, StatusBar, SafeAreaView, View} from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <Text style={styles.text}>현재 위치의 날씨 정보를 가져오는중...</Text>
            </View>
        </SafeAreaView>
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
