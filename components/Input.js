import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 15,
        flex: 1
    },
    view: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },
})

export default ({ placeholder, onChangeText, value }) =>
    <View style={styles.view}>
        <TextInput 
            style={styles.input} 
            placeholder={placeholder} 
            onChangeText={onChangeText} 
            value={value}>
        </TextInput>
    </View>