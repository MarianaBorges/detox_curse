import React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import { europe, usacanada, asia } from '../../data/countryData';

interface Props {
  title: string;
  listTestId: string;
}

const ImageComponents = ({title, listTestId}: Props) => {
  const cities =
    title === 'Europe' ? europe : title === 'Asia' ? asia : usacanada;

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText} testID={`continentLabel-${listTestId}`}>{title}</Text>
      </View>
      <FlatList
        testID={`imageBackground-${listTestId}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(city) => city.name}
        data={cities}
        renderItem={({item, index}) => {
          return (
            <View style={styles.imageContainer}>
              <Text style={styles.imageText} testID={`imageTitle-${listTestId}-${index}`}>{item.name}</Text>
              <Image
                style={styles.image}
                resizeMode={'cover'}
                source={item.imagePath}
                testID={`image-${listTestId}-${index}`}
              />
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  headerText: {
    fontSize: 25,
  },
  imageContainer: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  imageText: {
    fontSize: 20,
    marginBottom: 5,
    alignSelf: 'center',
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default ImageComponents;