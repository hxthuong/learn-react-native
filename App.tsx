import { LogBox } from 'react-native';

// Ẩn warning liên quan đến font custom
LogBox.ignoreLogs([/fontFamily .* is not a system font and has not been loaded through expo-font/]);

import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { OPENSANS_REGULAR } from './utils/const';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AppNavigation from './components/navigation/app.navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();
const App = () => {
    const [fontsLoaded] = useFonts({
        [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
        ...AntDesign.font,
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </SafeAreaView>
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
