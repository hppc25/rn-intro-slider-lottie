import React from 'react'

import Lottie from 'lottie-react-native'
import Onboarding from 'react-native-onboarding-swiper'
import rocket from '../../assets/rocket.json'
import foodDelivery1 from '../../assets/food-delivery-1.json'
import foodDelivery2 from '../../assets/food-delivery-2.json'
import foodDelivery3 from '../../assets/food-delivery-3.json'

//https://lottiefiles.com/orbitstudio


export default function CustomOnboarding() {
    return (
        <Onboarding
            onDone={() => console.log('done')}
            imageContainerStyles={{ paddingHorizontal: '10%' }}
            pages={listOnboarding}
        />
      
    )
}

const listOnboarding = [


    {
        backgroundColor: '#fff',
        image: <Lottie source={foodDelivery2} style={{width: '100%' }} resizeMode="contain" autoPlay loop></Lottie>,
        title: 'Choose A Tasty Dish',
        subtitle: 'A accumsan nisi mauris ac eros. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    },

    {
        backgroundColor: '#fff',
        image: <Lottie source={foodDelivery3} style={{width: '100%' }} resizeMode="contain" autoPlay loop></Lottie>,
        title: 'Pick Up Or Delivery',
        subtitle: 'A accumsan nisi mauris ac eros. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    },

    {
        backgroundColor: '#fff',
        image: <Lottie source={foodDelivery1} style={{width: '100%' }} resizeMode="contain" autoPlay loop></Lottie>,
        title: 'Good Service',
        subtitle: 'Vestibulum volutpat pretium libero. Phasellus a est. Aenean commodo ligula eget dolor. ',
    },


]