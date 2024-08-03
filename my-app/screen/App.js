import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

import Week1 from '../screen/week1/week1.js';
import Week2_A from '../screen/week2_A/week2_A.js';
import Week3 from '../screen/week3/week3.js';

import Week3_1 from '../screen/week3_1/week3_1.js';
import Login from '../screen/week3_1/login.js';


import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Home = ({ navigation }) => {

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text style={[{fontSize:30}, {marginBottom: 40}]}>B-cube react-native 권혁찬</Text>
      <View>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigation.navigate("week1")}>
          <Text>WEEK1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigation.navigate("week2_A")}>
          <Text>WEEK2_A</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigation.navigate("week3")}>
          <Text>WEEK3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigation.navigate("week3_1")}>
          <Text>WEEK3_1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="week1" component={Week1} />
        <Stack.Screen name="week2_A" component={Week2_A} />
        <Stack.Screen name="week3" component={Week3} />
        <Stack.Screen name="week3_1" component={Week3_1} />

        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  TouchableOpacity:{
    margin: 15,
  }
});

export default App;
