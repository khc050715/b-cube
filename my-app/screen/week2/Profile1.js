import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';

const Profile = () => {
    const [name, setname] = useState('');
    const [editname, seteditname] = useState(false);
    const nametoggle = () => {
        seteditname(editname => !editname)
    }

    const [email, setemail] = useState('');
    const [editemail, seteditemail] = useState(false);
    const emailtoggle = () => {
        seteditemail(editemail => !editemail)
    }

    const [age, setage] = useState('');
    const [editage, seteditage] = useState(false);
    const agetoggle = () => {
        seteditage(editage => !editage)
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title1}>본인 소개 페이지</Text>

            <View style={styles.subcontainer}>
                <Text style={styles.textname}>이름:  </Text>
                {editname ?
                    <TextInput
                        style={styles.inputname}
                        keyboardType="dafalt"
                        value={name}
                        onChangeText={setname}
                    />
                    :
                    <Text style={[{ fontSize: 26 }, { width: 230 }]}>{name}</Text>}
                <Button onPress={nametoggle} title={editname ? '확인' : '수정'} />
            </View>

            <View style={styles.subcontainer}>
                <Text style={styles.textemail}>Email:</Text>
                {editemail ?
                    <TextInput
                        style={styles.inputemail}
                        keyboardType="dafalt"
                        value={email}
                        onChangeText={setemail}
                    />
                    :
                    <Text style={[{ fontSize: 24 }, { width: 230 }]}>{email}</Text>}
                <Button onPress={emailtoggle} title={editemail ? '확인' : '수정'} />
            </View>

            <View style={styles.subcontainer}>
                <Text style={styles.textage}>나이:  </Text>
                {editage ?
                    <TextInput
                        style={styles.inputage}
                        keyboardType='numeric'
                        value={age}
                        onChangeText={setage}
                    />
                    :
                    <Text style={[{ fontSize: 26 }, { width: 230 },]}>{age}</Text>}
                <Button onPress={agetoggle} title={editage ? '확인' : '수정'} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    subcontainer: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 10
    },
    title1: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 250,
        marginBottom: 10
    },

    inputname: {
        flexDirection: 'row',
        height: 35,
        width: 230,
        borderWidth: 1,
        fontSize: 26,
    },
    textname: {
        flexDirection: 'row',
        fontSize: 26,
        justifyContent: "center",
        width: 100,
    },

    inputemail: {
        flexDirection: 'row',
        height: 35,
        width: 230,
        borderWidth: 1,
        fontSize: 24,
    },
    textemail: {
        flexDirection: 'row',
        fontSize: 26,
        justifyContent: "center",
        width: 100,
    },

    inputage: {
        flexDirection: 'row',
        height: 35,
        width: 230,
        borderWidth: 1,
        fontSize: 26,
    },
    textage: {
        flexDirection: 'row',
        fontSize: 26,
        justifyContent: "center",
        width: 100,
    },
});

export default Profile;