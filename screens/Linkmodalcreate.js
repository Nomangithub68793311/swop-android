import React,{useState,useRef,useEffect} from 'react'
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
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    FlatList,
    Dimensions,
    Linking
  } from 'react-native';
import {Avatar,Title,Caption,Text,TouchableRipple} from 'react-native-paper'
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIco from 'react-native-vector-icons/Ionicons'
import IconZo from 'react-native-vector-icons/Zocial'

import {Surface} from 'react-native-paper'
// import IconQR from 'react-native-vector-icons/Ionicons'
import ModalSocial from './ModalSocial'
import Linkmodal from './Linkmodal'
function Linkmodalcreate({handleModelcut,nameIcon,color,url,title,usernam,id}) {
    const[linkModal,setLinkModal]=useState(false)
    return (
        <>                                 
        
                           <View   style={{justifyContent:'center',alignItems:'center' ,width:'30%',marginVertical:5,
                                              elevation:30,backgroundColor:'white',borderRadius:30,marginHorizontal:5 }}>
                                     <TouchableOpacity onPress={()=>{setLinkModal(true)}}>
                                       <View >
                                            <IconMat name={nameIcon} color={color} size={125} />
           
                                        </View>
                                        <View>
                                            <Text style={{fontSize:15,fontFamily:''}}>{title}</Text>
                                        </View>
                                        </TouchableOpacity>
                                        <Modal visible={linkModal}animationType="slide" >
                                        <View>
                                            <Linkmodal handlemodal={handleModelsave}  handleModelcut={handleModelcut} usernam={usernam} url={url} id={id} nameIcon={nameIcon} title={title} color={color}/>
                                        </View>  
                                        
                                        </Modal>
                          </View>
        </>
    )
}

export default Linkmodalcreate