import React,{useState,useEffect,useRef} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    View,
    TextInput,
    Dimensions,
    Platform,
    Text,
    AlertIOS,
    Keyboard,
    ToastAndroid,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    StatusBar,
    RefreshControl,
  } from 'react-native';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const viewWidth=windowWidth*.30;
  const imageWidth=viewWidth;
  const imageHeight=windowHeight*.85;
const image =require('../images/background.png')

function Verificationcode({navigation,route}) {
  const[newcode ,setNewCode]=useState()
  const[codewrong,setCodewrong]=useState('')
  const newcoderef=useRef(null)
    // const [pin1, setPin1] = useState()
    // const [pin2, setPin2] = useState()
    // const [pin3, setPin3] = useState()
    // const [pin4, setPin4] = useState()
    // const [pin5, setPin5] = useState()
    // const [pin6, setPin6] = useState()
    // const pin1ref=useRef(null)
    // const pin2ref=useRef(null)
    // const pin3ref=useRef(null)
    // const pin4ref=useRef(null)
    // const pin5ref=useRef(null)
    // const pin6ref=useRef(null)
    const{code,email}=route.params
    console.log( "code is",code)
    console.log("email is",email)

    const handleSubmit=()=>{
      Keyboard.dismiss()
      if(code==newcode){
        navigation.replace('Setpass',{email})
        setNewCode('')
      }else{
        if (Platform.OS === 'android') {
          setNewCode('')
          return  ToastAndroid.show("Code Unmatched! Plz Try Again", ToastAndroid.SHORT);
        } else {
          AlertIOS.alert("No Fields should be empty");
        }
      
        
      }
       
    }
    useEffect(()=>{
      newcoderef.current.focus()
    },[])
   
    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{alignItems:'center'}}>
        <Image source={require('../images/widelogo.png')} style={{width: 180,resizeMode: 'stretch',alignSelf:'center',marginTop:windowHeight*.15, marginBottom:30,
         height: 45}} />
        <View  style={{alignContent:"center",marginTop:windowHeight*.05,justifyContent:'center'}}>
          <Text style={{fontSize:18,fontFamily:'Poppins-SemiBold' ,textAlign:'center',color:'#3C3B3B'}}>Enter Your Code</Text>
        </View>

         <View style={{alignItems:'center'}}>
         <TextInput placeholder="Enter the code" keyboardType='number-pad' placeholderTextColor='#9D9D9D' ref={newcoderef} value={newcode}  style={{color:'#3C3B3B',width:343,height:40,borderBottomWidth:2,borderRadius:5,marginTop:30}}
             onChangeText={val=>setNewCode(val)}/>
           {/* <TextInput  value={newcode}  ref={newcoderef} placeholder='Enter the code' onChangeText={val=>setNewCode(val)}
           style={{borderBottomWidth:2,borderBottomColor:'grey' ,width:"70%"}}
           /> */}
           
         </View>
         {(codewrong)?( <Text style={{color:'black',textAlign:'center',fontSize:13,fontFamily:'Poppins-Bold',marginTop:10}}>{codewrong}</Text>):null}

            {/* <View style={{justifyContent:'space-evenly',flexDirection:'row',marginTop:40}}>
                <TextInput 
                ref={pin1ref}
                value={pin1}
                maxLength={1}
                style={{backgroundColor:'#f5f4f2',fontWeight:'600',borderWidth:1,borderRadius:3, alignSelf:'center',alignContent:'center', textAlign:'center',borderColor:'grey'}}
                onChangeText={(pin1)=>{
                  setPin1(pin1)
                  if(pin1!=""){
                    pin2ref.current.focus()
                }
                }}
                />
                <TextInput 
                ref={pin2ref}
                value={pin2}
                maxLength={1}
                style={{backgroundColor:'#f5f4f2',fontWeight:'600',borderWidth:1,borderRadius:3, alignSelf:'center',alignContent:'center', textAlign:'center',borderColor:'grey'}}
                onChangeText={(pin2)=>{
                  setPin1(pin2)
                  if(pin2!=""){
                    pin3ref.current.focus()
                }
                }}
                />
                <TextInput 
                ref={pin3ref}
                value={pin3}
                maxLength={1}
                style={{backgroundColor:'#f5f4f2',fontWeight:'600',borderWidth:1,borderRadius:3,alignSelf:'center',alignContent:'center', textAlign:'center',borderColor:'grey'}}
                onChangeText={(pin3)=>{
                  setPin1(pin3)
                  if(pin3!=""){
                    pin4ref.current.focus()
                }
                }}
                />
                <TextInput 
                ref={pin4ref}
                value={pin4}
                maxLength={1}
                style={{backgroundColor:'#f5f4f2',fontWeight:'600',borderWidth:1,alignSelf:'center',borderRadius:3,alignContent:'center', textAlign:'center',borderColor:'grey'}}
                onChangeText={(pin4)=>{
                  setPin1(pin4)
                  if(pin4!=""){
                    pin5ref.current.focus()
                }
                }}
                />
                <TextInput 
                ref={pin5ref}
                value={pin5}
                maxLength={1}
                style={{backgroundColor:'#f5f4f2',fontWeight:'600',borderWidth:1,alignSelf:'center',borderRadius:3,alignContent:'center', textAlign:'center',borderColor:'grey'}}
                onChangeText={(pin5)=>{
                  setPin1(pin5)
                  if(pin5!=""){
                    pin6ref.current.focus()
                }
                }}
                />
                <TextInput 
                ref={pin6ref}
                value={pin6}
                maxLength={1}
                style={{backgroundColor:'#f5f4f2',fontWeight:'600',borderWidth:1,alignSelf:'center',alignContent:'center',borderRadius:3, textAlign:'center',borderColor:'grey'}}
                onChangeText={(pin6)=>{
                  setPin1(pin6)
                  if(pin6!=""){
                    pin6ref.current.focus()
                }
                }}
                />
               

            </View> */}
            {/* <View style={{width:300,height:150,alignSelf:'center',borderRadius:20,marginTop:20}}>
                    <TouchableOpacity style={{backgroundColor:'grey'}}
                    onPress={handleSubmit}>
                        <Text style={{color:'white',textAlign:'center',fontSize:20,height:35,marginTop:5}}>Enter your Code</Text>
                    </TouchableOpacity>
                </View> */}
        {/* <View>
                    <TouchableOpacity onPress={handleSubmit} style={{elevation:5, borderRadius:10, backgroundColor:'white',marginVertical:20,height:40,width:300, alignItems: 'center',justifyContent:'center'}}> 
                      <Text style={{textAlign:'center',fontSize:15,color:'black',fontFamily:'Poppins-Regular'}}>Continue</Text>
                   </TouchableOpacity>
               </View>     */}
               <View style={{alignItems:'center',marginTop:20}}>
    <TouchableOpacity onPress={handleSubmit} style={{alignItems: 'center',
      justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:10,height:56,width:343}}> 
             <Text style={{textAlign:'center',fontSize:16,color:'#FCFCFF',fontFamily:'Poppins-Regular'}}>Continue</Text>
          </TouchableOpacity>
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
  }

  
})
export default Verificationcode