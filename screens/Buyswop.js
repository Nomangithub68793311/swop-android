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
    Dimensions,
    ImageBackground,
    Linking,
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
import { flexDirection } from 'styled-system';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.35;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.1;
const image2 =require('../images/background.png')

function Buyswop() {

    const productPage=()=>{
        Linking.openURL('https://swopme.co/')    }
    return (
        <ImageBackground source={image2} resizeMode="cover" style={styles.image}> 
      <ScrollView keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag" style={{width:"100%",height:"100%"}} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
       
           <Text style={{fontSize:20,color:'#6C6C6C',fontFamily:'Poppins-Regular',textAlign:'center',marginTop:50}}>
           All Digital Products
           </Text>
           
           <View style={{flexDirection:'row',marginTop:5,flexWrap:'wrap',justifyContent:'space-between',marginHorizontal:25}}>
               <TouchableOpacity onPress={productPage} style={{width:viewWidth, marginBottom:20}}>
<Image source={require('../images/product/1.png')}style={{alignSelf:'center',borderRadius:16}}/>
<Text style={{textAlign:'center'}}>Simple Black Chip
{"\n"}$9.99{"\n"}
</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={productPage} style={{width:viewWidth,marginBottom:20}}>
<Image source={require('../images/product/2.png')}style={{alignSelf:'center',borderRadius:16}} />
<Text style={{textAlign:'center'}}>Pearl White Chip
{"\n"}$9.99{"\n"}
</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={productPage} style={{width:viewWidth,marginBottom:20}}>
<Image source={require('../images/product/3.png')} style={{alignSelf:'center',borderRadius:16}} />
<Text style={{textAlign:'center'}}>Midnight Retro Chip
{"\n"}$9.99{"\n"}
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={productPage} style={{width:viewWidth,marginBottom:20}}>
<Image source={require('../images/product/4.png')}  style={{alignSelf:'center',borderRadius:16}}/>
<Text style={{textAlign:'center'}}>Sepia Chip
{"\n"}$9.99{"\n"}
</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={productPage} style={{width:viewWidth,marginBottom:20}}>
<Image source={require('../images/product/5.png')}style={{alignSelf:'center',borderRadius:16}} />
<Text style={{textAlign:'center'}}>Swop Pink
{"\n"}$9.99{"\n"}
</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={productPage} style={{width:viewWidth,marginBottom:20}}>
<Image source={require('../images/product/6.png')} style={{alignSelf:'center',borderRadius:16}} />
<Text style={{textAlign:'center'}}>Key Ring
{"\n"}$9.99{"\n"}
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={productPage} style={{width:viewWidth,marginBottom:20}}>
<Image source={require('../images/product/7.jpeg')}  style={{alignSelf:'center',borderRadius:16}}/>
<Text style={{textAlign:'center'}}>Swop White
{"\n"}$9.99{"\n"}
</Text>
</TouchableOpacity>

<TouchableOpacity onPress={productPage} style={{width:viewWidth,marginBottom:20}}>
<Image source={require('../images/product/7.jpeg')}  style={{alignSelf:'center',borderRadius:16}}/>
<Text style={{textAlign:'center'}}>Dog Tag
{"\n"}$9.99{"\n"}
</Text>
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
export default Buyswop