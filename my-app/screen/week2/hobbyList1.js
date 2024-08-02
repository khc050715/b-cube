import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';

const HobbyList = () => {
    const [hobby, sethobby] = useState('');
    const [savedhobby, setsavedhobby] = useState([]);


    const [editname, seteditname] = useState(false);
    const nametoggle = () => {
        seteditname(editname => !editname)
    };


    const add = () => {
        if (hobby) {
            setsavedhobby([...savedhobby, { key: Math.random().toString(), value: hobby }]);
            sethobby('');
        }
    };


    const remove = (key) => {
        setsavedhobby(savedhobby.filter(todo => todo.key !== key));
    };



    return (
        <View style={styles.container}>

            <View style={styles.subcontainerhobby}>
                <Text style={styles.title2}>취미 목록</Text>
                <Button style={styles.button} onPress={nametoggle} title={editname ? '확인' : '수정'} />
            </View>

            <View style={styles.column}>
                <View>
                    {savedhobby.map((item) => (
                        <View key={item.key} style={[{flexDirection: 'row'}]}>
                            <Text style={styles.listtext}>{item.value}</Text>
                            {editname ?
                                <Button title="삭제" onPress={() => remove(item.key)} />
                                :
                                <Text style={[{ fontSize: 28 }, { width: 230 }]}></Text>}
                        </View>
                    ))}
                </View>
                <View style={[{ flexDirection: 'row', marginTop: 10, }]}>
                    <TextInput
                        style={styles.inputhobby}
                        keyboardType='default'
                        value={hobby}
                        onChangeText={sethobby}
                    />
                    <Button
                        onPress={add}
                        style={[{ height: 30 }]}
                        title='추가' />
                </View>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    subcontainerhobby: {
        flexDirection: 'row',
        marginTop: 30
    },
    button: {
        height: 10,

    },

    title2: {
        fontSize: 27,
        marginTop: 0,
        marginBottom: 10,
        flexDirection: 'row',
        marginLeft: 17,
        width: 335,
    },

    column: {
        flexDirection: 'column',
        marginTop: 35
    },

    listtext: {
        fontSize: 20,
        marginLeft: 17,
    },

    inputhobby: {
        flexDirection: 'row',
        height: 35,
        width: 130,
        borderWidth: 1,
        fontSize: 26,
        marginLeft: 17
    },
});

export default HobbyList;