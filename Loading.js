import {StyleSheet, Text, StatusBar, SafeAreaView, View} from "react-native";
import WrappedText from "react-native-wrapped-text";
import {i18n} from "./utils/i18n";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <WrappedText textStyle={styles.text}>{i18n.t('title')}</WrappedText>
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
        color : '#2c2c2c',
        fontSize : 30,
        lineHeight: 40,
    }

});
