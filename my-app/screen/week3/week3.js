import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput, ScrollView } from 'react-native';

const Week3 = () => {

    const [count, setCount] = useState(0);

    const [textValue1, setTextValue1] = useState(0);
    const [textValue2, setTextValue2] = useState(0);

    const [sumValue, setSumValue] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.subContainer1}>
                <View>
                    <Text style={[{ fontSize: 60 }]}>{count}</Text>
                </View>
                <View>
                    <Button style={styles.countButton} title='증가' onPress={() => { setCount(count + 1) }} />
                    <Button style={styles.countButton} title="감소" onPress={() => { setCount(count - 1) }} />
                </View>
            </View>

            <View style={styles.subContainer2}>
                <View style={[{ flexDirection: 'row' }]}>
                    <TextInput
                        style={styles.sumInput}
                        keyboardType="numeric"
                        value={textValue1}
                        onChangeText={setTextValue1}
                    />
                    <TextInput
                        style={styles.sumInput}
                        keyboardType="numeric"
                        value={textValue2}
                        onChangeText={setTextValue2}
                    />
                    <Button style={styles.sumButton} title="두 값 더하기" onPress={() => { setSumValue(Number(textValue1)+Number(textValue2))}} />
                </View>
                <View>
                    <Text style={styles.sumResult}>결과: {sumValue}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },

    subContainer1: {
        
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 330,
        marginTop: 50,
    },

    subContainer2: {

        alignItems: 'center',
        width: 330,
        marginTop: 40,
    },

    countButton: {
        marginBottom: 10,
    },


    sumInput: {
        fontSize: 24,
        borderWidth: 1,
        marginEnd: 30,
        width: 50,
        height: 50
    },

    sumButton: {
        marginStart: 10
    },

    sumResult: {
        fontSize: 30,
        marginTop: 30,
        marginBottom: 30

    }
});

export default Week3;