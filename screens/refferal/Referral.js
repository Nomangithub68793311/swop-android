import React, { useState, useContext, useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from 'react-native-image-crop-picker';

import { Height } from './SplashScreen'


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  View,
  ImageBackground,
  Modal,
  Image,
  AlertIOS,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Text,
  StatusBar,
  Platform,
  Alert
} from 'react-native';
import {
  Button,
  HStack,
  VStack,
  useToast,
  Input,
  useClipboard,
  NativeBaseProvider,
  Center
} from "native-base";
import { NotesContext } from '../../Reducers/Context'
import Clipboard from '@react-native-community/clipboard';

const image2 = require('../../images/background.png')


function Referral({ navigation }) {
  const { value, onCopy, hasCopied } = useClipboard();
  const toast = useToast()
  const { state, getsocialinks, adduserAccount, getindividuallinks, addToken, adduserAccountdelete } = useContext(NotesContext)

  const [copyText, setCopyText] = useState(state.profile.referralCode);
  const savetocloud = () => {
    navigation.navigate('Dashboard')
  }
  const copyToClipboard = (copyText) => {
    Clipboard.setString(copyText);
  };
  const alertinfo = () => {
    // toast.show({
    //     title: "Copied",


    //   })
    if (Platform.OS === 'android') {
      ToastAndroid.show("SuccessFully Copied", ToastAndroid.SHORT);
    } else {
      AlertIOS.alert("SuccessFully Copied");
    }


    // Alert.alert('SuccessFully Copied', '', [
    //     {text:'ok'}
    //   ])
  }
  return (

    <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
      <View style={{ alignContent: 'center', flex: 1, justifyContent: 'center', marginTop: -150 }}>
        {/* <View>
               <Text style={{textAlign:'center'}}>Referral</Text>
           </View> */}
        <View>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#3C3B3B', fontFamily: 'Poppins-Regular' }}>Share your unique code to your friends &
            {"\n"}   family to get reward &
            {"\n"}the reward goes to both parties.
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#3C3B3B', fontFamily: 'Poppins-Regular' }}>when they use your code to purchase a NFC chip from our e-shop
            {"\n"}  they will get 1 free NFC Chip & you will get $10 for every verified purchase.
            {"\n"} us through Venmo PayPal or
            {"\n"}CashApp
          </Text>
        </View>
        {/* <View style={{ marginTop: 5 }}>
            <Text style={{ textAlign: 'center', fontSize: 16, color: '#3C3B3B', fontFamily: 'Poppins-Regular' }}>For every invite you will get $5 from
              {"\n"} us through Venmo PayPal or
              {"\n"}CashApp</Text>
          </View> */}


        <View style={{ alignItems: 'center' }}>

          <TouchableOpacity onPress={() => {
            copyToClipboard(copyText); alertinfo()
          }
          }
            style={{
              alignItems: 'center', marginBottom: 10,
              justifyContent: 'center', borderRadius: 12, backgroundColor: 'white', marginVertical: 5, height: 56, width: 343
            }}>
            <Text style={{ textAlign: 'center', fontSize: 16, color: '#3C3B3B', fontFamily: 'Poppins-Regular' }}>{copyText}</Text>
          </TouchableOpacity>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#3C3B3B', fontFamily: 'Poppins-Regular' }}>Copy Referral code to Clipboard</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={savetocloud} style={{
            alignItems: 'center', marginBottom: 10,
            justifyContent: 'center', borderRadius: 12, backgroundColor: '#536DEF', marginVertical: 16, height: 56, width: 343
          }}>
            <Text style={{ textAlign: 'center', fontSize: 16, color: '#FCFCFF', fontFamily: 'Poppins-Regular' }}>Payment Dashboard</Text>
          </TouchableOpacity>
        </View>


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

export default Referral
