import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
    ImageBackground,
    Image,
    // Button,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
  } from 'react-native';

  import { Input, Icon, Box, Center, NativeBaseProvider, Button,
    Actionsheet,
    useDisclose, } from "native-base"
import IconmAT from 'react-native-vector-icons/MaterialIcons'
import Iconyo from 'react-native-vector-icons/MaterialCommunityIcons' 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.30;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.85;
const image =require('../images/background.png')
function SplashScreen({navigation}) {
    
    return (
        
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <ScrollView style={{width:"100%",height:"100%"}} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <Image source={require('../images/widelogo.png')} style={{width: 180,resizeMode: 'stretch',alignSelf:'center',marginBottom:10,marginTop:30,
         height: 45}} />
         <View style={{alignItems:'center'}}>
         <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
    <Text style={{marginTop:7,fontSize:24,fontFamily:"Poppins-SemiBold",color:"#3C3B3B",textAlign:'center'}}>Welcome To SWOP</Text>
    </View >
    <View  style={{justifyContent:'center',alignItems:'center',marginBottom:80}}>
    <Text style={{marginTop:10, fontSize:16,fontFamily:"Poppins-Medium",textAlign:'center',color:'#6C6C6C'}}>Your Digital Business Card</Text>
    </View>
    <TouchableOpacity onPress={() => {navigation.replace('Signup')}}  style={{alignItems: 'center',
      justifyContent: 'center',borderRadius:12, backgroundColor:'#0B0A0A',marginVertical:5,height:56,width:343}}> 
             <Text style={{textAlign:'center',fontSize:16,color:'#FCFCFF',fontFamily:'Poppins-Regular'}}>Setup Your SWOP</Text>
          </TouchableOpacity>
<View style={{alignItems:'center',marginTop:22}}>
<Text  style={{color:"#6C6C6C",fontSize:16,fontFamily:"Poppins-Regular",textAlign:'center'}}>
      Already have an account? 
    </Text>
    </View>
    <TouchableOpacity onPress={()=>{
         navigation.replace('Login')
    }} style={{alignItems: 'center',
      justifyContent: 'center',marginTop:22,borderRadius:12, backgroundColor:'#536DEF',marginVertical:5,height:56,marginBottom:30, width:343}}> 
             <Text style={{textAlign:'center',fontSize:16,color:'#FCFCFF',fontFamily:'Poppins-Regular'}}>Login</Text>
          </TouchableOpacity>
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


export default SplashScreen