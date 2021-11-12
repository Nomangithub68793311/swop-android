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
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
  } from 'react-native';

import {Avatar,Title,Caption,Text,TouchableRipple} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconButton from 'react-native-vector-icons/Ionicons'
import {Surface} from 'react-native-paper'
import IconQR from 'react-native-vector-icons/Ionicons'
const image2 =require('../images/background.png')

function Support() {
    return (
      <ImageBackground source={image2} resizeMode="cover" style={styles.image}> 

       <View  style={{marginTop:30}} >
           <View>
            <Image source={require('../images/swopp.png')} style={{width: 180,marginTop:30,resizeMode: 'stretch',alignSelf:'center',
                   height: 45}} /> 
            </View>
            <View style={{marginTop:50,alignItems:'center'}}>
            <Text style={{textAlign:'center',fontSize:14,fontFamily:'Poppins-Bold',color:'#000000' }}>
            SWOP Help Center           
             </Text>
            {/* <Text style={{textAlign:'center',fontSize:14,fontFamily:'Poppins-Bold',color:'#000000' ,marginTop:-10}}>
         swop.me@gmail.com 
            </Text> */}
           
            <Text style={{textAlign:'center',fontSize:18,fontFamily:'Poppins-SemiBold',color:'#000000' ,marginTop:10}}>
            How Can We Help You?           
             </Text>

            <Text style={{fontFamily:'Poppins-Regular',textAlign:'center',fontSize:16,color:'#3C3B3B',marginTop:15,marginHorizontal:30}}>
                Welcome to SWOP Support, We're here to help you. Our official support and customer service are always free. If you have any query please feel free to email us at          
               </Text>
                 <Text style={{fontFamily:'Poppins-Bold',textAlign:'center',fontSize:16,color:'#3C3B3B',marginHorizontal:30}}>
                 "support@swopme.co"
                   </Text>          
           
            </View>
           
       </View>
       </ImageBackground> 
    )
}

const styles=StyleSheet.create({
  image: {
      width:"100%",
      height:"100%"
     }
}) 
export default Support