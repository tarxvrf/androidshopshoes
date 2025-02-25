import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams} from 'expo-router/build/hooks'

const Settings = () => {
  const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>Settingnyas {id}</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})