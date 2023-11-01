import React, { useContext } from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import MemberContext from '../../context/MemberContext';
import {FontAwesome} from '@expo/vector-icons';
import MemberFields from '../../components/memberComponents/MemberFields';
import {formatDate} from '../../utils/date';
import moment from 'moment';

const ShowMemberScreen = ({ navigation }) => {
  // const { data } = useContext(MemberContext);

  const member = {
    id: '0001',
    name: 'Teste',
    surname: 'Teste',
    dateOfBirth: new Date(),
    startDay: 'saturday',
    email: 'test@email.com',
    addressLineOne: 'teste',
    addressLineTwo: 'teste',
    city: 'Teste',
    postcode: '',
    country: 'Brasil',
    startDate: '17-03-2013',
    startTime: '16:37'
  }

  // const member1 = data.find((member) => member.id === navigation.getParam('id'));
  return (
    <ScrollView testID='showMemberBackground'>
      <SafeAreaView>
        <MemberFields labelText="ID" fieldValue={member.id} fieldTestId="id"/>
        <MemberFields labelText="Name" fieldValue={member.name} fieldTestId="name"/>
        <MemberFields labelText="Surname" fieldValue={member.surname} fieldTestId="surname"/>
        <MemberFields
          labelText="Date of Birth"
          fieldValue={formatDate(member.dateOfBirth)}
          fieldTestId="date"
        />
        <MemberFields labelText="Start Day" fieldValue={member.startDay} fieldTestId="startDay"/>
        <MemberFields labelText="Email" fieldValue={member.email} fieldTestId="email"/>
        <MemberFields
          labelText="Address Line One"
          fieldValue={member.addressLineOne}
          fieldTestId="addressLineOne"
        />
        <MemberFields
          labelText="Address Line Two"
          fieldValue={member.addressLineTwo}
          fieldTestId="addressLineTwo"
        />
        <MemberFields labelText="City" fieldValue={member.city} fieldTestId="city"/>
        <MemberFields labelText="Postcode" fieldValue={member.postcode} fieldTestId="postcode"/>
        <MemberFields labelText="Country" fieldValue={member.country} fieldTestId="country"/>
        <MemberFields
          labelText="Start Date"
          fieldValue={member.startDate}
          fieldTestId="startDate"
        />
        <MemberFields
          labelText="Start Time"
          fieldValue={member.startTime}
          fieldTestId="startTime"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

ShowMemberScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');

  return {
    headerTitle: `Member ${id}`,
    headerTitleAlign: 'center',
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('EditMember', {id})}>
        <FontAwesome style={styles.editIcon} name="pencil" size={25} testID='editMemberIcon' />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  editIcon: {
    paddingRight: 5,
  },
});

export default ShowMemberScreen;