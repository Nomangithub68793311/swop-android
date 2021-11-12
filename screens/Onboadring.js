import React,{useEffect,useState} from 'react'
import {View,Text,Image,StyleSheet,ImageBackground,Linking,Alert} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const image2 =require('../images/SplashScreen.png')

function Onboadring({navigation}) {

useEffect(()=>{

  const getUrl=async()=>{
    // AsyncStorage.getItem('token').then((token)=>{if(token){navigation.replace('Profile')}else{
    //     navigation.replace('Instruction')}}).catch(err=>console.log('error'))


    const initialUrl=await Linking.getInitialURL();
    console.log("initialUrl",initialUrl)
    if(initialUrl){
      navigation.navigate('Accountpage',{initialUrl:initialUrl})


    }

      else{
        AsyncStorage.getItem('token').then((token)=>{if(token){navigation.replace('Profile')}else{
        
          navigation.replace('Instruction')}}).catch(err=>console.log('error'))
       }
           
    
  }
  // getUrl();
  setTimeout(()=>{
    getUrl();
  },3000)
},[])


    return (

//         <Onboarding
//         // onSkip={ () => navigation.replace('SplashScreen')}
//         // onDone={ () => navigation.replace('SplashScreen')}

//   pages={[
//     {
//       backgroundColor:'',
//       image: <Image style={{height:"100%",width:"100%"}}source={require('../images/SplashScreen.png')} />,
//       title: '',
//       subtitle: '',
//     }
   
     
//   ]}
// />
<ImageBackground source={image2} resizeMode="cover" style={styles.image}> 
</ImageBackground>  
    )
}
const styles=StyleSheet.create({
  image: {
    width:"100%",
    height:"100%"
   },


})
export default Onboadring