import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.home}>
            <Text>Homescreen page</Text>
            <Button title="View Detail" onPress={() => alert('me')} />
        </View>
    );
};

const styles = StyleSheet.create({
    home: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default HomeScreen;
