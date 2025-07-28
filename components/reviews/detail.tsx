import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, POPPINS_REGULAR } from '../../utils/const';

const DetailScreen = () => {
    return (
        <View>
            <Text style={[styles.review, globalStyles.appFont]}>Detailscreen page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
    },
});

export default DetailScreen;
