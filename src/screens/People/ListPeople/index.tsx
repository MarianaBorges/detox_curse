import { useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TouchableOpacityProps,
    Button,
    FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
    testID: string;
    onUpdate: () => void;
    onDelete: () => void;
    item: {
        id: string;
        name: string;
        age: string;
        phone: string;
        email: string;
    }
}

const Item = ({testID, onDelete, onUpdate, item, ...rest}: Props) => (
  <View style={{ marginBottom: 10, width: '100%'}}>
    <TouchableOpacity onPress={onUpdate}>
      <Text testID={testID}>{item.name} - {item.age} - {item.phone} - {item.email}</Text>
    </TouchableOpacity>
    <TouchableOpacity testID={`delete-${testID}`} style={{padding: 5, borderWidth:1, alignItems: 'center', justifyContent: 'center'}} onPress={onDelete}>
      <Text>Apagar</Text>
    </TouchableOpacity>
  </View>
  );

function ListPessoa({ navigation }) {

    const [data, setData] = useState<Props['item'][]>([]);

    async function getPeople(){
      try {
          const value = await AsyncStorage.getItem('myApp-people');
          const formattedValue = value !== null ? JSON.parse(value):[];
          console.log('valor formatado',formattedValue);
          setData(formattedValue);
        } catch (e) {
          console.error('DEu erro', e)
        }
     }

    async function deletePeople(item: Props['item']) {
      try {
        const newData = data.filter(d => d.id !== item.id)
        setData(newData);
        console.log(newData);
        
        if (newData.length === 0) {
          await AsyncStorage.removeItem('myApp-people')
        } else {
            const jsonValue = JSON.stringify(newData);
            await AsyncStorage.setItem('myApp-people', jsonValue);
        }
      } catch (e) {
        console.error('Deu erro', e)
      }
    }

    async function clear() {
      try {
        const value = await AsyncStorage.getItem('myApp-people');
        console.log(value);
        if (value !== null) {
          await AsyncStorage.removeItem('myApp-people')
        }  
      } catch (error) {
        console.error(error)
      }
    }

    return (
      <View testID='people-screen' style={styles.content}>

        <FlatList
            testID='listScrollview'
            data={data}
            renderItem={({index, item}) =>  
              <Item 
                testID={`peopleItem-${index}`} 
                item={item} 
                onUpdate={() => navigation.navigate({name:'EditPeople', params: {people: item}})}
                onDelete={() => deletePeople (item)}  
              />}
            keyExtractor={({id}) => id}
            ListEmptyComponent={() => (<Text testID='emptyList'>Nenhuma Pessoa</Text>)}
            />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button testID='updateButton' title='Atualizar' onPress={() => getPeople()}/>
          
          <Button testID='addButton' title='adicionar' onPress={() => navigation.navigate('People')}/>

          <Button testID='clearButton' title='limpar storage' onPress={() => clear()}/>
        </View>
      </View>
    );
}

export { ListPessoa }

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