import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.hello1}>Hello world 2!</Text>
            <Text>Hello world!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hello1: {
        color: 'red',
        fontSize: 40,
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
        fontWeight: '800',
    },
});
