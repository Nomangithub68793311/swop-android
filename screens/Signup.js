import React,{useState,useRef,useEffect,useContext} from 'react'
// import {MyDrawer} from '../App'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    Keyboard ,
    View,
    TextInput,
    Platform,
    Dimensions,
    ImageBackground,
    AlertIOS,
    ActivityIndicator,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    ToastAndroid,
  } from 'react-native';
  import { Input, Icon, Box, Center, NativeBaseProvider, Button,
    Actionsheet,Text,
    useDisclose, } from "native-base"
    import IconmAT from 'react-native-vector-icons/MaterialIcons'
import Iconyo from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.30;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.85;
const image =require('../images/background.png')
  // import {NotesContext} from '../Reducers/Context'
  export const Signup = ({navigation})=> {
    // const [username, setUsername] = useState()
    
    const[fullname,setFullname]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[referralCode,setReferralCode]=useState('')
    const [emailwrong, setEmailwrong] = useState();
    const [passwrong, setPasswrong] = useState('')
    const [userwrong, setUserwrong] = useState('')
    const[loading,setLoading]=useState(false)
    const [calar,setCalar]=useState(false)
    // const {addUser}=useContext(NotesContext)
    // const usernamref=useRef(null)
    // useEffect(()=>{
    //     usernamref.current.focus()
    // },[])
    const handleSubmit =()=>{
      Keyboard.dismiss()
       if(fullname.length<3){
        if (Platform.OS === 'android') {
         return ToastAndroid.show("Please Add All The Fields", ToastAndroid.SHORT);
        } else {
          AlertIOS.alert("No Fields should be empty");
        }
       
      }
      
      
      if(password.length<1){
        if (Platform.OS === 'android') {
          return  ToastAndroid.show("Please Add All The Fields", ToastAndroid.SHORT);
        } else {
          AlertIOS.alert("No Fields should be empty");
        }
      }
     
      if(email.length<1 ){
        if (Platform.OS === 'android') {
          return ToastAndroid.show("Please Add All The Fields", ToastAndroid.SHORT);
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

      if(password.length<7 ){
        if (Platform.OS === 'android') {
          return ToastAndroid.show("Password Must Contain 6 Characters", ToastAndroid.SHORT);
        } else {
          AlertIOS.alert("No Fields should be empty");
        }
       
        setPassword('')
      } 
      
      
      // http://10.0.2.2:5000/
     
      else{
    
    
        setLoading(true)
         fetch("https://travherswopapp.herokuapp.com/email/verificationcode",{
           method:'POST',
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
           body:JSON.stringify({  
           
            "email":email,
            

           })
         }).then(res=> res.json()).then((data)=>{if(data.error){ console.log(data.error);
          setLoading(false)
          if (Platform.OS === 'android') {
            return ToastAndroid.show(data.error, ToastAndroid.SHORT);
          } else {
            AlertIOS.alert("No Fields should be empty");
          }
           setEmailwrong(data.error);
           setLoading(false)
          //  setPasswrong(data.error.password);setUserwrong(data.error.fullname)
          }
           else{
            setLoading(false)
            
            console.log('got it',data.code)
            navigation.navigate('EmailVerification',{fullname,email,password,referralCode,code:data.code})


            setFullname('');setPassword('');setEmail('');setReferralCode('')}})
         .catch(err=> {
           setLoading(false) 
           console.log('err',err)})
          
        
         
             
        
    }
  }
    

    return (
     
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <ScrollView keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag" style={{width:"100%",height:"100%"}} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
   <Image source={require('../images/widelogo.png')} style={{width: 180,resizeMode: 'stretch',alignSelf:'center',marginTop:windowHeight*.15
        ,height:45}} />
        <View style={{alignItems:'center',marginTop:windowHeight*.05}}>
<Box w="83%">

                

 <View style={{elevation:2,backgroundColor:'white',borderRadius:10}}>
<Input
value={fullname}
onChangeText={val=>setFullname(val)}
 InputLeftElement={
   <Icon
     as={<Iconyo name="face-profile" />}
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
 
 placeholder="Full Name" // mx={4}
 _light={{
   placeholderTextColor: "#9D9D9D",
 }}
 _dark={{
   placeholderTextColor: "blueGray.50",
 }}
/>
</View>
{(userwrong)?( <Text style={{textAlign:'center',fontSize:14,fontFamily:'Poppins-Regular',marginTop:10,color:'#3C3B3B'}}>{userwrong}</Text>):null}

<View style={{marginVertical:11}}></View>
<View style={{elevation:2,backgroundColor:'white',borderRadius:10}}>
<Input

value={email}
onChangeText={val=>setEmail(val)}
 InputLeftElement={
   <Icon
     as={<IconmAT name="email" color='red'/>}
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
{(emailwrong)?( <Text style={{textAlign:'center',fontSize:14,fontFamily:'Poppins-Regular',marginTop:10,color:'#3C3B3B'}}>{emailwrong}</Text>):null}

<View style={{marginVertical:11}}></View>
<View style={{elevation:2,backgroundColor:'white',borderRadius:10}}>
<Input
value={password}
secureTextEntry={true} 
onChangeText={val=>setPassword(val)}
 InputLeftElement={
   <Icon
     as={<Iconyo name="onepassword"  />}
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

<View style={{marginVertical:7}}></View>
<Text style={{marginVertical:4,color:"#9D9D9D",fontFamily:"Poppins-Regular",fontSize:14}}>Referral Code(Optional)</Text>
<View style={{marginVertical:7}}></View>
<View style={{elevation:2,backgroundColor:'white',borderRadius:10}}>
<Input
value={referralCode}
onChangeText={val=>setReferralCode(val)}
 
 
 placeholder="Code" // mx={4}
 _light={{
   placeholderTextColor: "#9D9D9D",
 }}
 _dark={{
   placeholderTextColor: "blueGray.50",
 }}
/>
</View>
</Box>
</View>
<View style={{flexDirection:'row',justifyContent:'center',marginTop:16,}}>
                <Text style={{marginLeft:15,fontSize:11,fontFamily:'Poppins-Regular',textAlign:'center'}}>By registering, you agree to </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Terms')}>
                {/* <Text style={{fontFamily:'Oswald-Bold',marginTop:10}}>Terms</Text>
                <Text style={{marginTop:10,marginLeft:2,fontFamily:'Oswald-Bold'}}>and</Text>  */}
                <Text style={{fontFamily:'Poppins-Medium',textAlign:'center',fontSize:11}}>Terms</Text>
                </TouchableOpacity>
                <Text style={{fontFamily:'Poppins-Regular',fontSize:11,marginHorizontal:5,textAlign:'center'}}>and</Text>
                <TouchableOpacity  onPress={()=>navigation.navigate('Privacy')}>
                {/* <Text style={{fontFamily:'Oswald-Bold',marginTop:10}}>Terms</Text>
                <Text style={{marginTop:10,marginLeft:2,fontFamily:'Oswald-Bold'}}>and</Text>  */}
                <Text style={{fontFamily:'Poppins-Medium',fontSize:11,textAlign:'center'}}>Privacy Policy</Text>
                </TouchableOpacity>
             </View>
   
         {loading? <View style={{alignItems:'center',marginTop:38}}>
   <TouchableOpacity  style={{alignItems: 'center',
     justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:5,height:56,width:343}}> 
            <ActivityIndicator size="large" color="black"/>
         </TouchableOpacity>
         </View>:
         <View style={{alignItems:'center',marginTop:38}}>
         <TouchableOpacity onPress={()=>handleSubmit()} style={{alignItems: 'center',marginBottom:30,
           justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:5,height:56,width:343}}> 
                  <Text style={{textAlign:'center',fontSize:16,color:'#FCFCFF',fontFamily:'Poppins-Regular'}}>Continue</Text>
               </TouchableOpacity>
               </View>
         }
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
export default Signup


