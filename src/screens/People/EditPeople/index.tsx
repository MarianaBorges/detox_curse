import { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function EditPeople({ navigation, route }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    async function updatePeople(){
        try {
            const newPeople = {
                id: id,
                name: name,
                age: age,
                phone: phone,
                email: email
            }
            
            const value = await AsyncStorage.getItem('myApp-people');
            if (value !== null) {
                const peoples = JSON.parse(value);

                const newPeoples = peoples.map(( people : any ) => {
                    if(people.id === id ) {
                        return newPeople;
                    }
                });

                await AsyncStorage.setItem('myApp-people', JSON.stringify(newPeoples))
                navigation.navigate('ListPeople');
            } 
          } catch (e) {
            console.error('Deu ruim');
          }
    }

    useEffect(() => {
        if (route.params?.people) {
            const people = route.params?.people;
            setName(people.name);
            setAge(people.age);
            setPhone(people.phone);
            setEmail(people.email);
            setId(people.id);
          }
    }, [route.params?.people])

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

        <Button testID='saveButton' title='Salvar' onPress={() => updatePeople()}/>
      </View>
    );
}

export default EditPeople;

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