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
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
  } from 'react-native';
import {Avatar,Title,Caption,Text,TouchableRipple} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconButton from 'react-native-vector-icons/Ionicons'
import {Surface} from 'react-native-paper'
import IconQR from 'react-native-vector-icons/Ionicons'
function ModalSocial({handleModelcut}) {
    return (
        <View >
          <View>
            <IconButton name="close-circle-outline" size={50} style={{alignSelf:'flex-end'}}
                       onPress={handleModelcut} />
            </View>
            <View>
                  <Text>logo</Text>
            </View>
            <View>
            <Text>logo image</Text>
            </View>
            <View>
            <Text>box image</Text>
            </View>
            <View>
                <View>  <Text>open button</Text></View>
                
                <View><Text>open button</Text></View>
            </View>
        </View>
            
        
    )
}

export default ModalSocial