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
            <View style={styles.subContainer}>
                <Text style={styles.text}>이름:</Text>
                {editname ?
                    <TextInput
                        style={styles.input}
                        keyboardType="dafalt"
                        value={name}
                        onChangeText={setname}
                    />
                    :
                    <Text style={styles.inputtext}>{name}</Text>}
                <Button onPress={nametoggle} title={editname ? '확인' : '수정'} />
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.text}>Email:</Text>
                {editemail ?
                    <TextInput
                        style={styles.input}
                        keyboardType="dafalt"
                        value={email}
                        onChangeText={setemail}
                    />
                    :
                    <Text style={styles.inputtext}>{email}</Text>}
                <Button onPress={emailtoggle} title={editemail ? '확인' : '수정'} />
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.text}>나이:</Text>
                {editage ?
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        value={age}
                        onChangeText={setage}
                    />
                    :
                    <Text style={styles.inputtext}>{age}</Text>}
                <Button onPress={agetoggle} title={editage ? '확인' : '수정'} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    subContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        width: 330
    },

    text: {
        fontSize: 24,
        width: 65,
    },

    input: {
        fontSize: 24,
        width: 227,
        borderWidth: 1,
    },

    inputtext: {
        fontSize: 24,
        width: 227,
    },
});

export default Profile;