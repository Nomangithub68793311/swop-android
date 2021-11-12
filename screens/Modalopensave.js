import React,{useState,useRef,useEffect,useContext} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Height} from './SplashScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Button,
    View,
    Modal,
    Dimensions,
    Image,
    Platform,
    TextInput,
    ActivityIndicator,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    FlatList,
    Linking,
    ToastAndroid,
    TouchableWithoutFeedback,
    Keyboard,
    AlertIOS

  } from 'react-native';
  import { Input, Icon, Box, Center, NativeBaseProvider,
    Actionsheet,
    useDisclose, } from "native-base"    
import {Avatar,Title,Caption,Text,TouchableRipple} from 'react-native-paper'
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIco from 'react-native-vector-icons/Ionicons'
import Icofon from 'react-native-vector-icons/Fontisto'

import IconZo from 'react-native-vector-icons/Zocial'
import {NotesContext} from '../Reducers/Context'
import { PrivateValueStore } from '@react-navigation/core';
// nameIcon,title,color,handleModelcut,url,handlemodal,id,idaccount
const image2 =require('../images/background.png')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.30;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.15;
function Modalopensave({route,navigation}) {
  const { idaccount, url,id,title,src,placeholder,picname,group} = route.params;
  // const usernamref=useRef()
  // useEffect(()=>{
  //     usernamref.current.focus()
  // },[])
  const letzset=(placeholder)=>{
    switch(placeholder){
    case "Venmo  @username":
       return "@";
    case 'CashApp  $username':
       return "$";
    case 'Paypal.me Link':
         return 'https://paypal.com/paypalme/';
         case "Facebook Username":
          return 'https://facebook.com/';
       case 'Instagram Username':
          return '';
       case 'Linkedin Username':
            return 'https://linkedin.com/';
            case 'OnlyFans Username':
              return '';
           case 'Pinterest Username':
              return '';
           case 'Snapchat Username':
                return '';
                case 'Tiktok Username':
                  return '';
               case 'Twitter Username':
                  return '';
               case 'YouTube Username':
                    return 'https://youtube.com/';
                   
                   case 'Link to Spotify':
                      return 'https://spotify.com/';
                   case 'Link to Apple Music':
                        return 'https://apple.com/apple-music/';
                        case 'SoundCloud Username':
                          return 'https://soundcloud.com/';
                       case 'Website URL':
                          return 'https://';
                       case 'Clubhouse Link':
                            return 'https://joinclubhouse.com/';
                            case 'Discord Username':
                              return 'https://discord.com/';
                           case 'Linktree link':
                                return 'https://linktr.ee/';
                                case 'Netflix Link':
                                  return 'https://netflix.com/';
                               case 'Yelp Link':
                                    return 'https://yelp.com/'; 
                                    case 'Yelp Link':
                                    return 'https://yelp.com/'; 
                                case 'URL':
                                    return 'https://'; 
                                case 'Podcasts Link':
                                    return 'https://'; 
    default:
           return '';

    }

 }
    const [usernam,setUsernam]=useState(letzset(placeholder))
    const [pastename,setPastename]=useState('')
    const [userwrong,setUserwrong]=useState('')
    const [placename,setPlacename]=useState('username')
    const {state,addsocialAcc}=useContext(NotesContext)
    const[loading,setLoading]=useState(false)




    const handleopen=()=>{
      Keyboard.dismiss()
        if(pastename.length==0){
          if (Platform.OS === 'android') {
            ToastAndroid.show("You Haven't Copied Anything", ToastAndroid.SHORT);
          } else {
            AlertIOS.alert('Please Set Username');
          }
          
        }else{
          if (Platform.OS === 'android') {
            ToastAndroid.show("Successfully pasted", ToastAndroid.SHORT);
          } else {
            AlertIOS.alert('Please Set Username');
          }
        }
        
    }
    const sendDetails=async()=>{
      Keyboard.dismiss()
        if(usernam.length==0){
          if (Platform.OS === 'android') {
            ToastAndroid.show("Please Set Username", ToastAndroid.SHORT);
          } else {
            AlertIOS.alert('Please Set Username');
          }
        }else{
          setLoading(true)
            const token=await AsyncStorage.getItem('token')
            fetch(`https://travherswopapp.herokuapp.com/profile/createalink/${idaccount}`,{
          method:'POST',
          headers: {
              Authorization:"Bearer "+token,
           'Accept': 'application/json',
           'Content-Type': 'application/json'
             },
          body:JSON.stringify({
           
            "usernam":usernam,
            "placeholder":placeholder,
            "title":title,
            "src":src,
            "url":url,
           "picname":picname,
           "group":group
            
  
             })
        }).then(res=>res.json()).then(data=>{if(data.error){console.log(data.error)}else{
            
            
            addsocialAcc( data.user)
         
            navigation.navigate('Account2',{user:data.user})
            setLoading(false)
            setUsernam('');}}).catch(err=>console.log(err))
           
            
        }
       
      }

    

    return (
     
     
        
         <ImageBackground source={image2} resizeMode="cover" style={styles.image}> 
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
          <ScrollView  keyboardShouldPersistTaps="handled">
            <IconIco name="close-outline"size={40} color="#6C6C6C" style={{alignSelf:'flex-end',marginTop:
                       15,marginRight:15}}
                       onPress={()=>navigation.navigate('Account2')} />
           
             <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
             <View style={{width:viewWidth}}>
                   <Image source={src} 
             style={{height:imageHeight,width:imageWidth,borderRadius:20}} />
                   </View>
                   
             
             
             <Box w="83%" style={{marginTop:30}} >
 

 <View style={{elevation:2,backgroundColor:'white',borderRadius:10}}>
 <Input
 
value={usernam}
// ref={usernamref}
onChangeText={val=>setUsernam(val)} 

   placeholder={placeholder} // mx={4}
   _light={{
     placeholderTextColor: "#9D9D9D",
   }}
   _dark={{
     placeholderTextColor: "blueGray.50",
   }}
 />
 </View>
 </Box>      

             <Text style={{textAlign:'center',fontFamily:'Alegreya-ExtraBold',fontSize:20}}>{userwrong}</Text>
             <View style={{justifyContent:'center',alignItems:'center',marginVertical:5}}>
                
                   {loading?
                   <TouchableOpacity  style={{alignItems: 'center',height:56,marginHorizontal:3,
                   justifyContent: 'center',width:150 ,backgroundColor:'#3C3B3B',borderRadius:10}}> 
                          <ActivityIndicator size="large" color="black"/>
                       </TouchableOpacity>
                   :<TouchableOpacity onPress={sendDetails} style={{alignItems: 'center',height:56,marginHorizontal:3,
    justifyContent: 'center',width:150 ,backgroundColor:'#3C3B3B',borderRadius:10}}>
                 <Text style={{textAlign:'center' ,color:'#FCFCFF',fontSize:16,fontFamily:'Poppins-Regular'}}>Save</Text>
                 </TouchableOpacity>}
             </View>
             </View>
           </ScrollView>
             </KeyboardAwareScrollView>
             </ImageBackground> 
             
           
          
    )
}
const styles=StyleSheet.create({
    image: {
        width:"100%",
        height:"100%"
       },
})

export default Modalopensave