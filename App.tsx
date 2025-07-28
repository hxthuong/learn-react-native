import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

interface ITodo {
    id: number;
    name: string;
}

export default function App() {
    const [todo, setTodo] = useState('');
    const [listTodo, setListTodo] = useState<ITodo[]>([]);
    function randomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleAddTodo = () => {
        if (!todo) return;
        setListTodo([...listTodo, { id: randomInt(2, 100), name: todo }]);
        setTodo('');
    };

    return (
        <View style={styles.container}>
            {/* header */}
            <Text style={styles.header}>Todo App</Text>

            {/* form  */}
            <View style={styles.body}>
                <TextInput style={styles.todoInput} value={todo} onChangeText={setTodo} placeholder="Input todo" />
                <Button title="Add todo" onPress={handleAddTodo} />
            </View>
            {/* list todo */}
            <View style={styles.body}>
                {/* <Text>{JSON.stringify(listTodo)}</Text> */}
                <FlatList
                    data={listTodo}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) => {
                        return <Text style={styles.todoItem}>{item.name}</Text>;
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'wheat',
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '800',
    },
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: 'white',
    },
    todoInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        padding: 5,
        margin: 15,
    },
    body: {
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    todoItem: {
        fontSize: 14,
        marginBottom: 20,
        borderWidth: 1,
        borderStyle: 'dashed',
        padding: 10,
    },
});
