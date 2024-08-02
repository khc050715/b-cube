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

            <View style={styles.subcontainer}>
                <Text style={styles.title}>취미 목록</Text>
                <Button onPress={nametoggle} title={editname ? '확인' : '수정'} />
            </View>

            <View style={styles.subContainerList}>
                <View>
                    {savedhobby.map((item) => (
                        <View key={item.key} style={styles.listItem}>
                            <Text style={styles.listText}>- {item.value}</Text>
                            {editname ?
                                <Button title='삭제' onPress={() => remove(item.key)} />
                                :
                                <Text style={styles.listText}></Text>}
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
                        title='추가' />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
    },

    subcontainer: {
        flexDirection: 'row',
        marginTop: 30,
        width: 330,
        backgroundColor: 'red'
    },


    title: {
        fontSize: 25,
        width: 292
    },

    subContainerList: {
        marginTop: 20,
        width: 330,
    },


    listText: {
        fontSize: 20,
        width: 292,
        marginBottom: 10
    },

    listItem: {
        flexDirection: 'row',
        marginBottom: 10
    },

    inputhobby: {
        fontSize: 24,
        width: 130,
        borderWidth: 1,
    },
});

export default HobbyList;