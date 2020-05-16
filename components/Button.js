import React from 'react'
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007892',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 4
    },
    text: {
        color: '#fff',
        fontSize: 18
    }
})

export default ({ title, onPress }) =>
    <TouchableHighlight onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
