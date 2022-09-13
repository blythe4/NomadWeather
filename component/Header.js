import {Button, Pressable, StyleSheet, Switch, Text, View} from "react-native";
import {i18n} from "../utils/i18n";
import {useEffect, useState} from "react";

const Header = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () =>
    {
        setIsEnabled(previousState => !previousState);
    }

    useEffect(()=>{
        if(isEnabled) {i18n.locale = 'en'}
        else {i18n.locale = 'ko'}
    },[isEnabled]);
    return (
        <View style={styles.container}>
            <Text>{i18n.t('welcome')} {i18n.t('name')}</Text>
            <View>
                <Pressable onPress={toggleSwitch} title=''>
                    <Text style={styles.text}>{i18n.locale}</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Header;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 20,
    },
    text: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'lightskyblue',
        textTransform: "uppercase",
    }
});
