import React, { useState } from 'react'
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
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
  Dimensions,
  Linking
} from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper'
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIco from 'react-native-vector-icons/Ionicons'
import IconZo from 'react-native-vector-icons/Zocial'
import uuid from 'react-uuid'
import { Surface } from 'react-native-paper'
// import IconQR from 'react-native-vector-icons/Ionicons'
import ModalSocial from './ModalSocial'
import ContactModalcreate from './ContactModalcreate'


const socialContact = [
  { src: require('../images/socialImages/social/Facebook.png'), group: 'social', picname: 'Facebook.png', placeholder: 'Facebook Username', id: 1, url: 'https://facebook.com/', name: 'facebook' },
  { src: require('../images/socialImages/social/Instagram.png'), group: 'social', picname: 'Instagram.png', placeholder: 'Instagram Username', id: 2, url: 'https://instagram.com/', name: 'Instagram' },
  { src: require('../images/socialImages/social/Linkedin.png'), group: 'social', picname: 'Linkedin.png', placeholder: 'Linkedin Username', id: 3, url: 'https://linkedin.com/', name: 'Linkedin' },
  { src: require('../images/socialImages/social/OnlyFans.png'), group: 'social', picname: 'OnlyFans.png', placeholder: 'OnlyFans Username', id: 4, url: 'https://onlyfans.com/', name: 'OnlyFans' },
  { src: require('../images/socialImages/social/Pinterest.png'), group: 'social', picname: 'Pinterest.png', placeholder: 'Pinterest Username', id: 5, url: 'https://pinterest.com/', name: 'Pinterest' },
  { src: require('../images/socialImages/social/Snapchat.png'), group: 'social', picname: 'Snapchat.png', placeholder: 'Snapchat Username', id: 6, url: 'https://snapchat.com/', name: 'Snapchat' },
  { src: require('../images/socialImages/social/TikTok.png'), group: 'social', picname: 'TikTok.png', placeholder: 'Tiktok Username', id: 7, url: 'https://tiktok.com/', name: 'TikTok' },
  { src: require('../images/socialImages/social/Twitter.png'), group: 'social', picname: 'Twitter.png', placeholder: 'Twitter Username', id: 8, url: 'https://twitter.com/', name: 'Twitter' },
  { src: require('../images/socialImages/social/Youtube.png'), group: 'social', picname: 'Youtube.png', placeholder: 'YouTube Username', id: 9, url: 'https://youtube.com/', name: 'YouTube' },


]
const contact = [
  { src: require('../images/socialImages/contact/Email.png'), group: 'contact', picname: 'Email.png', placeholder: 'Email Address', id: 1, url: 'mailto:', name: 'Email' },
  { src: require('../images/socialImages/contact/Address.png'), group: 'contact', picname: 'Address.png', placeholder: 'Address', id: 2, url: '', name: 'Address' },
  { src: require('../images/socialImages/contact/Call.png'), group: 'contact', picname: 'Call.png', placeholder: 'Phone Number', id: 3, url: 'tel:', name: 'Phone' },
  { src: require('../images/socialImages/contact/FaceTime.png'), group: 'contact', picname: 'FaceTime.png', placeholder: 'FaceTime', id: 4, url: 'FaceTime:', name: 'Number' },
  { src: require('../images/socialImages/contact/Text.png'), group: 'contact', picname: 'Text.png', id: 5, placeholder: 'Number Number', url: 'sms:', name: 'Number' },
  { src: require('../images/socialImages/contact/WhatsApp.png'), group: 'contact', picname: 'WhatsApp.png', placeholder: 'WhatsApp Number', id: 6, url: 'WhatsApp:', name: 'WhatsApp' },

]
const music = [
  { src: require('../images/socialImages/music/Spotify.png'), group: 'music', picname: 'Spotify.png', placeholder: 'Link to Spotify', id: 1, url: 'https://spotify.com/', name: 'Spotify' },
  { src: require('../images/socialImages/music/AppleMusic.png'), group: 'music', picname: 'AppleMusic.png', placeholder: 'Link to Apple Music', id: 2, url: 'https://apple.com/apple-music/', name: 'Apple' },
  { src: require('../images/socialImages/music/SoundCloud.png'), group: 'music', picname: 'SoundCloud.png', placeholder: 'SoundCloud Username', id: 3, url: 'https://soundcloud.com/', name: 'SoundCloud' },

]
const payment = [
  { src: require('../images/socialImages/payment/Paypal.png'), group: 'payment', picname: 'Paypal.png', placeholder: 'Paypal.me Link', id: 1, url: 'https://paypal.com/paypalme/', name: 'Paypal' },
  { src: require('../images/socialImages/payment/CashApp.png'), group: 'payment', picname: 'CashApp.png', placeholder: 'CashApp  $username', id: 2, url: '', name: 'CashApp' },
  { src: require('../images/socialImages/payment/Venmo.png'), group: 'payment', picname: 'Venmo.png', placeholder: 'Venmo  @username', id: 3, url: '', name: 'Venmo' },

]
const crypto = [
  { src: require('../images/socialImages/crypto/BTC.png'), group: 'crypto', picname: 'BTC.png', placeholder: 'Wallet Address', id: 1, url: '', name: 'BTC' },
  { src: require('../images/socialImages/crypto/ETH.png'), group: 'crypto', picname: 'ETH.png', placeholder: 'Wallet Address', id: 2, url: '', name: 'ETH' },
  { src: require('../images/socialImages/crypto/USDC.png'), group: 'crypto', picname: 'USDC.png', placeholder: 'Wallet Address', id: 3, url: '', name: 'USDC' },
]
const more = [
  { src: require('../images/socialImages/more/Website.png'), group: 'more', picname: 'Website.png', placeholder: 'Website URL', id: 1, url: 'https://', name: 'Website' },
  { src: require('../images/socialImages/more/Clubhouse.png'), group: 'more', picname: 'Clubhouse.png', placeholder: 'Clubhouse Link', id: 2, url: 'https://joinclubhouse.com/', name: 'Clubhouse' },
  { src: require('../images/socialImages/more/CustomLink.png'), group: 'more', picname: 'CustomLink.png', placeholder: 'URL', id: 3, url: 'https://', name: 'URL' },
  { src: require('../images/socialImages/more/Discord.png'), group: 'more', picname: 'Discord.png', placeholder: 'Discord Username', id: 4, url: 'https://discord.com/', name: 'Discord' },
  { src: require('../images/socialImages/more/File.png'), group: 'more', picname: 'File.png', placeholder: 'File Link', id: 5, url: '', name: 'File' },
  { src: require('../images/socialImages/more/Linktree.png'), group: 'more', picname: 'Linktree.png', placeholder: 'Linktree link', id: 6, url: 'https://linktr.ee/', name: 'Linktree' },
  { src: require('../images/socialImages/more/Netflix.png'), group: 'more', picname: 'Netflix.png', placeholder: 'Netflix Link', id: 7, url: 'https://netflix.com/', name: 'Netflix' },
  { src: require('../images/socialImages/more/Yelp.png'), group: 'more', picname: 'Yelp.png', placeholder: 'Yelp Link', id: 8, url: 'https://yelp.com/', name: 'Yelp' },
  { src: require('../images/socialImages/more/Podcasts.png'), group: 'more', picname: 'Podcasts.png', placeholder: 'Podcasts Link', id: 9, url: 'https://', name: 'Podcasts' },

]
const numColumns = 3;
const image2 = require('../images/background.png')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth = windowWidth * .33;
const imageWidth = viewWidth;
const imageHeight = windowHeight * .15;
// handleModelcut,username,account,handlemodalContact,idaccount
function ContactModal({ route, navigation }) {
  const { list } = route.params
  //     const [modalOpen,setModalOpen]=useState(false)

  //     const {list}=route.params

  //     const modaltoggle=()=>{
  //         setModalOpen(true)
  //          }
  //     const  handleModel2=()=>{
  //         setModalOpen(false)
  //          }
  //     const handleModel=()=>{
  //        console.log('fg')

  //           }
  // const handlESave=(usernam,nameIcon,color,url,title)=>{
  //     handlemodalContact(usernam,nameIcon,color,url,title)
  //          }
  return (
    <ImageBackground source={image2} resizeMode="cover" style={styles.image}>

      <ScrollView >

        <IconIco name="close-outline" size={40} color="#6C6C6C" style={{
          alignSelf: 'flex-end', marginTop:
            15, marginRight: 15
        }}
          onPress={() => navigation.goBack()} />

        <View>
          <Image source={require('../images/widelogo.png')} style={{
            width: 180, marginTop: 10, resizeMode: 'stretch', alignSelf: 'center',
            height: 45
          }} />

        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold' }}>{list.accountuser.charAt(0).toUpperCase() + list.accountuser.slice(1)}</Text>
        </View>

        {/* <Modal visible={modalOpen}animationType="slide" >
                                        <View >
                                            <ModalSocial handlemodal={handleModel}  handleModelcut={handleModelcut}/>
                                        </View>  
                                        
                          </Modal>  */}


        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
          <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: '#3C3B3B' }}>
            Social Media
          </Text>
        </View>

        {/* <View>
                         src={item.src} placeholder={item.placeholder}
                          
                           
                                      
                                        <FlatList
                                                 data={modalsocial}
                                                  renderItem={({item})=>{
                                                
                                                    return(
                                                        <View style={{height:WIDTH/numColumns}}>
                                                        <ContactModalcreate  url={item.url} navigation={navigation} idaccount={list._id} id={item.id} nameIcon={item.iconname} title={item.name} color={item.color}/>
                                                        </View>
                                                        )
                                                        
                                                      }}
                                            
                                            keyExtractor={item=>item.id}
                                                       numColumns={numColumns}
                                                />
                                           </View>   */}
        <View style={{ flexDirection: 'row', marginTop: 5, flexGrow: 1, flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {socialContact.map((item) => { return (<ContactModalcreate Key={uuid()} picname={item.picname} group={item.group} src={item.src} placeholder={item.placeholder} url={item.url} navigation={navigation} idaccount={list._id} id={item.id} title={item.name} />) })

          }
        </View>



        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
          <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: '#3C3B3B' }}>
            Contact
          </Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 5, flexGrow: 1, flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {contact.map((item) => { return (<ContactModalcreate Key={uuid()} picname={item.picname} group={item.group} src={item.src} placeholder={item.placeholder} url={item.url} navigation={navigation} idaccount={list._id} id={item.id} title={item.name} />) })

          }
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
          <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: '#3C3B3B' }}>
            Music
          </Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 5, flexGrow: 1, flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {music.map((item) => { return (<ContactModalcreate Key={uuid()} picname={item.picname} group={item.group} src={item.src} placeholder={item.placeholder} url={item.url} navigation={navigation} idaccount={list._id} id={item.id} title={item.name} />) })

          }
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
          <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: '#3C3B3B' }}>
            Payment
          </Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 5, flexGrow: 1, flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {payment.map((item) => { return (<ContactModalcreate Key={uuid()} picname={item.picname} group={item.group} src={item.src} placeholder={item.placeholder} url={item.url} navigation={navigation} idaccount={list._id} id={item.id} title={item.name} />) })

          }
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
          <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: '#3C3B3B' }}>
            Crypto
          </Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 5, flexGrow: 1, flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {crypto.map((item) => { return (<ContactModalcreate Key={uuid()} picname={item.picname} group={item.group} src={item.src} placeholder={item.placeholder} url={item.url} navigation={navigation} idaccount={list._id} id={item.id} title={item.name} />) })

          }
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
          <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: '#3C3B3B' }}>
            More
          </Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 5, flexGrow: 1, flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {more.map((item) => { return (<ContactModalcreate Key={uuid()} picname={item.picname} group={item.group} src={item.src} placeholder={item.placeholder} url={item.url} navigation={navigation} idaccount={list._id} id={item.id} title={item.name} />) })

          }
        </View>

        {/* <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'stretch'}}> */}
        <View style={{ marginTop: 40 }}></View>


      </ScrollView>

      {/* <TouchableOpacity onPress={() => {console.log('clicked')}} style={{marginHorizontal:31, borderRadius:10, backgroundColor:'grey',marginTop:1, height:40,width:300,alignContent:'center',alignSelf:'center'}}> 
                  <Text style={{textAlign:'center',padding:5,fontSize:17,color:'white',fontSize:20,fontWeight:'bold'}}>Save</Text>
              </TouchableOpacity> */}

    </ImageBackground>
  )

}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%"
  }
})
export default ContactModal

