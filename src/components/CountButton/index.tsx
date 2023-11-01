import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CountButtonProps {
    onPress: () => void;
    title: string;
    count: number;
    countTestID?: string;
}

function CountButton ({onPress, title, count, countTestID}: CountButtonProps) {
    return (
        <View style={styles.card} 
            accessibilityLabel="Count_Heads_Label"
            testID='count_button_id'
            >  
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
                testID={`countButton-${countTestID}`}
            >
                <Text style={styles.text} testID={`countLabel-${countTestID}`}>{title}</Text> 
            </TouchableOpacity>
            <Text style={styles.text} testID={`count-${countTestID}`}>{count}</Text>
        </View >
    )
}

export { CountButton }

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