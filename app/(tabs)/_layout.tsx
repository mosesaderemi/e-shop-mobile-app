import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function _layout() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>_layout</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})