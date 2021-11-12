import React,{useState,useEffect,useRef} from 'react'
import AntIcon from 'react-native-vector-icons/AntDesign'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    View,
    Platform,
    Dimensions,
    Keyboard,
    ToastAndroid,
    AlertIOS,
    ImageBackground,
    ActivityIndicator,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
  } from 'react-native';
  import { Input, Icon, Box, Center, NativeBaseProvider, Button,
    Actionsheet,Text,
    useDisclose, } from "native-base"
import IconmAT from 'react-native-vector-icons/MaterialIcons'
import Iconyo from 'react-native-vector-icons/MaterialCommunityIcons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage';
const image =require('../images/background.png')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.30;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.85;
const Login = ({navigation})=> {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
    const [emailwrong, setEmailwrong] = useState('');
    const [passwrong, setPasswrong] = useState('')
    const[loading,setLoading]=useState(false)

    // const usernamref=useRef(null)
    // useEffect(()=>{
    //     usernamref.current.focus()
    // },[])
    const handleSubmit=()=>{
      Keyboard.dismiss()
      if(email.length<1 ){
        if (Platform.OS === 'android') {
          return  ToastAndroid.show("Please Enter an Email", ToastAndroid.SHORT);
        } else {
          AlertIOS.alert("No Fields should be empty");
        }
        
       
      } 
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
       if (Platform.OS === 'android') {
         return  ToastAndroid.show("Please enter a valid Email", ToastAndroid.SHORT);
       } else {
         AlertIOS.alert("No Fields should be empty");
       }
      }
       if(password.length<1){
        if (Platform.OS === 'android') {
          return ToastAndroid.show("Enter Your Password", ToastAndroid.SHORT);
        } else {
          AlertIOS.alert("No Fields should be empty");
        }
       
      }
     
      else{
        setLoading(true)
      fetch("https://travherswopapp.herokuapp.com/signin",{
        method:'POST',
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
        body:JSON.stringify({
         
         "password":password,
         "email":email.charAt(0).toLowerCase()+email.slice(1)

        })
      }).then(res=> res.json()).then(async(data)=>{if(data.error){
        setLoading(false)
        if (Platform.OS === 'android') {
          return  ToastAndroid.show(data.error, ToastAndroid.SHORT);
        } else {
          AlertIOS.alert("No Fields should be empty");
        }
        

        // setEmailwrong(data.error);setPasswrong(data.error);

        

        }else{
       

        try {
          await AsyncStorage.setItem('token', data.token)
          console.log(data.token)
        } catch (e) {
          console.log('error')
        }
        setPassword('')
        setEmail('')
        setLoading(false)
        navigation.replace('Profile');
       
      }}).catch(err=>console.log(err))
      
        
    }
  }

    return (
   
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
       <ScrollView keyboardShouldPersistTaps="handled" style={{width:"100%",height:"100%"}} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
    <Image source={require('../images/widelogo.png')} style={{width: 180,resizeMode: 'stretch',alignSelf:'center',marginTop:windowHeight*.15,
         height: 45}} />

         <View style={{alignItems:'center',marginTop:windowHeight*.05}}>
         <View style={{alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:22,fontFamily:"Poppins-Medium",textAlign:'center',color:'#3C3B3B',marginBottom:32}}>Welcome Back</Text>
    </View >
<Box w="83%"  >
 

<View style={{elevation:2,backgroundColor:'white',borderRadius:10}}>
<Input

value={email}
onChangeText={val=>setEmail(val)}
  InputLeftElement={
    <Icon
      as={<IconmAT name="email" color='#9D9D9D'/>}
      size="xs"
      m={2}
      _light={{
        color: "#E7E6DD",
      }}
      _dark={{
        color: "gray.300",
      }}
    />
  }
  
  placeholder="Email Address" // mx={4}
  _light={{
    placeholderTextColor: "#9D9D9D",
  }}
  _dark={{
    placeholderTextColor: "blueGray.50",
  }}
/>
</View>
{(emailwrong)?( <Text style={{color:'#3C3B3B',textAlign:'center',fontSize:14,fontFamily:'Poppins-Regular',marginTop:10}}>{emailwrong}</Text>):null}

<View style={{marginVertical:11}}></View>
<View style={{elevation:2,backgroundColor:'white',borderRadius:10}}>
<Input
value={password}
secureTextEntry={true} 
onChangeText={val=>setPassword(val)}
  InputLeftElement={
    <Icon
      as={<Iconyo name="onepassword" color='#9D9D9D' />}
      size="xs"
      m={2}
      _light={{
        color: "#E7E6DD",
      }}
      _dark={{
        color: "gray.300",
      }}
    />
  }
  
  placeholder="Password" // mx={4}
  _light={{
    placeholderTextColor: "#9D9D9D",
  }}
  _dark={{
    placeholderTextColor: "blueGray.50",
  }}
/>
</View>
{(passwrong)?(<Text style={{textAlign:'center',fontSize:14,fontFamily:'Poppins-Regular',marginTop:10,color:'#3C3B3B'}}>{passwrong}</Text>):null}

<View style={{marginVertical:16}}></View>


</Box>
</View>
{loading? <View style={{alignItems:'center'}}>
   <TouchableOpacity  style={{alignItems: 'center',
     justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:10,height:56,width:343}}> 
            <ActivityIndicator size="large" color="black"/>
         </TouchableOpacity>
         </View>:
    <View style={{alignItems:'center'}}>
    <TouchableOpacity onPress={handleSubmit} style={{alignItems: 'center',
      justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:10,height:56,width:343}}> 
             <Text style={{textAlign:'center',fontSize:16,color:'#FCFCFF',fontFamily:'Poppins-Regular'}}>Login</Text>
          </TouchableOpacity>
          </View>}
          <TouchableOpacity onPress={() => navigation.replace("ForgotPassword")} style={{alignItems: 'center',marginTop:16,marginBottom:30,
      justifyContent: 'center'}}>
          <Text style={{fontSize:16,color:'#6C6C6C',fontFamily:'Poppins-Regular',textAlign:'center'}} >
      Forgot Password?
    </Text>
    </TouchableOpacity>
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
export default Login

