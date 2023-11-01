import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ModalButton = ({ text, onPress, textTestId }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text 
          style={styles.buttonText} 
          testID={`deleteModalButton-${textTestId}`}>
            {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 35,
    width: 145,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3639FF',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
  },
});

export default ModalButton;