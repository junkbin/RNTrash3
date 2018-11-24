import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class First extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textify}>
                    Hello World
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent:'center',
        alignItems : 'center',
        backgroundColor: 'tomato'
    },

    textify : {
        fontSize : 35,
        fontFamily : 'monospace',
        color: 'white'
    }
});