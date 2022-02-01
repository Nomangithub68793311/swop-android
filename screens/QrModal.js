import React, { Component } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Height } from './SplashScreen'
import QRCode from 'react-native-qrcode-svg';
import Share from 'react-native-share';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
  ImageBackground,
  View,
  Modal,
  Image,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconButton from 'react-native-vector-icons/Ionicons'
import { Surface } from 'react-native-paper'
import IconQR from 'react-native-vector-icons/Ionicons'
const image2 = require('../images/background.png')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth = windowWidth * .30;
const imageWidth = viewWidth;

const imageHeight = windowHeight * .85;
// ({handlemodalQr,handleModelcut,username})
class QrModal extends Component {


  sendDetails = () => {
    handlemodal();
  }
  saveQRCode = () => {

    this.svg.toDataURL(this.callback);
  };



  callback(dataURL) {
    console.log("letz see", dataURL);
    let shareImageBase64 = {
      title: 'React Native',
      url: `data:image/png;base64,${dataURL}`,
      subject: 'Share Link', //  for email
    };
    Share.open(shareImageBase64).catch(error => console.log(error));
  }


  //   getDataURL() {
  //     this.svg.toDataURL(this.callback);
  //   }

  //   callback(dataURL) {
  //     console.log(dataURL);
  //   }
  //    saveQrToDisk(ima) {
  //     console.log(ima);
  //     this.svg.toDataURL((data) => {
  //       RNFS.writeFile(RNFS.CachesDirectoryPath+"/some-name.png", data, 'base64')
  //         .then((success) => {
  //           return CameraRoll.save(RNFS.CachesDirectoryPath+"/some-name.png", 'photo')
  //         })
  //         .then(() => {
  //           this.setState({ busy: false, imageSaved: true  })
  //           ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
  //         })
  //     })
  //  }

  handleSubmit = () => {
    console.log('yes')
  }


  render() {
    return (
      <ImageBackground source={image2} resizeMode="cover" style={styles.image}>



        <View style={{ height: "99%", width: "99%", backgroundColor: 'white', elevation: 10 }}>
          <IconButton name="close-outline" size={40} color="#6C6C6C" style={{
            alignSelf: 'flex-end', marginTop:
              15, marginRight: 15
          }}
            onPress={this.props.handleModelcut} />
          <View>
            <Image source={require('../images/widelogo.png')} style={{
              width: 160, marginTop: windowHeight * .10, resizeMode: 'stretch', alignSelf: 'center',
              height: 45
            }} />
          </View>

          <View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 25 }}>
              <QRCode
                value={`https://swopme.app/${this.props.username}`}
                logoSize={600}
                getRef={c => (this.svg = c)}
                size={300}

                enableLinearGradient='true'
                linearGradient={['#2CC3FE', '#904AFE']}
                quietZone='50'
                logoBackgroundColor='transparent' />


            </View>
            {/* <IconQR name="md-qr-code-sharp" onPress={()=>{console.log('yoyo')}} size={200} style={{alignSelf:'center',marginTop:30}}
       
                      /> */}
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={this.saveQRCode} style={{
              alignItems: 'center', marginBottom: 30,
              justifyContent: 'center', borderRadius: 12, backgroundColor: '#536DEF', marginVertical: 5, height: 56, width: 343
            }}>
              <Text style={{ textAlign: 'center', fontSize: 16, color: '#FCFCFF', fontFamily: 'Poppins-Regular' }}>Share QR Code</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ImageBackground>
    )
  }
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

export default QrModal
