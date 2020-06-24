import React from 'react'
import {Text, TouchableOpacity, StyleSheet } from 'react-native'
import {purple} from '../utils/colors'

//Try to pass the style into the props
export default function TextButton ({children, onPress, style={} }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <Text style={[styles.reset, style]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    reset:{
        textAlign: 'center',
        color: purple,
        fontSize: 26,
    }
})