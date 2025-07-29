import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../../utils/const';
import { NavigationProp, useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types/route';
import startIcon from '../../assets/images/star.png';
import backgroundImg from '../../assets/images/react-native.png';

const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'preview-detail'> = useRoute();

    return (
        <ImageBackground source={backgroundImg} style={{ flex: 1 }}>
            <Text style={[styles.reviewText, globalStyles.appFont]}>ID: {route.params?.id}</Text>
            <Text style={[styles.reviewText, globalStyles.appFont]}>Tiêu đề: {route.params?.title}</Text>

            <View style={styles.stars}>
                <Text style={[styles.reviewText, globalStyles.appFont]}>Rating: </Text>
                {Array.from({ length: route.params?.star || 0 }).map((_, i) => (
                    <Image key={i} style={{ width: 40, height: 40 }} source={startIcon} />
                ))}
            </View>
            <Button title="Go home" onPress={() => navigation.navigate('home')} />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
    },
    reviewText: {
        fontSize: 25,
        padding: 15,
        color: 'white',
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default DetailScreen;
