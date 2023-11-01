import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import { Text } from 'react-native-elements';

interface Props {
  labelText: string;
  fieldValue: string; 
  fieldTestId: string;
}

const MemberFields = ({ labelText, fieldValue, fieldTestId}: Props) => {
  return (
    <View>
      <Text testID={`memberFieldLabel-${fieldTestId}`} style={styles.label}>{labelText}</Text>
      <Text testID={`memberFieldValue-${fieldTestId}`} style={styles.field}>{fieldValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
  field: {
    fontSize: 18,
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: '#D2D0D0',
    padding: 10,
    margin: 5,
  },
});

export default MemberFields;