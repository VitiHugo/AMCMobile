import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';
import { useAuth } from '../../Contexts/auth';
import Header from '../../Components/Header/Index';
import api from '../../Services/api';
import RevealDate from '../../Components/RevealDate/Index';
import { useNavigation , useRoute } from '@react-navigation/native';
import Routes from '../../Routes/Index';


interface Group {
    _id: string,
    administrator: {
        name: string,
        username: string,
        email: string
    },
    title: string,
    revealDate: Date,
    minValue: number,
    maxValue: number,
    revealPlaceLatitude: number,
    revealPlaceLongetude: number,
    members: {
        _id: string,
        name: string,
        username: string,
        email: string,
        profilePic: string
    }[]
}

const Group: React.FC = () => {

  const [group, setGroup] = useState<Group>();
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);

  const { signOut } = useAuth();

  const navigation = useNavigation();
  const route = useRoute();

  //const name = navigation.para;


  function handleSignOut() {
    signOut();  
  }

  useEffect(() => {
    api.get<Group>(`/Group/getOne/`)
    .then(response => {
    setGroup(response.data);

    if(group?.administrator.username == localStorage.getItem('username')){
        setIsAdmin(true);
        }
    });
    }, [{}]);

  return (
    <>
      <Header />
      <Button title="Sign Out" onPress={handleSignOut} />
      <View style={styles.container}>
        <Text style={styles.title}> {group?.title} </Text>
        <View style={styles.card}>
            <Text>Min. Value: R${group?.minValue} </Text>
            <Text>Max. Value: R${group?.maxValue} </Text>
            <RevealDate date={group?.revealDate} />
        </View>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#724a36'
    },
    card: {
        width: 200,
        height: 'auto',
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor:'#C6FFF9',
        borderRadius: 5,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold'
    },
});

export default Group;