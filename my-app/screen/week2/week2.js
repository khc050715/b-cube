import { View, StyleSheet} from 'react-native';
import Profile from './Profile1.js';
import HobbyList from './hobbyList1.js';

const Week2 = () => {

  return (
    <View style={styles.maincontainer}>
      <Profile />
      <HobbyList/>
    </View>
  )
};

const styles = StyleSheet.create({ });

export default Week2;
