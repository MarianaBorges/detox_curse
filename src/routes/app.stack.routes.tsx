import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from '../screens/Details';
import { HomeScreen } from '../screens/Home';
import { CountsScreen } from '../screens/Counts';
import { ImagesScreen } from '../screens/Images';
import { MemberListScreen } from '../screens/Members/MemberListScreen';
import AddMemberScreen from '../screens/Members/AddMemberScreen';
import EditMemberScreen from '../screens/Members/EditMemberScreen';
import ShowMemberScreen from '../screens/Members/ShowMemberScreen';
import AddPessoa from '../screens/People/AddPessoa';
import { AddButton } from '../screens/Members/MemberListScreen';
import { ListPessoa } from '../screens/People/ListPeople';
import EditPeople from '../screens/People/EditPeople';
import Toggle from '../screens/toggle/toggle';

const Stack = createNativeStackNavigator();


function AppRoutes() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Counts" component={CountsScreen} />
          <Stack.Screen 
            name="Cities" 
            component={ImagesScreen}
            options={() => ({
              title: "Cities",
              headerTitleAlign: 'center'
            })}
          />

          <Stack.Screen 
            name="Members" 
            component={MemberListScreen} 
            options={({ navigation }) => ({
              title: 'Members',
              headerTitleAlign: 'center',
              headerRight: () => (
                <AddButton navigate={() => navigation.navigate('AddMember')} />
              ),
            })}
          />

          <Stack.Screen name="AddMember" component={AddMemberScreen}/>
          <Stack.Screen name="EditMember" component={EditMemberScreen}/>
          <Stack.Screen name="ShowMember" component={ShowMemberScreen}/>
          <Stack.Screen name="People" component={AddPessoa}/>
          <Stack.Screen name="ListPeople" component={ListPessoa}/>
          <Stack.Screen name="EditPeople" component={EditPeople}/>
          <Stack.Screen name="toggle" component={Toggle}/>

        </Stack.Navigator>
    );
}

export { AppRoutes }