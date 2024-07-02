import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Modal,
    TextInput,
} from "react-native";
import React, { useState, useRef } from "react";
import { Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function SearchComponent() {
    const [modalVisible, setModalVisible] = useState(false);
    const [textInputFocus, setTextInputFocus] = useState(false);
    const textInput = useRef(null);

    return (
        <View style={{ alignItems: "center" }}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.SearchArea}>
                    <Icon
                        name="search"
                        type="material"
                        iconStyle={{ marginLeft: 5 }}
                        size={20}
                        style={styles.searchIcon}
                    />
                    <Text style={{ fontSize: 15 }}>What Are You Looking For ?</Text>
                </View>
            </TouchableWithoutFeedback>

            <Modal animationType="fade" transparent={false} visible={modalVisible}>
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.TextInput}>
                            <Animatable.View>
                                <Icon
                                    onPress={() => {
                                        if (textInputFocus) {
                                            setModalVisible(false);
                                            setTextInputFocus(false);
                                        }
                                    }}
                                    name={textInputFocus ? "arrow-back" : "search"}
                                    type="material"
                                    iconStyle={{ marginRight: 5 }}
                                    size={20}
                                    style={styles.icons}
                                />
                            </Animatable.View>
                            <TextInput
                                autoFocus={true}
                                placeholder=""
                                style={{ width: "90%" }}
                                ref={textInput}
                                onFocus={() => setTextInputFocus(true)}
                                className="pt-1 pb-1 rounded-3xl mt-2 items-center justify-center pr-10 pl-2"
                            />
                            <Animatable.View>
                                <Icon
                                    name={textInputFocus ? "cancel" : null}
                                    iconStyle={{ color: "#86939e" }}
                                    type="material"
                                    onPress={() => {
                                        textInput.current.clear();
                                        // handleSearch()
                                    }}
                                    style={styles.icons}
                                />
                            </Animatable.View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        fontSize: 16,
        color: "#86939e",
    },
    TextInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: "#86939e",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingLeft: 10,
        paddingRight: 10,
        marginTop:5
    },
    SearchArea: {
        flexDirection: "row",
        alignItems: "center",
        width: "94%",
        height: 50,
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: "#e1e8ee",
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
    },
    searchIcon: {
        fontSize: 24,
        color: "#5e6977",
        padding: 5,
    },
    view1: {
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    view2: {
        justifyContent: "center",
        padding: 15,
        alignItems: "center",
    },
    icons: {
        fontSize: 24,
        padding: 5,
        color: "#5e6977",

    },
    modal: {
        flex: 1,
    },
});
