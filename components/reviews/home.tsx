import { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../types/route';
import AppHeader from '../navigation/app.header';

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

    return (
        <View style={styles.home}>
            <Text style={{ fontSize: 30 }}>Review list:</Text>
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
    );
};

const styles = StyleSheet.create({
    home: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    reviewItem: {
        padding: 15,
        backgroundColor: '#ccc',
        margin: 15,
    },
});

export default HomeScreen;
