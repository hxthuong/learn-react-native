import { useState } from 'react';
import {
    Alert,
    Button,
    FlatList,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

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
        if (!todo) {
            Alert.alert('Lỗi input todo', 'Todo không được để trống', [{ text: 'Xác nhận' }]);
            return;
        }
        setListTodo([...listTodo, { id: randomInt(2, 100), name: todo }]);
        setTodo('');
    };

    const handleDeleteTodo = (id: number) => {
        const newTodos = listTodo.filter((item) => item.id !== id);
        setListTodo(newTodos);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                {/* header */}
                <Text style={styles.header}>Todo App</Text>

                {/* form  */}
                <View style={styles.form}>
                    <TextInput style={styles.todoInput} value={todo} onChangeText={setTodo} placeholder="Input todo" />
                    <Button title="Add todo" onPress={handleAddTodo} />
                </View>
                {/* list todo */}
                <View style={styles.todo}>
                    {/* <Text>{JSON.stringify(listTodo)}</Text> */}
                    <FlatList
                        data={listTodo}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={({ item }) => {
                            return (
                                <Pressable
                                    style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                                    // style={({ pressed }) => (pressed ? styles.todoItem_hover : null)}
                                    onPress={() => handleDeleteTodo(item.id)}
                                >
                                    <View style={styles.groupTodo}>
                                        <Text style={styles.todoItem}>{item.name}</Text>
                                        <AntDesign name="close" size={24} color={'red'} />
                                    </View>
                                </Pressable>
                            );
                        }}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: 'wheat',
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '800',
    },
    form: {
        // marginBottom: 20,
        margin: 10,
    },
    todoInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        padding: 5,
        marginBottom: 10,
    },
    todo: {
        flex: 1,
    },
    groupTodo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginHorizontal: 10,
        padding: 15,
        borderWidth: 1,
        borderStyle: 'dashed',
    },
    todoItem: {
        fontSize: 14,
    },
});
