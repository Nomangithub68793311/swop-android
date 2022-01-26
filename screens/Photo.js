import React, { useState, useEffect, useContext } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Height } from './SplashScreen'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  TextInput,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Alert,
  Keyboard,
  AlertIOS,
  ToastAndroid,
  Platform,
} from 'react-native';
import {
  Input, Icon, Box, Center, NativeBaseProvider, Button,
  Actionsheet, Text,
  useDisclose,
} from "native-base"
import IconmAT from 'react-native-vector-icons/MaterialIcons'
import Iconyo from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper'
import SwitchSelector from "react-native-switch-selector";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NotesContext } from '../Reducers/Context'

const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Others", value: "Others" }
];
const image = require('../images/background.png')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth = windowWidth * .30;
const imageWidth = viewWidth;
const imageHeight = windowHeight * .85;

function Photo({ navigation, route }) {
  // const [bio, setBio] = useState('')
  // const [gender, setGender] = useState('')

  // const [iid, setId] = useState('')
  // const [dob, setDob] = useState(true)
  // // const [photo,setPhoto]=useState('')
  // const[info,setInfo]=useState('')
  // const [image,setImage]=useState('')
  // const[year,setYear]=useState('')
  // const[month,setMonth]=useState('')
  // const[day,setDay]=useState('')
  // const [date, setDate] = useState(new Date())
  const [bio, setBio] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [iid, setId] = useState('')
  const [loading, setLoading] = useState(false)
  const [empty, setEmpty] = useState('')

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const { url } = route.params ? route.params : ''

  const { addBio } = useContext(NotesContext)


  const fectData = async () => {
    const token = await AsyncStorage.getItem('token')
    fetch("https://travherswopapp.herokuapp.com/photo", {
      headers: {
        Authorization: "Bearer " + token
      }

    }).then(data => data.json()).then(data => { console.log(data); setId(data.id) })
      .catch(err => { console.log(err); navigation.navigate('Bllack') })

  }

  useEffect(() => {

    fectData();

  }, [])




  const handleSubmit = async () => {
    Keyboard.dismiss()
    if (bio.length < 1 || address.length < 1 || city.length < 1 || zipcode.length < 1 || state.length < 1 || country.length < 1) {
      if (Platform.OS === 'android') {
        return ToastAndroid.show("Please Fill All Sections", ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("No Fields should be empty");
      }
    }







    else {
      setLoading(true)

      fetch("https://travherswopapp.herokuapp.com/updateprofileBio", {
        method: 'POST',
        headers: {
          Authorization: "Bearer " + await AsyncStorage.getItem('token'),
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "bio": bio,
          "address": address,
          "pic": url ? url : '',
          "id": iid,
          "city": city,
          "zipcode": zipcode,
          "state": state,
          "country": country

        })
      }).then(res => res.json()).then((data) => {
        if (data.error) {
          setLoading(false)
          console.log(data.error);
        }
        else {
          setLoading(false)
          const bio = {
            bio: data.bioData.bio ? data.bioData.bio : '',
            pic: data.bioData.pic ? data.bioData.pic : '',
            address: data.bioData.address ? data.bioData.address : '',
            city: data.bioData.city ? data.bioData.city : '',
            zipcode: data.bioData.zipcode ? data.bioData.zipcode : '',
            state: data.bioData.state ? data.bioData.state : '',
            country: data.bioData.address ? data.bioData.address : '',



          }
          addBio(bio);


          navigation.replace('Profile')
          setAddress(''); setCity(''); setZipcode(''); setState(''); setCountry('')
            ; setBio(''); setId('')
        }
      })
        .catch(err => {
          setLoading(false)
          console.log('err', err)
        })
    }

  }












  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  //   setDob(false)
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {

  //     const year=date.getFullYear();
  //     setYear(year)
  //     const month=date.getMonth();
  //     setMonth(month)
  //     const day=date.getDay();
  //     setDay(day)
  //   console.log("A date has been picked: ", year,month,day);

  //   hideDatePicker();
  // };





  return (

    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <ScrollView keyboardShouldPersistTaps="handled" style={{ width: "100%", height: "100%" }} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={{ alignItems: 'center', marginBottom: 25, marginTop: windowHeight * .15 }}>
            <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#6C6C6C' }} >Complete Your Profile </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Box w="83%"  >
              <View style={{ elevation: 2, backgroundColor: 'white', borderRadius: 10 }}>
                <Input
                  value={bio}
                  onChangeText={val => setBio(val)}
                  multiline

                  placeholder="Bio" // mx={4}
                  _light={{
                    placeholderTextColor: "#9D9D9D",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
                  }}
                />
              </View>
              <View style={{ marginVertical: 7 }}></View>
              <Text style={{ color: "#3C3B3B", fontFamily: "Poppins-Regular", fontSize: 14 }}>Address(Required)</Text>
              <View style={{ marginVertical: 7 }}></View>
              <View style={{ elevation: 2, backgroundColor: 'white', borderRadius: 10 }}>
                <Input

                  value={address}
                  onChangeText={val => setAddress(val)}


                  placeholder="Address Line 1" // mx={4}
                  _light={{
                    placeholderTextColor: "#9D9D9D",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
                  }}
                />
              </View>
              <View style={{ marginVertical: 7 }}></View>
              <View style={{ elevation: 2, backgroundColor: 'white', borderRadius: 10 }}>
                <Input
                  value={city}

                  onChangeText={val => setCity(val)}


                  placeholder="City" // mx={4}
                  _light={{
                    placeholderTextColor: "#9D9D9D",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
                  }}
                />
              </View>
              <View style={{ marginVertical: 7 }}></View>
              <View style={{ elevation: 2, backgroundColor: 'white', borderRadius: 10 }}>
                <Input
                  value={zipcode}

                  onChangeText={val => setZipcode(val)}


                  placeholder="Zip Code" // mx={4}
                  _light={{
                    placeholderTextColor: "#9D9D9D",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
                  }}
                />
              </View>
              <View style={{ marginVertical: 7 }}></View>
              <View style={{ elevation: 2, backgroundColor: 'white', borderRadius: 10 }}>
                <Input
                  value={state}

                  onChangeText={val => setState(val)}


                  placeholder="State" // mx={4}
                  _light={{
                    placeholderTextColor: "#9D9D9D",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
                  }}
                />
              </View>
              <View style={{ marginVertical: 7 }}></View>
              <View style={{ elevation: 2, backgroundColor: 'white', borderRadius: 10 }}>
                <Input
                  value={country}

                  onChangeText={val => setCountry(val)}


                  placeholder="Country" // mx={4}
                  _light={{
                    placeholderTextColor: "#9D9D9D",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
                  }}
                />
              </View>
              <View style={{ marginVertical: 7 }}></View>


            </Box>
          </View>

          {loading ? <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{
              alignItems: 'center',
              justifyContent: 'center', borderRadius: 12, backgroundColor: '#536DEF', marginVertical: 10, height: 56, width: 343
            }}>
              <ActivityIndicator size="large" color="black" />
            </TouchableOpacity>
          </View> :
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={handleSubmit} style={{
                alignItems: 'center', marginBottom: 30,
                justifyContent: 'center', borderRadius: 12, backgroundColor: '#536DEF', marginVertical: 10, height: 56, width: 350
              }}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: '#FCFCFF', fontFamily: 'Poppins-Regular' }}>Create Profile</Text>
              </TouchableOpacity>
            </View>}
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
export default Photo