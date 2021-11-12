import React,{useState,useRef,useEffect,useContext} from 'react'
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
    TextInput,
    Keyboard,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    ActivityIndicator,
    StatusBar,
    FlatList,
    ToastAndroid,
    Platform,
    AlertIOS,
    Linking,Alert
  } from 'react-native';
  import { Input, Icon, Box, Center, NativeBaseProvider,
    Actionsheet,
    useDisclose, } from "native-base" 
// import NfcManager, {Ndef, NfcTech} from 'react-native-nfc-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Avatar,Title,Caption,Text,TouchableRipple} from 'react-native-paper'
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIco from 'react-native-vector-icons/Ionicons'
import Icofon from 'react-native-vector-icons/Fontisto'

import IconZo from 'react-native-vector-icons/Zocial'
import {NotesContext} from '../Reducers/Context'
import {Surface} from 'react-native-paper'
import ModalSocial from './ModalSocial'
import ContactModalcreate from './ContactModalcreate'
import { color } from 'react-native-reanimated';

const image =require('../images/background.png')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.28;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.15;
function Linkmodal({navigation,route}) {
  
  const {item,idd}=route.params
  
  
  const getDetail=(type)=>{
    if(route.params){
      switch(type){
        case "username":
          return route.params.item.usernam;
        case "placename":
          return `${route.params.item.title} username`;
          case "color":
            return route.params.item.color;    
        default:
          return ""  
  }
    } 
    return ""
}   
    const {state,addsocialAcc}=useContext(NotesContext)      
    const [username,setUsername]=useState(getDetail('username'))
    const [placename,setPlacename]=useState(getDetail('placename'))
    const [userwrong,setUserwrong]=useState('')
    const[newname,setNewname]=useState('')
    const[color,setColor]=useState(getDetail('color'))
    const[socialid,setSocialid]=useState('')
    const [token,setToken]=useState(item.active)
    const[tokenhas,setTokemhas]=useState('')
    const[activeid,setActiveid]=useState('');
    const[oldtoken,setOldtoken]=useState();
    const[oldtokenid,setOldtokenid]=useState('');
    const[loading,setLoading]=useState(false)

//     console.log("yes hi",token)

// console.log("id",item._id)

  const handlepress=(num)=>{
    
    
    fetch('https://travherswopapp.herokuapp.com/updatedirecton',{
      method:'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
      body:JSON.stringify({  
       "active":!token,
       "id":num,
       "idd":idd
      })

      }).then(res=>res.json()).then((data)=>{
        if(data.errorac){
          setTokemhas(data.errorac)
        }
        else{
          
          console.log('err' ,data.id2)
          setToken(data.user.active);
          setActiveid(data.user._id)
          setSocialid(data.socialuser._id)
         setOldtoken(data.active)
          data.id2?setOldtokenid(data.id2):''
          console.log("yoy",data.active)
          
        }
      })
      .catch(err=>console.log(err))

    
   
  }
  const handlepressoff=(num)=>{
    
    fetch('https://travherswopapp.herokuapp.com/updatedirectonoff',{
      method:'POST',
      headers: {
       'Accept': 'application/json', 
       'Content-Type': 'application/json'
     },
      body:JSON.stringify({  
       "active":!token,
       "id":num,
       "idd":idd,
       "socailid":socialid 
       
      })

      }).then(res=>res.json()).then((data)=>{
        if(data.error){
          console.log("yes hi",data.error)
        }
        else{
          console.log(data.user)
          setToken(data.user.active)
          setActiveid(data.user._id)
         
          // console.log("after off",token)
          // console.log("after off",token2)
        }
      })
      .catch(err=>console.log(err))

    
   
  }
 
  
    const handleopen=()=>{
        if(usernam.length==0){
            setUserwrong('you must have set username') 
        }else{
            Linking.openURL(`${url}${item.usernam}` ) 
            setUsernam('')

            
        }
        
    }

  
    const sendDetails= async()=>{
      Keyboard.dismiss()
    if(username.length<1){
      if (Platform.OS === 'android') {
        return  ToastAndroid.show("Username can't be empty", ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("No Fields should be empty");
      }
      
    }
     else {
      setLoading(true)
       
      fetch("https://travherswopapp.herokuapp.com/profile/editlink",{
        method:'POST',
        headers: {
            Authorization:"Bearer "+await AsyncStorage.getItem('token'),
         'Accept': 'application/json',
         'Content-Type': 'application/json'
           },
        body:JSON.stringify({
         "usernam":username,
         "id":item._id,
         "idd":idd

           })
      }).then(res=>res.json()).then(data=>{ if(data.error){
       
        setUsername('')
       
        console.log(data.error)
        }
       
         else{
                  console.log('yes hai',data.user)
                  
                  
                  setLoading(false)
                  // addsocialAcc(data.useracc);
                  navigation.navigate('Account2',{useacc:data.user})
                  if (Platform.OS === 'android') {
                    return ToastAndroid.show("Successfully Editted", ToastAndroid.SHORT);
                  } else {
                    AlertIOS.alert("No Fields should be empty");
                  }  
                  setUsername('');
                
         
      
        
        
       }}).catch(err=>console.log(err))}
      
    } 
    
    return (
         
              <ImageBackground source={image} resizeMode="cover" style={styles.image}>

<KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
            <ScrollView  keyboardShouldPersistTaps="handled"> 
        <IconIco name="close-outline" size={50} style={{alignSelf:'flex-end',marginTop:
                       15,marginRight:15}}
                   onPress={()=>navigation.navigate('Account2')} />
       
         <View style={{alignItems:'center'}}>
               
         <View style={{width:viewWidth}}>
                   <Image source={item.src} 
             style={{height:imageHeight,width:imageWidth,borderRadius:20}} />
                   </View>
               
         
         {/* <View  style={{justifyContent:'center',alignItems:'center',color:color}}>
             <TextInput  placeholder={placename} 
             placeholderTextColor={color}
             value={username}
            //  ref={usernamref}
             onChangeText={(val)=>{setUsername(val)}}
              style={{borderWidth:2,borderColor:'grey',width:"75%",height:50,borderRadius:10}}/>
         </View> */}
         <Box w="83%" style={{marginTop:30}} >
 

 <View style={{elevation:2,backgroundColor:'white',borderRadius:10}}>
 <Input

 value={username}
 onChangeText={val=>setUsername(val)}

   
   placeholder={placename} // mx={4}
   _light={{
     placeholderTextColor: "#9D9D9D",
   }}
   _dark={{
     placeholderTextColor: "blueGray.50",
   }}
 />
 </View>
 </Box>  
         <Text style={{textAlign:'center',color:'#3C3B3B',fontFamily:'Poppins-SemiBold',fontSize:16,marginTop:15}}>{username}</Text>
         <Text style={{textAlign:'center',color:'#3C3B3B',fontFamily:'Poppins-SemiBold',fontSize:16}}>{userwrong}</Text>
        
             {/* {token?<TouchableOpacity onPress={()=>handlepressoff(item._id)} style={{height:45,width:150,padding:10,marginHorizontal:3 ,backgroundColor:'white',elevation:7,borderRadius:10}}>
               <Text style={{textAlign:'center',color:'black',fontSize:15,fontFamily:'Poppins-Regular'}}>Direct off</Text>
               </TouchableOpacity>:
               <TouchableOpacity onPress={()=>handlepress(item._id)} style={{height:45,width:150,padding:10,marginHorizontal:3 ,backgroundColor:'white',elevation:7,borderRadius:10}}>
               <Text style={{textAlign:'center',color:'black',fontSize:15,fontFamily:'Poppins-Regular'}}>Direct on</Text>
               </TouchableOpacity>} */}
               {/* <TouchableOpacity onPress={sendDetails} style={{height:56, width:150,backgroundColor:'#3C3B3B',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
             <Text style={{textAlign:'center' ,color:'#FCFCFF',fontSize:16,fontFamily:'Poppins-Regular'}}>Save</Text>
             </TouchableOpacity>  */}
             {loading?
                   <TouchableOpacity  style={{alignItems: 'center',height:56,marginHorizontal:3,
                   justifyContent: 'center',width:150 ,backgroundColor:'#3C3B3B',borderRadius:10}}> 
                          <ActivityIndicator size="large" color="black"/>
                       </TouchableOpacity>
                   :<TouchableOpacity onPress={sendDetails} style={{height:56, width:150,backgroundColor:'#3C3B3B',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                <Text style={{textAlign:'center' ,color:'#FCFCFF',fontSize:16,fontFamily:'Poppins-Regular'}}>Save</Text>
                 </TouchableOpacity>}
        
         {(tokenhas)?(<Text style={{color:'black',textAlign:'center',fontSize:13,fontFamily:'Poppins-Bold'}}>{tokenhas}</Text>):null}
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
  }

  
})
export default Linkmodal