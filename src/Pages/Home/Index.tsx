import React, { useContext } from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';
import { useAuth } from '../../Contexts/auth';
import GroupCard from '../../Components/GroupCard/Index';
import Header from '../../Components/Header/Index';

const Home: React.FC = () => {
  const { signOut, user, groups } = useAuth();

  function handleSignOut() {
    signOut();  
  }

  return (
    <>
      <Header />
      <Button title="Sign Out" onPress={handleSignOut} />
      <View style={styles.container}>
        <Text>My Groups</Text>
        <View style={styles.cardContainer}>
          {groups?.map(group => {
              return (
                <GroupCard
                    _id={group._id}
                    title={group.title} 
                    revealDate={group.revealDate} 
                    minValue={group.minValue} 
                    maxValue={group.maxValue}
                    count={group.members.length}
                />
            )
          })}
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
  title: {
    fontWeight: 'bold'
  },
  cardContainer: {
    width: 300,
    height: 'auto',
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff0a',
    borderRadius: 5,
  },
});

export default Home;