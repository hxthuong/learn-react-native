import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../utils/const';

const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.appFont]}>Aboutscreen page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    about: {
        marginBottom: 30,
    },
});

export default AboutScreen;
