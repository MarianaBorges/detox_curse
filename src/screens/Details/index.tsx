import { View, Text, Button } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
            title="Go to Details... again"
            onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
}

export { DetailsScreen }