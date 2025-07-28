import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [students, setStudents] = useState([
        { id: 1, name: 'A', age: 10 },
        { id: 2, name: 'B', age: 11 },
        { id: 3, name: 'C', age: 12 },
        { id: 4, name: 'D', age: 13 },
        { id: 5, name: 'E', age: 14 },
        { id: 6, name: 'F', age: 15 },
        { id: 7, name: 'G', age: 10 },
        { id: 8, name: 'H', age: 11 },
        { id: 9, name: 'I', age: 12 },
        { id: 10, name: 'K', age: 13 },
        { id: 11, name: 'L', age: 14 },
        { id: 12, name: 'M', age: 15 },
    ]);

    return (
        // <View style={styles.container}>
        //     <Text style={styles.header}>Students</Text>
        // </View>
        <View style={styles.container}>
            <Text style={styles.header}>Students</Text>
            <FlatList
                data={students}
                keyExtractor={(item) => `${item.id}`}
                // numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text style={styles.item}>
                                STT: {item.id} - Tên: {item.name}
                            </Text>
                        </View>
                    );
                }}
            />
        </View>
        // <ScrollView style={styles.container}>
        //     <Text style={styles.header}>Students</Text>
        //     {students.map((item) => (
        //         <Text style={styles.item} key={item.id}>
        //             STT: {item.id} - Tên: {item.name}
        //         </Text>
        //     ))}
        // </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        fontSize: 30,
        fontWeight: '800',
        marginVertical: 30,
        textAlign: 'center',
    },
    input: {
        width: 320,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    item: {
        // width: '100%',
        backgroundColor: 'lightblue',
        padding: 30,
        marginBottom: 30,
        marginHorizontal: 20,
        fontWeight: '800',
    },
});
