import React,{useState,useRef,useEffect}from 'react'
import { Button } from 'react-native-paper';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image,
    KeyboardAvoidingView,
    StatusBar,
    Platform,
    Dimensions,
    Keyboard,
    ToastAndroid,
    ActivityIndicator, 
    AlertIOS

  } from 'react-native';
  import { Input, Icon, Box, Center, NativeBaseProvider,
    Actionsheet,
    useDisclose, } from "native-base"  

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const viewWidth=windowWidth*.30;
  const imageWidth=viewWidth;
  const imageHeight=windowHeight*.85;
const image =require('../images/background.png')

function Setpass({navigation,route}) {
    const [password, setPassword] = useState('')
    const[passwrong,serPasswrong]=useState('')
    const[passupdate,setPassupdate]=useState('')
    const[loading,setLoading]=useState(false)

    // const usernamref=useRef(null)
    const{email}=route.params
    // console.log("email here",email)
    // useEffect(()=>{
    //     usernamref.current.focus()
    // },[])
    
    const handleSubmit=()=>{
      Keyboard.dismiss()
      setPassword('')
        if(password.length<7){
       
          if (Platform.OS === 'android') {
            
            return  ToastAndroid.show("Password Should Be Of 7 Characters", ToastAndroid.SHORT);
          } else {
            AlertIOS.alert("No Fields should be empty");
          }
            
            
          }
          else{
            setLoading(true)
          fetch("https://travherswopapp.herokuapp.com/setpass",{
            method:'POST',
            headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           },
            body:JSON.stringify({
             "email":email,

             "password":password
               
      
            })
          }).then(res=> res.json()).then(data=>{if(data.error){ console.log(data.error);
            setLoading(false)
            serPasswrong(data.error)
           }
            else{
                // setPassupdate(data.sms)
                setLoading(false)
                if (Platform.OS === 'android') {
                  ToastAndroid.show('Password Saved Successfully', ToastAndroid.SHORT);
                 
                } else {
                  AlertIOS.alert('Password Saved Successfully');
                }
                navigation.navigate('Login');
                setPassword('');
              
                
                
                // ToastAndroid.show(
                //   'Qr Code Generated Successfully',
                //   ToastAndroid.LONG
                // )
              }})
          .catch(err=>console.log('err'))
         
        }
       
    }
    return (
     
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{alignItems:'center',flex:1}}>
          <Image source={require('../images/widelogo.png')} style={{width: 180,resizeMode: 'stretch',alignSelf:'center',marginTop:windowHeight*.15, marginBottom:30,
         height: 45}} />
            
            <Text style={{fontSize:18,fontFamily:'Poppins-SemiBold' ,textAlign:'center',color:'#3C3B3B',marginTop:windowHeight*.05,}}>Enter New Password</Text>

            {/* <View style={{justifyContent:'center',alignItems:'center'}}>
            <TextInput placeholder="Set-Password" ref={usernamref}placeholderTextColor="#666666" secureTextEntry={true} style={{width:300,height:40,borderWidth:2,borderRadius:5,marginTop:30}}
            onChangeText={val=>setPassword(val)}/>
            </View> */}
            <Box w="83%" style={{marginTop:30}} >
 

 <View style={{elevation:2,backgroundColor:'white',borderRadius:10}}>
 <Input
 
 value={password}
 onChangeText={val=>setPassword(val)}
 secureTextEntry={true} 
   
   placeholder="Set-Password" // mx={4}
   _light={{
     placeholderTextColor: "#9D9D9D",
   }}
   _dark={{
     placeholderTextColor: "blueGray.50",
   }}
 />
 </View>
 </Box>

            {(passwrong)?( <Text style={{color:'black',textAlign:'center',fontSize:13,fontFamily:'Poppins-Bold',marginTop:10}}>{passwrong}</Text>):null}
            {(passupdate)?( <Text style={{color:'black',textAlign:'center',fontSize:13,fontFamily:'Poppins-Bold'}}>{passupdate}</Text>):null}
            {loading? <View style={{alignItems:'center',marginTop:20}}>
   <TouchableOpacity  style={{alignItems: 'center',
     justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:5,height:56,width:343}}> 
            <ActivityIndicator size="large" color="black"/>
         </TouchableOpacity>
         </View>:
         <View style={{alignItems:'center',marginTop:20}}>
         <TouchableOpacity onPress={handleSubmit} style={{alignItems: 'center',
      justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:10,height:56,width:343}}> 
             <Text style={{textAlign:'center',fontSize:16,color:'#FCFCFF',fontFamily:'Poppins-Regular'}}>Continue</Text>
          </TouchableOpacity>
               </View>
         }
                
              
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
export default Setpass