import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';


const Week3_1 = ({ navigation }) => {

    return (
        <View style={styles.maincontainer}>

            <View style={styles.subcontainer1}>
                <View>
                    <Text style={[{ fontSize: 40 }, { color: "blue" }]}>join</Text>
                </View>
            </View>

            <View style={styles.subcontainer2}>

                <View>
                    <TextInput
                        style={styles.nameInput}
                        placeholder='이름을 입력해 주세요'
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.idInput}
                        placeholder='아이디를 입력해 주세요'
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.pwInput}
                        placeholder='패스워드를 입력해 주세요'
                    />
                </View>

                <View style={styles.button}>
                    <Button title="회원가입 하기" />
                </View>

            </View>

            <View style={styles.subcontainer3}>

                <View style={styles.loginSwitch}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("login")}>
                        <Text style={[{ fontSize: 17 }, { color: "gray" }]}>로그인 창으로 이동</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
};



const styles = StyleSheet.create({


    maincontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },


    subcontainer1: {
        width: 330,
        backgroundColor: 'green',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 5
    },

    subcontainer2: {
        width: 330,
        backgroundColor: 'green',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        height: 250
    },

    subcontainer3: {
        width: 330,
        backgroundColor: 'green',
        marginTop: 30,
        borderRadius: 5
    },



    nameInput: {
        borderWidth: 1,
        marginBottom: 10,
        height: 40,
    },

    idInput: {
        borderWidth: 1,
        marginBottom: 10,
        height: 40,
    },

    pwInput: {
        borderWidth: 1,
        marginBottom: 10,
        height: 40,
    },

    button: {

    },



    loginSwitch: {
        alignItems: 'center'
    },


});

export default Week3_1;