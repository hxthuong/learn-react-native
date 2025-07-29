import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../utils/const';

const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.appFont]}>About Review App</Text>
            <Text style={[styles.about, globalStyles.appFont]}>Made by hoidanit</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    about: {
        marginBottom: 30,
        fontSize: 30,
    },
});

export default AboutScreen;
