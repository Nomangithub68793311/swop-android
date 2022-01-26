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
  Dimensions,
  ImageBackground,
  Linking,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper'
import { Surface } from 'react-native-paper'
import IconQR from 'react-native-vector-icons/Ionicons'
import { flexDirection } from 'styled-system';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth = windowWidth * .25;
const imageWidth = viewWidth;
const imageHeight = windowHeight * .1;
const image2 = require('../images/background.png')

const products = [
  { imageUrl: [require('../images/product/Swop/1.jpg'), require('../images/product/Swop/1.jpg')], name: 'Black NFC Sticker', price: "$9.99", _id: 17 },
  { imageUrl: [require('../images/product/Swop/2.jpg'), require('../images/product/Swop/2.jpg')], name: 'Diamond NFC Sticker', price: "$9.99", _id: 1 },
  { imageUrl: [require('../images/product/Swop/3.jpg'), require('../images/product/Swop/3.jpg')], name: 'DogTag', price: "$9.99", _id: 2 },
  { imageUrl: [require('../images/product/Swop/4.jpg'), require('../images/product/Swop/4.jpg')], name: 'Flat Black NFC', price: "$9.99", _id: 3 },
  { imageUrl: [require('../images/product/Swop/5.jpg'), require('../images/product/Swop/5.jpg')], name: 'Galaxy NFC Sticker', price: "$9.99", _id: 4 },
  { imageUrl: [require('../images/product/Swop/6.jpg'), require('../images/product/Swop/6.jpg')], name: 'Gold Glitter NFC', price: "$9.99", _id: 5 },
  { imageUrl: [require('../images/product/Swop/7.jpg'), require('../images/product/Swop/7.jpg')], name: 'Gold NFC Sticker', price: "$14.99", _id: 6 },
  { imageUrl: [require('../images/product/Swop/8.jpg'), require('../images/product/Swop/8.jpg')], name: 'Midnight Retro NFC Sticker', price: "$9.99", _id: 7 },
  { imageUrl: [require('../images/product/Swop/9.jpg'), require('../images/product/Swop/9.jpg')], name: 'Pearl White Chip', price: "$9.99", _id: 8 },
  { imageUrl: [require('../images/product/Swop/10.jpg'), require('../images/product/Swop/10.jpg')], name: 'Prism NFC Keychain', price: "$9.99", _id: 9 },
  { imageUrl: [require('../images/product/Swop/11.jpg'), require('../images/product/Swop/11.jpg')], name: 'Prism NFC Sticker', price: "$14.99", _id: 10 },
  { imageUrl: [require('../images/product/Swop/12.jpg'), require('../images/product/Swop/12.jpg')], name: 'Prism NFC Sticker', price: "$9.99", _id: 11 },
  { imageUrl: [require('../images/product/Swop/13.jpg'), require('../images/product/Swop/13.jpg')], name: 'Prism Swop Keychain', price: "$9.99", _id: 12 },
  { imageUrl: [require('../images/product/Swop/14.jpg'), require('../images/product/Swop/14.jpg')], name: 'Purple NFC Popsocket', price: "$9.99", _id: 13 },
  { imageUrl: [require('../images/product/Swop/15.jpg'), require('../images/product/Swop/15.jpg')], name: 'Starry Midnight NFC sticker', price: "$9.99", _id: 14 },
  { imageUrl: [require('../images/product/Swop/16.jpg'), require('../images/product/Swop/16.jpg')], name: 'Swop Original NFC Card', price: "$9.99", _id: 15 },
  { imageUrl: [require('../images/product/Swop/17.jpg'), require('../images/product/Swop/17.jpg')], name: 'Turquoise NFC Sticker', price: "$9.99", _id: 16 },



]

function Buyswop() {
  const [product, setProduct] = useState([])
  const fectData = async () => {
    fetch("https://travherswopapp.herokuapp.com/site/product", {
      method: 'GET'


    }).then(res => res.json()).then(data => { setProduct(data.products); console.log('profile', product) })
      .catch(err => { console.log(err) })

  }

  useEffect(() => {

    fectData();
    return () => {
      console.log('profile', product)
    }

  }, [])
  const productPage = (id) => {
    Linking.openURL(`https://traviskaterherron.wixsite.com/my-site/${id}`)
  }
  return (
    <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
      <ScrollView keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag" style={{ width: "100%", height: "100%" }} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>

        <Text style={{ fontSize: 20, color: '#6C6C6C', fontFamily: 'Poppins-Regular', textAlign: 'center', marginTop: 50 }}>
          All Digital Products
        </Text>

        <View style={{ flexDirection: 'row', marginTop: 20, flexWrap: 'wrap', justifyContent: 'space-between', marginHorizontal: 25 }}>

          {product ? product.map(item => {
            return (

              <TouchableOpacity Key={item._id} onPress={() => productPage(item._id)} style={{ width: viewWidth, height: viewWidth, marginBottom: 10, marginHorizontal: 10 }}>
                <Image source={{ uri: item.imageUrl[0] }} style={{ alignSelf: 'center', borderRadius: 16 }} />
                <Text style={{ textAlign: 'center', marginTop: 5, fontFamily: 'Poppins-Light' }}>{item.name}
                  {"\n"}${item.price}{"\n"}
                </Text>
              </TouchableOpacity>



            )



          }
          )


            : null
          }



        </View>
      </ScrollView>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({

  image: {
    width: "100%",
    height: "100%"
  }


})
export default Buyswop