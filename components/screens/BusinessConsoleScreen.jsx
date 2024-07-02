import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Icon} from "react-native-elements";

export default function BusinessConsoleScreen() {
  return (
    <View style={styles.container}>
      <Text>Business Console Screen</Text>
    </View>
  )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})