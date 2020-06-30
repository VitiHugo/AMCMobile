import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useAuth } from '../../Contexts/auth';

import RevealDate from '../../Components/RevealDate/Index';
import { useNavigation } from '@react-navigation/native';

const Header: React.FC = () => {
    const {user} = useAuth();

    const navigation = useNavigation();

    function handleNavigateToPoints() {
        navigation.navigate('Points');
    }

    return(
        <View style={styles.header}>
            <View>
                <Text style={styles.title}>Amigo Chocolate</Text>
            </View>
            <View style={styles.userInfo}>
                <Text>{user?.name}</Text>
                <Image style={styles.profilePic} source={require('../../Assets/img/user-icon.png')} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#724a36'
    },
    header: {
        height: 75,
        paddingTop: 25,
        paddingLeft:5,
        paddingRight:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#C6FFF9'
    },
    card: {
        width: 200,
        height: 'auto',
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor:'#C6FFF9',
        borderRadius: 5,
    },
    title: {
        fontWeight: 'bold'
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePic: {
        width: 40,
        height: 40,
        marginLeft: 8,
    },
  });

export default Header;