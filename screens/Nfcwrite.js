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

import NfcManager, {Ndef, NfcTech} from 'react-native-nfc-manager';

function buildUrlPayload(valueToWrite) {
    return Ndef.encodeMessage([
        Ndef.uriRecord(valueToWrite),
    ]);
}

class Nfcwrite extends React.Component {
  componentDidMount() {
    NfcManager.start();
  }

  componentWillUnmount() {
    this._cleanUp();
  }

  render() {
    return (
      <View style={{padding: 20}}>
        <Text>NFC Demo</Text>
        <TouchableOpacity 
          style={{padding: 10, width: 200, margin: 20, borderWidth: 1, borderColor: 'black'}}
          onPress={this._testNdef}
        >
          <Text>Tap here To Activte</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{padding: 10, width: 200, margin: 20, borderWidth: 1, borderColor: 'black'}}
          onPress={this._cleanUp}
        >
          <Text>Cancel </Text>
        </TouchableOpacity>
      </View>
    )
  }

  _cleanUp = () => { 
    NfcManager.cancelTechnologyRequest().catch(() => 0);
  }

  _testNdef = async () => {
      console.log( "yeye",this.props.menu)
      console.log( "url",this.props.menu.url)
    try {
      let resp = await NfcManager.requestTechnology(NfcTech.Ndef, {
        alertMessage: 'Ready to write some NFC tags!'
      });
      console.warn(resp);
      let ndef = await NfcManager.getNdefMessage();
      console.warn(ndef);
      let bytes = buildUrlPayload("https://www.facebook.com/rana.buddy");
      // const yoyo=`${this.props.menu.url}${this.props.menu.usernam}`
      // console.log( "hello world",yoyo)
      await NfcManager.writeNdefMessage(bytes);
      console.warn('successfully write ndef');
      await NfcManager.setAlertMessageIOS('I got your tag!');
      this._cleanUp();
    } catch (ex) {
      console.warn('ex', ex);
      this._cleanUp();
    }
  }
}

// export default AppV2Ndef;
// function Editprofile() {
//     return (
//         <View style={{justifyContent:'center',alignItems:'center'}}>
//            <Text>
//                edit your profile
//            </Text>
//        </View>
//     )
// }

export default Nfcwrite