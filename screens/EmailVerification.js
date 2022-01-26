import React, { useState, useEffect, useRef } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  TextInput,
  Dimensions,
  Text,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  RefreshControl,
  ActivityIndicator,
  Platform,
  ToastAndroid,
  AlertIOS

} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth = windowWidth * .30;
const imageWidth = viewWidth;
const imageHeight = windowHeight * .85;
const image = require('../images/background.png')

function EmailVerification({ navigation, route }) {
  const [newcode, setNewCode] = useState()
  const [codewrong, setCodewrong] = useState('')
  //   const newcoderef=useRef(null)
  const [loading, setLoading] = useState(false)

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
  const { fullname, email, password, referralCode, code } = route.params
  // console.log( "code is",code)
  // console.log("email is",email)

  const handleSubmit = () => {
    Keyboard.dismiss()
    if (newcode != code) {
      if (Platform.OS === 'android') {
        return ToastAndroid.show("Code does not match", ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("Code does not match");
      }
      setNewCode('')

    } else {
      setLoading(true)
      fetch("https://travherswopapp.herokuapp.com/signup", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "code": newcode,
          "fullname": fullname,
          "email": email.charAt(0).toLowerCase() + email.slice(1),
          "password": password,
          "referralCode": referralCode ? referralCode : ''

        })
      }).then(res => res.json()).then(async (data) => {
        if (data.error) {
          console.log(data.error);
          setEmailwrong(data.error);
          setLoading(false)
          //  setPasswrong(data.error.password);setUserwrong(data.error.fullname)
        }
        else {
          setLoading(false)
          try {
            await AsyncStorage.setItem('token', data.token)

          } catch (e) {
            console.log('error')
          }
          // console.log('err',data.user)
          navigation.replace('Pic')
        }
      })
        .catch(err => {
          setLoading(false)
          console.log('err yes')
        })


    }

  }
  // useEffect(()=>{
  //   newcoderef.current.focus()
  // },[])

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', marginTop: windowHeight * .15 }}>
            <Image source={require('../images/widelogo.png')} style={{
              width: 180, resizeMode: 'stretch', alignSelf: 'center',
              height: 45
            }} />
            <View style={{ alignContent: "center", marginTop: windowHeight * .05 }}>
              <Text style={{ fontSize: 18, fontFamily: 'Poppins-SemiBold', textAlign: 'center', color: '#3C3B3B' }}>Enter Your Code</Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={{ textAlign: 'center', fontSize: 14, color: '#6C6C6C', fontFamily: 'Poppins-Regular' }}>
                {"\n"}  We Sent a Verification Code
                {"\n"}to Your Email</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <TextInput placeholder="Enter the code" keyboardType='number-pad' placeholderTextColor='#9D9D9D' value={newcode} style={{ width: 343, height: 40, borderBottomWidth: 2, borderRadius: 5, marginTop: 30, color: '#3C3B3B' }}
                onChangeText={val => setNewCode(val)} />
              {/* <TextInput  value={newcode}  ref={newcoderef} placeholder='Enter the code' onChangeText={val=>setNewCode(val)}
           style={{borderBottomWidth:2,borderBottomColor:'grey' ,width:"70%"}}
           /> */}

            </View>
            {(codewrong) ? (<Text style={{ color: 'black', textAlign: 'center', fontSize: 13, fontFamily: 'Poppins-Bold', marginTop: 10 }}>{codewrong}</Text>) : null}


            {loading ? <View style={{ alignItems: 'center', marginTop: 20 }}>
              <TouchableOpacity style={{
                alignItems: 'center',
                justifyContent: 'center', borderRadius: 12, backgroundColor: '#536DEF', marginVertical: 5, height: 56, width: 343
              }}>
                <ActivityIndicator size="large" color="black" />
              </TouchableOpacity>
            </View> :
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity onPress={handleSubmit} style={{
                  alignItems: 'center', marginBottom: 5,
                  justifyContent: 'center', borderRadius: 12, backgroundColor: '#536DEF', marginVertical: 5, height: 56, width: 343
                }}>
                  <Text style={{ textAlign: 'center', fontSize: 16, color: '#FCFCFF', fontFamily: 'Poppins-Regular' }}>Continue</Text>
                </TouchableOpacity>
              </View>
            }
            <TouchableOpacity onPress={() => navigation.goBack()} style={{
              alignItems: 'center', marginTop: 16, marginBottom: 30,
              justifyContent: 'center'
            }}>
              <Text style={{ fontSize: 16, color: '#6C6C6C', fontFamily: 'Poppins-Regular', textAlign: 'center' }} >
                Back
              </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({

  image: {

    width: "100%",
    height: "100%"
  }


})
export default EmailVerification