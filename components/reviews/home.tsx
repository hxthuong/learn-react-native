import { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../types/route';
import AntDesign from '@expo/vector-icons/AntDesign';
import CreateModal from './create.modal';

interface IReview {
    id: number;
    title: string;
    star: number;
}

const HomeScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const [reviews, setReviews] = useState<IReview[]>([
        { id: 1, title: 'React Native', star: 5 },
        { id: 2, title: 'hoidanit', star: 5 },
    ]);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.home}>
            <View style={styles.header}>
                <Text style={{ fontSize: 30 }}>Review list:</Text>
                <AntDesign name="plussquareo" size={30} color="#2196F3" onPress={() => setModalVisible(true)} />
            </View>
            <View>
                <FlatList
                    data={reviews}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('preview-detail', item)}>
                                <Text style={styles.reviewItem}>{item.title}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
            <CreateModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    reviewItem: {
        padding: 15,
        backgroundColor: '#ccc',
        // margin: 15,
        marginVertical: 15,
    },
});

export default HomeScreen;
