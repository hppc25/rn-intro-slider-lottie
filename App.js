import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Lottie from 'lottie-react-native'

import rocket from './assets/rocket.json'


export default function App() {
  return (
    <SafeAreaView style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
     <Lottie source={rocket} resizeMode="contain" autoPlay autoSize loop></Lottie>
    </SafeAreaView>
  )
}
