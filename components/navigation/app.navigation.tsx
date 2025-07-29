import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/route';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../components/reviews/home';
import DetailScreen from '../../components/reviews/detail';
import AboutScreen from '../../components/reviews/about';
import AppHeader from './app.header';

const HomeLayout = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" options={{ header: () => <AppHeader /> }} component={HomeScreen} />
            <Stack.Screen name="preview-detail" options={{ title: 'Chi tiết review' }} component={DetailScreen} />
        </Stack.Navigator>
    );
};

const AppNavigation = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home1" options={{ title: 'Trang chủ', header: () => <></> }} component={HomeLayout} />
            <Drawer.Screen
                name="about"
                options={{ title: 'Thông tin', header: () => <AppHeader /> }}
                component={AboutScreen}
            />
        </Drawer.Navigator>
    );
};

export default AppNavigation;
