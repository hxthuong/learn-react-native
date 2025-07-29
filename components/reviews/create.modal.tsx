import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';

interface IProps {
    modalVisible: boolean;
    setModalVisible: (v: boolean) => void;
}

const CreateModal = (props: IProps) => {
    const { modalVisible, setModalVisible } = props;

    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.container}>
                <View>
                    {/* header */}
                    <View style={styles.header}>
                        <Text style={{ fontSize: 24, fontWeight: '600' }}>Create a review</Text>
                        <AntDesign name="close" size={24} color="black" onPress={() => setModalVisible(false)} />
                    </View>
                    {/* body */}
                    <View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Nội dung</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Rating</Text>
                            <TextInput style={styles.input} keyboardType="numeric" />
                        </View>
                    </View>
                    {/* footer */}
                    <View style={{ marginTop: 5 }}>
                        <Button title="Add" />
                    </View>
                    {/* <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable> */}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 20,
    },
    groupInput: {
        marginBottom: 15,
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
});

export default CreateModal;
