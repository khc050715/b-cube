import { View, StyleSheet, Text} from 'react-native';
import Profile from './Profile1.js';
import HobbyList from './hobbyList1.js';

const Week2_A = () => {

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.title}>본인 소개 페이지</Text>
      <Profile />
      <HobbyList/>
    </View>
  )
};

const styles = StyleSheet.create({ 

  maincontainer:{
    flex:1,
    margin: [10, 10, 10, 10],
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30

},

});

export default Week2_A;
