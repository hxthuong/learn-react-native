import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './components/reviews/home';
import DetailScreen from './components/reviews/detail';
import AboutScreen from './components/reviews/about';
import { POPPINS_REGULAR } from './utils/const';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/route';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

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
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" options={{ title: 'Trang chủ' }} component={HomeScreen} />
                <Stack.Screen name="preview-detail" options={{ title: 'Chi tiết review' }} component={DetailScreen} />
                <Stack.Screen name="about" component={AboutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
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
