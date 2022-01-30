import React, { useState, useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Height } from './SplashScreen'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Modal,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  StatusBar,
  Dimensions,
  Platform,
  ToastAndroid,
  Vibration,
  AlertIOS
} from 'react-native';
import Sound from 'react-native-sound'
import NfcManager, { Ndef, NfcTech } from 'react-native-nfc-manager';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconButton from 'react-native-vector-icons/Ionicons'
import { Surface } from 'react-native-paper'
import IconMob from 'react-native-vector-icons/FontAwesome'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
function buildUrlPayload(valueToWrite) {
  return Ndef.encodeMessage([
    Ndef.uriRecord(valueToWrite),
  ]);
}
const image2 = require('../images/background.png')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth = windowWidth * .30;
const viewWidthnew = windowWidth * .38;
const imageWidth = viewWidth;
const imageHeight = windowHeight * .85;
const DURATION = 1500;
const sound = require('../soundPlay.mp3')

function ActivateModal({ handlemodalActive, handleModelcut, username }) {



  const [flag, setFlag] = useState(true)
  let bottomSheetRef = React.createRef()
  let fall = new Animated.Value(1)
  let bottomSheetRefNew = React.createRef()
  let fallNew = new Animated.Value(1)

  useEffect(() => {
    NfcManager.start();
    return () => {
      _cleanUp();
    }
  }, [])

  const play = () => {
    let summser = new Sound(sound, (err, sound) => {
      if (err) {
        return
      }
      summser.play(() => {
        summser.release()
      })
    })

  }

  const _cleanUp = () => {
    NfcManager.cancelTechnologyRequest().catch(() => 0);
  }

  const _testNdef = async () => {
    try {

      let resp = await NfcManager.requestTechnology(NfcTech.Ndef, {
        alertMessage: 'Ready to write some NFC tags!'
      });
      console.warn("resp", resp);
      let ndef = await NfcManager.getNdefMessage();
      console.warn("ndef", ndef);
      let bytes = buildUrlPayload(`https://swopme.app/${username}`);
      await NfcManager.writeNdefMessage(bytes);
      Vibration.vibrate(DURATION)
      play()


      showSuccessBottomSheet()

      console.warn('successfully write ndef');
      await NfcManager.setAlertMessageIOS('I got your tag!');
      this._cleanUp();
    } catch (ex) {
      // console.warn('ex', ex);
      this._cleanUp();
    }
  }
  const showSuccessBottomSheet = () => {
    bottomSheetRef.current.snapTo(1)
    bottomSheetRefNew.current.snapTo(0)

  }
  const goToBack = () => {
    console.log('successfully write ndef');
    handleModelcut()
  }
  const renderInner = () => {

    _testNdef()
    return (

      <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginRight: 5, backgroundColor: '#f7f8f8', borderTopRightRadius: 30, borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
        <Text style={{ textAlign: "center", marginTop: 30, fontSize: 20, color: '#3C3B3B', fontFamily: 'Poppins-SemiBold' }}>
          Ready To Scan
        </Text>

        <Image source={require('../images/gifimage.gif')} style={{
          width: 100, resizeMode: 'stretch', alignSelf: 'center', marginTop: 10,
          height: 100, borderRadius: 100
        }} />
        <View style={{ marginTop: 5 }}>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#3C3B3B', fontFamily: 'Poppins-Regular' }}>
            {"\n"}Hold your Swop to the very top of the
            {"\n"}back of your phone to activate it</Text>
        </View>
        <TouchableOpacity onPress={() => { bottomSheetRef.current.snapTo(1) }
        } style={{
          alignItems: 'center', marginTop: 20,
          justifyContent: 'center', borderRadius: 12, backgroundColor: '#536DEF', height: 56, width: 343
        }}>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#FCFCFF', fontFamily: 'Poppins-Regular' }}>Cancel</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 50 }}></View>

      </View>)
  }
  const renderInnerNew = () => {

    return (

      <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginRight: 5, backgroundColor: '#f7f8f8', borderTopRightRadius: 30, borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
        <Text style={{ textAlign: "center", marginTop: 30, fontSize: 20, color: '#3C3B3B', fontFamily: 'Poppins-SemiBold' }}>
          Written Successfully
        </Text>

        <Image source={require('../images/right.jpg')} style={{
          width: 100, resizeMode: 'stretch', alignSelf: 'center', marginTop: 10,
          height: 100, borderRadius: 100
        }} />
        <View style={{ marginTop: 5 }}>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#3C3B3B', fontFamily: 'Poppins-Regular' }}>
            {"\n"}You are ready to go...
            {"\n"}</Text>
        </View>
        {/* {goToBack} */}
        <TouchableOpacity onPress={handleModelcut}

          //  ()=>bottomSheetRefNew.current.snapTo(1)

          style={{
            alignItems: 'center', marginTop: 20,
            justifyContent: 'center', borderRadius: 12, backgroundColor: '#536DEF', height: 56, width: 343
          }}>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#FCFCFF', fontFamily: 'Poppins-Regular' }}>Done</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 50 }}></View>

      </View>)
  }
  const renderHeader = () => (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: "center" }}>

      </Text>
    </View>
  )
  const renderHeaderNew = () => (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: "center" }}>

      </Text>
    </View>
  )


  return (
    <>
      <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
        <BottomSheet
          ref={bottomSheetRefNew}
          snapPoints={[380, 0]}
          initialSnap={1}
          callbackNode={fallNew}
          enabledGestureInteraction={true}
          renderContent={renderInnerNew}
          renderHeader={renderHeaderNew}

        />
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={[380, 0]}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
          renderContent={renderInner}
          renderHeader={renderHeader}

        />





        <View>
          <IconButton name="close-outline" size={40} color="#6C6C6C" style={{
            alignSelf: 'flex-end', marginTop:
              15, marginRight: 15
          }}
            onPress={handleModelcut} />
        </View>
        <View>
          <Image source={require('../images/swoptra.png')} style={{
            width: 100, marginTop: windowHeight * .05, resizeMode: 'stretch', alignSelf: 'center',
            height: 100, position: 'absolute', top: -20, right: viewWidthnew
          }} />
          <Image source={require('../images/mobile.png')} style={{
            resizeMode: 'stretch', alignSelf: 'center', marginTop: 80,
          }} />
          {/* <IconMob name="mobile-phone" size={375} style={{alignSelf:'center',marginTop:-130}}/> */}
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14 }}>
            Your swop will be activated with this profile
          </Text>

        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <Text selectable={true} selectionColor='orange' style={{ fontSize: 14, fontFamily: 'Poppins-Bold' }}>https://swopme.app/{username}</Text>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity onPress={() => bottomSheetRef.current.snapTo(0)} style={{
            alignItems: 'center', marginBottom: 30,
            justifyContent: 'center', borderRadius: 12, backgroundColor: '#536DEF', marginVertical: 5, height: 56, width: 343
          }}>
            <Text style={{ textAlign: 'center', fontSize: 16, color: '#FCFCFF', fontFamily: 'Poppins-Regular' }}>Tap Here To Activate</Text>
          </TouchableOpacity>
        </View>


      </ImageBackground>

    </>
  )
}
const styles = StyleSheet.create({
  username: {
    width: 300, height: 40, borderWidth: 2, borderRadius: 5, marginLeft: 60, marginBottom: 2, marginTop: 10
  }, shadoww: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.8

  },
  image: {
    width: "100%",
    height: "100%"
  },
  items: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    //   borderWidth:0.5,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 15,
    borderColor: 'grey',
    fontSize: 20,
    flexDirection: 'row',
    elevation: 10


  }
})

export default ActivateModal

