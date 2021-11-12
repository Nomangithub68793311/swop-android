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
    TextInput,
    Dimensions,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    FlatList
  } from 'react-native';
import {Avatar,Title,Caption,Text,TouchableRipple} from 'react-native-paper'
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'
import  LinearGradient from 'react-native-linear-gradient';
import Icofon from 'react-native-vector-icons/Fontisto'


import {Surface} from 'react-native-paper'
import Modalopensave from './Modalopensave'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.30;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.15;
function ContactModalcreate({title,url,id,idaccount,navigation,src,placeholder,picname,group}) {
    // const[modalOpen,setModalopen]=useState(false)
    // const handleModel=()=>{
    //     setModalopen(true)
    // } 
    // const handleModel2=()=>{
    //     setModalopen(false)
    // }
    // const handleModelsave=(usernam,nameIcon,color,url,title)=>{
    //     handlesave(usernam,nameIcon,color,url,title)
    // }
    
    return (
    //     <View   style={{justifyContent:'center',alignItems:'center' ,width:'30%',borderRadius:12, marginVertical:5,elevation:20,backgroundColor:'#FFFFFF',marginHorizontal:5
    //                               }}>
           
    //             <View>
    //               {Icon =='IconMat'?
    //           <IconMat name={nameIcon} size={100} 
             
    //            color={color} onPress={()=>navigation.navigate('Modalopensave',{
    //             idaccount:idaccount,
    //             url:url,
    //              id:id,
    //               nameIcon:nameIcon,
    //                title:title,
    //                 color:color,
    //                 Icon:Icon

    //            })}/>:<Icofon name={nameIcon} size={100} 
             
    //            color={color} onPress={()=>navigation.navigate('Modalopensave',{
    //             idaccount:idaccount,
    //             url:url,
    //              id:id,
    //               nameIcon:nameIcon,
                  
    //                title:title,
    //                 color:color,
    //                 Icon:Icon

    //            })}/>}
    //           </View>
    //           <View >
    //           <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#3C3B3B'}} >{title}</Text>
    //           </View>
              
                   

    //    </View>
    <View style={{width:viewWidth,margin:5,

    
    
    
    }}>
   
        <TouchableOpacity onPress={()=>navigation.navigate('Modalopensave',{
            idaccount:idaccount,
            url:url,
            title:title,
            picname:picname,
            group:group,
            src:src,
            placeholder:placeholder,
            id:id

        })}>
    <Image  
    style={{height:imageHeight,width:imageWidth,borderRadius:20}}source={src} />
    </TouchableOpacity>
    
    </View>
     
      
    )
}

export default ContactModalcreate



// marginTop:1,marginLeft:35,
