import { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';

function CountsScreen({ navigation }) {

    const [ countDays, setCountDays ] = useState(0);
    const [ countCars, setCountCars ] = useState(0);
    const [ countHeads, setCountHeads ] = useState(0);
    const [ countTips, setCountTips ] = useState(0);

    return (
      <View style={styles.content}>
        <View style={styles.card} accessibilityLabel="Count_Days_Label">
            <TouchableOpacity
                style={styles.button}
                onPress={() => setCountDays(prev => prev + 1)}
            >
                <Text style={styles.text}>Count Days</Text> 
            </TouchableOpacity>
            <Text style={styles.text}>{countDays}</Text>
        </View>
        
        <View style={styles.card} accessibilityLabel="Count_Cars_Label">
            <TouchableOpacity
                style={styles.button}
                onPress={() => setCountCars(prev => prev + 1)}
            >
                <Text style={styles.text}>Count Cars</Text> 
            </TouchableOpacity>
            <Text style={styles.text}>{countCars}</Text>
        </View>

        <View style={styles.card} accessibilityLabel="Count_Heads_Label">  
            <TouchableOpacity
                style={styles.button}
                onPress={() => setCountHeads(prev => prev + 1)}
            >
                <Text style={styles.text}>Count Heads</Text> 
            </TouchableOpacity>
            <Text style={styles.text}>{countHeads}</Text>
        </View >

        <View style={styles.card} accessibilityLabel="Count_Tips_Label">
            <TouchableOpacity
                style={styles.button}
                onPress={() => setCountTips(prev => prev + 1)}
            >
                <Text style={styles.text}>Count Tips</Text> 
            </TouchableOpacity>
            <Text style={styles.text}>{countTips}</Text>
        </View>

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
        backgroundColor: 'red'

    },
    button:{
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    },
    text:{
        fontSize: 18
    }
});