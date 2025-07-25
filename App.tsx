import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.hello1}>Name: {name}</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    multiline
                    autoCapitalize={'words'}
                    onChangeText={setName}
                />
            </View>
            <View>
                <Text style={styles.hello1}>Age: {age}</Text>
                <TextInput style={styles.input} value={age} keyboardType={'number-pad'} onChangeText={setAge} />
            </View>
            <Text style={styles.hello1}>{count}</Text>
            <View>
                <Button title="Increase" onPress={() => setCount(count + 1)} />
            </View>
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
    input: {
        width: 320,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    hello1: {
        color: 'red',
        fontSize: 40,
        // borderWidth: 1,
        // borderColor: 'red',
        padding: 10,
        fontWeight: '800',
    },
});
