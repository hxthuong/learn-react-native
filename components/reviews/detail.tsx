import { Button, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles, POPPINS_REGULAR } from '../../utils/const';
import { NavigationProp, useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types/route';

const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'preview-detail'> = useRoute();

    return (
        <View>
            {/* <Text style={styles.review}>Review Detail</Text> */}
            <Text style={styles.reviewText}>ID: {route.params?.id}</Text>
            <Text style={styles.reviewText}>Tiêu đề: {route.params?.title}</Text>

            <View style={styles.stars}>
                <Text style={styles.reviewText}>Rating: </Text>
                {Array.from({ length: route.params?.star || 0 }).map((_, i) => (
                    <AntDesign key={i} name="star" size={24} color="gold" />
                ))}
            </View>
            <Button title="Go home" onPress={() => navigation.navigate('home')} />
        </View>
    );
};

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: POPPINS_REGULAR,
    },
    reviewText: {
        fontFamily: POPPINS_REGULAR,
        fontSize: 25,
        padding: 15,
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default DetailScreen;
