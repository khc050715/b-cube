import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

import Week1 from '../screen/week1/week1.js';
import Week2 from '../screen/week2/week2.js';
import Week3 from '../screen/week3/week3.js';

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
          onPress={() => navigation.navigate("week2")}>
          <Text>WEEK2.A</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigation.navigate("week3")}>
          <Text>WEEK3</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="week1" component={Week1} />
        <Stack.Screen name="week2" component={Week2} />
        <Stack.Screen name="week3" component={Week3} />
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
