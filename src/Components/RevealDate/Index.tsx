import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RevealDate{
    date?: Date
}

const RevealDate: React.FC<RevealDate> = (props) => {
    
    let formatedDate: string;
    if(props.date)
        //formatedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(Date.parse(props.date.toString()));
        formatedDate = props.date.getDate + "-"+ props.date.getMonth+1 +"-"+props.date.getFullYear;
    else
        formatedDate = 'Reveal date hasn`t been decided yet.';

    return(
        <View style={styles.card}>
            <Text style={styles.Text}>
                Reveal Date: DD/MM/YYYY
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        padding: 2,
        backgroundColor: '#6cfb6254',
        borderRadius: 5
    },
    Text: {
        fontWeight: 'bold'
    }
  });

export default RevealDate;