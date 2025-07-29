import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { globalStyles } from '../../utils/const';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/route';

const AppHeader = () => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.container}>
            <MaterialIcons name="menu" size={30} color="black" onPress={() => navigation.toggleDrawer()} />
            <Text style={[styles.headerText, globalStyles.appFont]}>Hoidanit App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ccc',
        padding: 10,
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 800,
    },
});

export default AppHeader;
