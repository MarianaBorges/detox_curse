import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const Toggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
        {isEnabled ? 
          <View testID='square' style={styles.quadrado}></View> 
          :
          <View testID='circle' style={styles.quadrado}></View>
        }
      <Switch
        testID='toggle'
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quadrado: {
    width: 40,
    height: 40,
    backgroundColor: 'pink'
  },
  circle:{
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red'
  }
});

export default Toggle;