import React,{useState} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Height} from './SplashScreen'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Button,
    View,
    Modal,
    Linking,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
  } from 'react-native';

import {Avatar,Title,Caption,Text,TouchableRipple} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcons from 'react-native-vector-icons/MaterialIcons'
import {Surface} from 'react-native-paper'
import IconQR from 'react-native-vector-icons/Ionicons'
const image2 =require('../images/background.png')

function About({navigation}) {
    return (
        <ImageBackground source={image2} resizeMode="cover" style={styles.image}> 
  <ScrollView>
        <View  >
        <View >
         <Image source={require('../images/swopp.png')} style={{width: 180,marginTop:30,resizeMode: 'stretch',alignSelf:'center',
                height: 45}} /> 
          
         </View>
       
        
         <Text style={{textAlign:'center',fontSize:16,color:'#3C3B3B',marginHorizontal:30, fontFamily:'Poppins-Regular',marginTop:30}}>
         SWOP is the digital identity in a tangible world. It's the all in one solution for the modern Entrepreneur.  Customize up to 5 profiles under your parent identity. These profiles have variety use cases, including a digital business card that you can customize, a dog tag for your four legged child, a lead generator for people to fill out their information on checkout, a direct link to socials, even send payments or receive payments with a tap! SWOP is connecting the digital world one tap at a time.
               
                 
                 </Text>
        
        <TouchableOpacity onPress={()=>navigation.navigate('Terms')} style={{flexDirection:'row',borderTopWidth:2,marginTop:25,alignItems:'center', borderTopColor:'#E7E6E6',height:80}}>
        
        <Icon name="newspaper-variant-outline" color='#536DEF' size={30} style={{marginHorizontal:10}}/>
            <Text  style={{marginHorizontal:10,fontFamily:'Poppins-SemiBold'}}>
             Terms & Condition
            </Text>
         <MIcons  name="keyboard-arrow-right" color='grey'size={40} style={{position:'absolute',right:10}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Privacy')}  style={{flexDirection:'row',borderTopColor:'#E7E6E6',alignItems:'center',borderBottomColor:'#E7E6E6' ,borderTopWidth:2,borderBottomWidth:2,height:80}}>
        <Icon   style={{marginHorizontal:10}}name="newspaper-variant-outline"  color='#536DEF'size={30} />
            <Text  style={{marginHorizontal:10,fontFamily:'Poppins-SemiBold'}}>
           Privacy Policy
            </Text>
            <MIcons  name="keyboard-arrow-right" color='grey'size={40} style={{position:'absolute',right:10}}/>
        </TouchableOpacity>              
        <View style={{flexDirection:"row" ,justifyContent:'center',alignItems:'center',marginTop:25}}>
           <Icon onPress={()=> Linking.openURL('https://facebook.com') } style={{marginHorizontal:5}} name="facebook" color='#536DEF' size={30}/>  
           <Icon onPress={()=> Linking.openURL('https://swopme.app')}  style={{marginHorizontal:5}}name="instagram" color='#536DEF'size={30} />  
           <Icon onPress={()=> Linking.openURL('https://swopme.app')} style={{marginHorizontal:5}} name="twitter" color='#536DEF' size={30}/> 
           <Icon onPress={()=> Linking.openURL('https://www.linkedin.com/in/swop-app-87323a220')}   style={{marginHorizontal:5}}name="linkedin" color='#536DEF'size={30} />   
           <Icon onPress={()=> Linking.openURL('https://www.youtube.com/channel/UCjK7eFslL2ag6def784BMZA')}   style={{marginHorizontal:5}}name="youtube" color='#536DEF'size={30} />  
           <Icon  onPress={()=> Linking.openURL('https://pin.it/1na0lQ7')}  style={{marginHorizontal:5}}name="pinterest" color='#536DEF'size={30} />  
           <Icon onPress={()=> Linking.openURL('https://swopme.app')}  style={{marginHorizontal:5}}  name="web" color='#536DEF'size={30} />  
        </View>   
        <Text style={{textAlign:'center',fontSize:16,color:'#3C3B3B',fontFamily:'Poppins-Regular',marginBottom:80}}>
                 {"\n"}Copyrigth @swopme.co
                 {"\n"} Powered by Herron Enterprises LLC</Text>
        
    </View>
    </ScrollView>
    </ImageBackground>   
    )
}
const styles=StyleSheet.create({
    image: {
        width:"100%",
        height:"100%"
       }
 }) 
export default About
