import * as React from 'react';
import { View, Text, Button, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
 title: string;
 sectionTextId: string;
}

function HomeButton({title, sectionTextId, ...rest}: ButtonProps) {
  return (
      <TouchableOpacity 
        {...rest}
        style={{backgroundColor: 'blue', padding: 20}}
        >
        <Text testID={`homeSectionText-${sectionTextId}`}>{title}</Text>
      </TouchableOpacity>
    );
}

export { HomeButton }