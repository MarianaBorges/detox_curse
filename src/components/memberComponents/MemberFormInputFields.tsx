import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
//import { Text } from 'react-native-elements';

const MemberFormInputFields = ({
  labelAndPlaceholder,
  inputValue,
  inputChangeText,
  editableStatus,
  isFailingValidation,
  errorMessage,
  isInError,
  formTestId
}) => {
  const [isErrorState, setIsErrorState] = useState(isInError);

  useEffect(() => {
    setIsErrorState(isInError);
  }, [isInError]);

  const handleFocus = () => {
    if (isErrorState) {
      inputChangeText('');
      setIsErrorState(false);
    }
  };

  const handleBlur = () => {
    if (isFailingValidation) {
      setIsErrorState(true);
    }
  };

  return (
    <View pointerEvents={editableStatus ? 'auto' : 'none'}>
      <Text style={styles.label} testID={`formLabel-${formTestId}`}>{labelAndPlaceholder}:</Text>
      <TextInput
        testID={`formInput-${formTestId}`}
        style={[styles.input, isErrorState ? styles.inputError : {}]}
        placeholder={labelAndPlaceholder}
        value={isErrorState ? errorMessage : inputValue}
        onChangeText={inputChangeText}
        editable={editableStatus}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    marginBottom: 15,
    borderColor: 'black',
    padding: 5,
    margin: 5,
  },
  inputError: {
    color: 'red',
    borderColor: 'red',
  },
});

MemberFormInputFields.defaultProps = {
  isFailingValidation: false,
  errorMessage: null,
  isInError: false,
};

export default MemberFormInputFields;