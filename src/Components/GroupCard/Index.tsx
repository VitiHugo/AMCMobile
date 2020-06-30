import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


import RevealDate from '../../Components/RevealDate/Index';
import { useNavigation } from '@react-navigation/native';

interface GroupCardProps{
    _id: string,
    title: string,
    revealDate: Date,
    minValue: Number,
    maxValue: Number,
    count: number    
}

const GroupCard: React.FC<GroupCardProps> = (props) => {

    const navigation = useNavigation();

    function handleNavigateToPoints() {
        navigation.navigate('Group', {id: props._id});
    }

    return(
        <View style={styles.card}>
            <Text style={styles.title}> {props.title} </Text>
            <Text>Min. Value: R${props.minValue} </Text>
            <Text>Max. Value: R${props.maxValue} </Text>
            <Text>N. members: {props.count} </Text>
            <RevealDate date={props.revealDate} />

            <RectButton onPress={handleNavigateToPoints}>
                <Text>
                    Check
                </Text>
            </RectButton>
        </View>
    )
}
const styles = StyleSheet.create({
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
  });

export default GroupCard;