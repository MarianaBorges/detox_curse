import { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function AddPessoa({ navigation }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('')

    async function savePeople(){
        try {
            const people = [{
                id: new Date().getMilliseconds(),
                name: name,
                age: age,
                phone: phone,
                email: email
            }]
            
            const value = await AsyncStorage.getItem('myApp-people');
            if (value !== null) {
                const newValue = JSON.parse(value)
                const newPeoples = [...newValue, ...people];
                await AsyncStorage.setItem('myApp-people', JSON.stringify(newPeoples))
            } else {
                const jsonValue = JSON.stringify(people);
                await AsyncStorage.setItem('myApp-people', jsonValue);
            }
            navigation.navigate('ListPeople')
          } catch (e) {
            console.error('DEU ERRRRRROOOOOO');
          }
    }

    return (
      <View style={styles.content}>
        <View>
            <Text>Nome</Text>
            <TextInput  
                testID='name-input'
                onChangeText={setName}
                value={name}
                placeholder="nome"/>
        </View>
        <View>
            <Text>Idade</Text>
            <TextInput
                testID='age-input'
                onChangeText={setAge}
                value={age}
                placeholder="idade" 
            />
        </View>
        <View>
            <Text>Telefone</Text>
            <TextInput 
                testID='phone-input'
                onChangeText={setPhone}
                value={phone}
                placeholder="idade"/>
        </View>

        <View>
            <Text>Email</Text>
            <TextInput 
                testID='email-input'
                onChangeText={setEmail}
                value={email}
                placeholder="email"/>
        </View>

        <Button testID='saveButton' title='Salvar' onPress={savePeople}/>
      </View>
    );
}

export default AddPessoa;

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