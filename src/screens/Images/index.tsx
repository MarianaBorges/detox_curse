import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ImageComponents from '../../components/Images';
import {FontAwesome5} from '@expo/vector-icons';

function ImagesScreen () {
  return (
    <SafeAreaView style={{marginBottom: 50}}>
      <ScrollView showsVerticalScrollIndicator={false} testID='citiesBackground'>
        <ImageComponents title="Europe" listTestId='europe'/>
        <ImageComponents title="USA/Canada" listTestId='usa/canada'/>
        <ImageComponents title="Asia" listTestId='asia'/>
      </ScrollView>
    </SafeAreaView>
  );
};

ImagesScreen.navigationOptions = {
  headerTitle: 'Cities',
  headerShown: true,
  headerTitleAlign: 'center',
  title: 'Cities',
  tabBarIcon: <FontAwesome5 name="city" size={20} />,
  tabBarAccessibilityLabel: 'Cities',
};

export {ImagesScreen};