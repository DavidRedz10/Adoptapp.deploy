import React from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Button, ActivityIndicator, Alert } from 'react-native'

const SettingsScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    )
}  

export default SettingsScreen