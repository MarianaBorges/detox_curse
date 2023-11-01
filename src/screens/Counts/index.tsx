import { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';
import { CountButton } from '../../components/CountButton';

function CountsScreen() {

    const [ countDays, setCountDays ] = useState(0);
    const [ countCars, setCountCars ] = useState(0);
    const [ countHeads, setCountHeads ] = useState(0);
    const [ countTips, setCountTips ] = useState(0);

    return (
      <View style={styles.content}>
        <CountButton 
            countTestID='days'
            onPress={() => setCountDays(prev => prev + 1)}
            title='Count Days'
            count={countDays} 
        />

        <CountButton 
            countTestID='cars'
            onPress={() => setCountCars(prev => prev + 1)}
            title='Count Cars'
            count={countCars} 
        />

        <CountButton 
            countTestID='heads'
            onPress={() => setCountHeads(prev => prev + 1)}
            title='Count Heads'
            count={countHeads} 
        />

        <CountButton 
            countTestID='tips'
            onPress={() => setCountTips(prev => prev + 1)}
            title='Count Tips'
            count={countTips} 
        />
      </View>
    );
}

export { CountsScreen }

const styles = StyleSheet.create({
    content:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30
    },
    card:{
        width: '80%',
        height: 70,
        alignItems: 'center',

        padding: 10,
        margin: 10,
        backgroundColor: '#e8effd'

    },
    button:{
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#346dee'
    },
    text:{
        fontSize: 18
    }
});