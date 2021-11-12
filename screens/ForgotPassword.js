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
    Platform,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    Keyboard,
    ToastAndroid,
    Dimensions,
    ActivityIndicator,
    Alert,
    AlertIOS,
    Image
  } from 'react-native';
  import { Input, Icon, Box, Center, NativeBaseProvider,
    Actionsheet,
    useDisclose, } from "native-base"
    import IconmAT from 'react-native-vector-icons/MaterialIcons'
    import Iconyo from 'react-native-vector-icons/MaterialCommunityIcons'
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  const image =require('../images/background.png')
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const viewWidth=windowWidth*.30;
  const imageWidth=viewWidth;
  const imageHeight=windowHeight*.85;
function ForgotPassword({navigation}) {
  const [email, setEmail] = useState('')
  const [emailwrong, setEmailwrong] = useState()
  const[loading,setLoading]=useState(false)

  // const usernamref=useRef(null)
  //   useEffect(()=>{
  //       usernamref.current.focus()
  //   },[])
  const handleSubmit =()=>{
    Keyboard.dismiss()
    if(email.length<1){
      if (Platform.OS === 'android') {
        return  ToastAndroid.show("Please Enter an Email", ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("No Fields should be empty");
      }
    }
    else{
      setLoading(true)
    fetch("https://travherswopapp.herokuapp.com/forgotpass",{
      method:'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
      body:JSON.stringify({
       "email":email
       
         

      })
    }).then(res=> res.json()).then(data=>{if(data.error){ console.log(data.error);
      setLoading(false)
      if (Platform.OS === 'android') {
        return  ToastAndroid.show(data.error, ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("No Fields should be empty");
      }
      
      setEmail('')}
      else{
        console.log("success",data.email)
        console.log("success",data.success)
        setLoading(false)
        navigation.navigate('Verificationcode',{code:data.success,email:data.email});
        if (Platform.OS === 'android') {
          return  ToastAndroid.show("Verification Code Is Sent To Your Email", ToastAndroid.SHORT);
        } else {
          AlertIOS.alert("No Fields should be empty");
        }
        
        // ToastAndroid.show(
        //   'Qr Code Generated Successfully',
        //   ToastAndroid.LONG
        // )
        setEmail('')}})
    .catch(err=>console.log('err'))
   
  }
}
   
    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
              <ScrollView keyboardShouldPersistTaps="handled">
              <View style={{alignItems:'center',marginTop:windowHeight*.15}}>
              <Image source={require('../images/widelogo.png')} style={{width: 180,resizeMode: 'stretch',alignSelf:'center',
         height: 45}} />
    <Text style={{fontSize:22,fontFamily:"Poppins-SemiBold",textAlign:'center',color:'#3C3B3B',marginBottom:32,marginTop:windowHeight*.05}}>Forgot Password</Text>
    <View style={{marginTop:5}}>
               <Text style={{textAlign:'center',fontSize:16,color:'#6C6C6C',fontFamily:'Poppins-Regular'}}>
               {"\n"} Enter Your SWOP email and we'll
               {"\n"}send you a 6 digit code</Text>
           </View>    
            
            
            <Box w="83%" style={{marginTop:30}} >
 

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
 </Box>        
            
             {(emailwrong)?( <Text style={{textAlign:'center',fontSize:14,fontFamily:'Poppins-Regular',marginTop:10,color:'#3C3B3B'}}>{emailwrong}</Text>):null}
            
                 
          {loading? <View style={{alignItems:'center',marginTop:20}}>
   <TouchableOpacity  style={{alignItems: 'center',
     justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:5,height:56,width:343}}> 
            <ActivityIndicator size="large" color="black"/>
         </TouchableOpacity>
         </View>:
         <View style={{alignItems:'center',marginTop:20}}>
         <TouchableOpacity onPress={handleSubmit} style={{alignItems: 'center',
      justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:10,height:56,width:343}}> 
             <Text style={{textAlign:'center',fontSize:16,color:'#FCFCFF',fontFamily:'Poppins-Regular'}}>Send Code</Text>
          </TouchableOpacity>
               </View>
         }


          <TouchableOpacity onPress={() => navigation.replace("Login")} style={{alignItems: 'center',marginTop:16,marginBottom:30,
      justifyContent: 'center'}}>
          <Text style={{fontSize:16,color:'#6C6C6C',fontFamily:'Poppins-Regular',textAlign:'center'}} >
      Back to Login
    </Text>
    </TouchableOpacity>

                 {/* <View>
                    <TouchableOpacity onPress={handleSubmit} style={{elevation:5, borderRadius:10, backgroundColor:'white',marginVertical:20,height:40,width:300, alignItems: 'center',
    justifyContent: 'center',}}> 
                      <Text style={{textAlign:'center',fontSize:15,color:'black',fontFamily:'Poppins-Regular'}}>Continue</Text>
                   </TouchableOpacity>
               </View> */}
                          
                           
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

export default ForgotPassword
