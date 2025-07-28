import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './components/reviews/home';
import DetailScreen from './components/reviews/detail';
import AboutScreen from './components/reviews/about';
import { POPPINS_REGULAR } from './utils/const';

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [fontsLoaded] = useFonts({
        [POPPINS_REGULAR]: require('./assets/fonts/Poppins-Regular.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <View style={styles.container}>
            <HomeScreen />
            <DetailScreen />
            <AboutScreen />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: 'white',
    },
});

export default App;
