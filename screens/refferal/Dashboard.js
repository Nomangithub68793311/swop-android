import React, { useState, useContext, useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Height } from './SplashScreen'


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Platform,
  View,
  ImageBackground,
  Modal,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  ToastAndroid,
  AlertIOS,
  StatusBar,
  Alert
} from 'react-native';
import Iconyo from 'react-native-vector-icons/MaterialIcons'
import IconmAT from 'react-native-vector-icons/Ionicons'
import {
  Input, Icon, Box, Center, NativeBaseProvider, Button, Divider, Text,
  Actionsheet,
  useDisclose,
} from "native-base"

import { NotesContext } from '../../Reducers/Context'

const image2 = require('../../images/background.png')

function Dashboard({ navigation }) {
  const { isOpen, onOpen, onClose } = useDisclose()
  const [payment, setPayment] = useState('')
  const [placeholder, setPlaceholder] = useState('')
  const { state, getsocialinks, adduserAccount, getindividuallinks, addToken, adduserAccountdelete } = useContext(NotesContext)

  const saveEmailToDatabase = async () => {

    if (payment.length < 1) {
      if (Platform.OS === 'android') {
        ToastAndroid.show("Please Add Your Payment Address", ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("Please Add Your Payment Address");
      }
    }
    else if (state.profile.totalAmount < 50) {
      if (Platform.OS === 'android') {
        ToastAndroid.show("You can't make payment Requset if it is less than $50", ToastAndroid.SHORT);
        setPayment('')
      } else {
        AlertIOS.alert("Please Add Your Payment Address");
      }
    }
    else {
      console.log("yyyy", state.profile._id)
      fetch("https://travherswopapp.herokuapp.com/travis/paymentemail", {
        method: 'POST',
        headers: {
          Authorization: "Bearer " + await AsyncStorage.getItem('token'),
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          "payment": payment,

        })
      }).then(res => res.json()).then(data => {
        if (data.error) {

          if (Platform.OS === 'android') {
            ToastAndroid.show(data.error, ToastAndroid.SHORT);
          } else {
            AlertIOS.alert(data.error);
          }
          setPlaceholder('Payment Address')
        }

        else {
          if (Platform.OS === 'android') {
            ToastAndroid.show("Successfully Saved", ToastAndroid.SHORT);
          } else {
            AlertIOS.alert("SuccessFully Copied");
          }
          setPayment('')

        }
      }).catch(err => console.log(err))
    }
  }
  const paymentHandle = (paymentMethod) => {
    setPlaceholder(paymentMethod)
    onClose()
  }


  return (

    <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
      <View style={{ alignContent: 'center', flex: 1, justifyContent: 'center' }}>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 18, color: '#000000', fontFamily: 'Poppins-Regular' }}>Balance
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={{ textAlign: 'center', fontSize: 48, color: '#3C3B3B', fontFamily: 'Poppins-Regular' }}>
            ${state.profile.totalAmount ? state.profile.totalAmount : '0'}</Text>
        </View>
        <Text style={{ fontSize: 16, color: '#6C6C6C', fontFamily: 'Poppins-Regular', textAlign: 'center', marginBottom: 10 }} >
          Minimum Withdrawl Request $50
        </Text>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 12, marginBottom: 20, width: "84%", height: 56, backgroundColor: 'white' }} onPress={onOpen}>

            <Text style={{ textAlign: 'center', color: "#3C3B3B", fontSize: 16, fontFamily: 'Poppins-Regular' }}>Receive Payment</Text>
            <IconmAT name="chevron-down" size={30} color="#6C6C6C" style={{ position: 'absolute', right: -3 }} />
          </TouchableOpacity>




        </View>

        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Actionsheet.Item onPress={() => paymentHandle('Paypal')} style={{ justifyContent: 'center', alignItems: 'center', borderTopWidth: 2, borderTopColor: "#CECECE", fontFamily: 'Poppins-Regular', fontSize: 16, color: '#3C3B3B' }}>Paypal</Actionsheet.Item>
            <Actionsheet.Item onPress={() => paymentHandle('Venmo')} style={{ justifyContent: 'center', alignItems: 'center', borderTopWidth: 2, borderTopColor: "#CECECE", fontFamily: 'Poppins-Regular', fontSize: 16, color: '#3C3B3B' }}>Venmo</Actionsheet.Item>
            <Actionsheet.Item onPress={() => paymentHandle('CashApp')} style={{ justifyContent: 'center', alignItems: 'center', borderTopWidth: 2, borderTopColor: "#CECECE", fontFamily: 'Poppins-Regular', fontSize: 16, color: '#3C3B3B' }}>CashApp</Actionsheet.Item>
            <Actionsheet.Item onPress={() => onClose()} style={{ justifyContent: 'center', alignItems: 'center', borderTopWidth: 2, borderTopColor: "#CECECE", fontFamily: 'Poppins-Regular', fontSize: 16, color: '#3C3B3B' }}>Cancel</Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>



        <View style={{ alignItems: 'center' }}>
          <Box w="83%"  >
            <View style={{ elevation: 2, backgroundColor: 'white', borderRadius: 10 }}>
              <Input
                style={{ height: 56 }}
                value={payment}
                onChangeText={val => setPayment(val)}


                placeholder={placeholder ? placeholder : 'Payment Address'} // mx={4}
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
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity onPress={saveEmailToDatabase} style={{
            alignItems: 'center', marginBottom: 10,
            justifyContent: 'center', borderRadius: 12, backgroundColor: '#536DEF', marginVertical: 16, height: 56, width: 343
          }}>
            <Text style={{ textAlign: 'center', fontSize: 16, color: '#FCFCFF', fontFamily: 'Poppins-Regular' }}>Withdraw</Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity onPress={() => navigation.navigate('Referral')} style={{alignItems: 'center',marginTop:15,marginBottom:30,
      justifyContent: 'center'}}>
          <Text style={{fontSize:16,color:'#6C6C6C',fontFamily:'Poppins-Regular',textAlign:'center'}} >
      Back
    </Text>
    </TouchableOpacity> */}
      </View>
    </ImageBackground>

  )
}
const styles = StyleSheet.create({

  image: {
    width: "100%",
    height: "100%"
  }


})
export default Dashboard
