import React,{useEffect,useState} from 'react'
import {View,Text,Image,StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Onboadring({navigation}) {



    return (
        <Onboarding
        bottomBarHighlight ={true}
       
        showDone={false}
        showNext ={false}
        showSkip ={false}
        showPagination={false}
        onSkip={ () => navigation.navigate('Profile')}
        onDone={ () => navigation.navigate('Profile')}

        pages={[
          {
            backgroundColor: 'white',
            image: <Image style={{height:'100%',width:"100%",backgroundColor: 'teal'}}source={require('../images/support1.jpg')} />,
            title: '',
            subtitle: '',
          },
          {
            backgroundColor: 'white',
            image: <Image style={{height:"100%",width:"100%"}}source={require('../images/support2.jpg')} />,
            title: '',
            subtitle: '',
          },
          {
            backgroundColor: 'white',
            image: <Image style={{height:"100%",width:"100%"}}source={require('../images/support2.jpg')} />,
            title: '',
            subtitle: '',
          }
         
           
        ]}
/>
    )
}

export default Onboadring