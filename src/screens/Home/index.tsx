import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { HomeButton } from '../../components/HomeButton';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        testID='button-details'
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      < HomeButton
        sectionTextId="counters"
        title='Count'
        testID='button-counts'
        onPress={() => navigation.navigate('Counts')}
        />

      < HomeButton
        sectionTextId="cities"
        title='Cities'
        testID='button-citites'
        onPress={() => navigation.navigate('Cities')}
        />

      < HomeButton
        sectionTextId="members"
        title='Members'
        testID='button-members'
        onPress={() => navigation.navigate('Members')}
       />
       < HomeButton
        sectionTextId="peoples"
        title='peoples'
        testID='button-peoples'
        onPress={() => navigation.navigate('ListPeople')}
       />
       < HomeButton
        sectionTextId="toggle"
        title='Toggle'
        testID='button-toggle'
        onPress={() => navigation.navigate('toggle')}
       />
    </View>
  );
}

export { HomeScreen };