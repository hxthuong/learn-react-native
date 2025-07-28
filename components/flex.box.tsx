import { StyleSheet, Text, View } from 'react-native';
// import AntDesign from '@expo/vector-icons/AntDesign';

const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.item, styles.item1]}>
                <View>
                    <Text>item 1</Text>
                </View>
            </View>
            <View style={[styles.item, styles.item2]}>
                <Text>item 2</Text>
            </View>
            <View style={[styles.item, styles.item3]}>
                <Text>item 3</Text>
            </View>
            <View style={[styles.item, styles.item4]}>
                <Text>item 4</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        borderWidth: 3,
        borderBlockColor: 'red',
        //justify => ox (row) / oy (column)
        // justifyContent: 'center',
        //align => oy (row) / ox (column)
        // alignItems: 'center',
    },
    item: {
        padding: 30,
    },
    item1: {
        backgroundColor: 'violet',
    },
    item2: {
        backgroundColor: 'orange',
    },
    item3: {
        backgroundColor: 'cyan',
    },
    item4: {
        backgroundColor: 'green',
    },
});

export default FlexBox;
