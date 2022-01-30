import React, { useState, useEffect, useContext, useCallback } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Height } from './SplashScreen'
import uuid from 'react-uuid'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Modal,
  Linking,
  TextInput,
  Text,
  Image,
  ToastAndroid,
  AlertIOS,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  StatusBar,
  Alert,
  RefreshControl,
  ImageBackground,
  Dimensions

} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconButton from 'react-native-vector-icons/Ionicons'
import ModalName from './ModalName'
import { Width } from './SplashScreen'
import { Surface } from 'react-native-paper'
import { NotesContext } from '../Reducers/Context'
import { ADD_ACCOUNT } from '../Reducers/action';

// const wait = timeout => {
//     return new Promise(resolve => {
//       setTimeout(resolve, timeout);
//     });
//   };
// const image = { uri: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9rZWglMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" };
const image2 = require('../images/background.png')
const Heightt = 72;

const Profile = ({ navigation, route }) => {
  const { users } = route.params ? route.params : []

  const { state, addProfile, adduserAccount, adduserAccountdelete, addBioEdit, addLoading } = useContext(NotesContext)
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoadingg] = useState(true)
  const [loading2, setLoading2] = useState(state.loading)
  const [check, setCheck] = useState('')
  const [refreshing, setRefreshing] = useState(true)
  const [newaccount, setNewAccount] = useState({});
  const [accountss, setAccountss] = useState(state.account ? state.account : [])
  const [pic, setPic] = useState(require('../images/propic.png'))
  const [id, setId] = useState();

  const { bio } = route.params ? route.params : ''
  console.log('hah', bio)
  // const[account,setAccount]=useState(state.account?state.account:[])

  // const onRefresh = React.useCallback(() => {
  //     setRefreshing(true);

  //     wait(2000).then(() => setRefreshing(false));
  //   }, []);


  useEffect(() => {

    const fectData = async () => {
      const token = await AsyncStorage.getItem('token')
      const sendDate = (new Date()).getTime();
      fetch('https://travherswopapp.herokuapp.com/profile', {

        headers: {
          Authorization: "Bearer " + token,

        }

      }).then(res => res.json()).then((details) => {
        if (details.error) { console.log("vul") } else {
          // setNewname(data.user.postedBy.fullname);setNewname(data.user.fullname)
          var receiveDate = (new Date()).getTime();
          var responseTimeMs = receiveDate - sendDate;
          console.log('where coming', details.time)
          console.log('time taken for response', responseTimeMs)
          const profile = {
            name: details.user.fullname ? details.user.fullname : '',
            bio: details.user.data.bio ? details.user.data.bio : '',
            pic: details.user.data.pic ? details.user.data.pic : '',

            referralCode: details.user.referralCode ? details.user.referralCode : '',

            totalAmount: details.user.totalAmount ? details.user.totalAmount : null,
            nfcGet: details.user.nfcGet ? details.user.nfcGet : null




          }

          // const accountuser= [{
          //     accountname:details.user.account.accountuser,userLink:details.user.account.userLink ,id:details.user.account._id
          // }]
          addProfile(profile);

          // console.log('hah',details.user.account)
          const accountstotal = details.user.account ? details.user.account : []
          adduserAccount(accountstotal)

          setLoadingg(false)


        }
      }).catch(err => {
        console.log('profile me', err)
        if (Platform.OS === 'android') {
          ToastAndroid.show("Please Complete Your Profile", ToastAndroid.SHORT);
        } else {
          AlertIOS.alert(data.error);
        }
        navigation.replace('EditBioPage')

      })
    }

    fectData()
    return () => {
      console.log('profile me')
    }

  }, [])

  useEffect(() => {
    const hello = () => {
      newaccount ? setAccountss((pre) => {
        return [...pre, newaccount]
      }) : setAccounts([])
    }
    hello()
  }, [newaccount])

  useEffect(() => {
    const hello = () => {
      addLoading(false)
    }
    state.loading == true ? hello() : ''
  }, [state.loading])

  useEffect(() => {
    const hello = () => {
      users ? setAccountss((pre) => {
        return [...pre, ...users]
      }) : setAccountss([])
    }

    hello()
  }, [users])

  const handleModel = () => {

    setModalOpen(false)

  }

  const handleModel2 = () => {
    setModalOpen(false)
  }

  const logout = () => {
    AsyncStorage.removeItem('token').then(() => { navigation.replace('SplashScreen') }).catch(err => console.log('error'))
  }
  const openURLl = () => {
    const url = "sms:+123456789";

    //  const handlepress=async()=>{
    //    await Linking.openSettings();tiktok://user?username=apple
    //  }
    //  handlepress();
    const checkUr = Linking.canOpenURL(url)
    console.log("what", checkUr)
    if (checkUr) {
      Linking.openURL(url);
    } else {
      console.log("not worked")
    }

  }



  return (<>
    {
      loading || state.loading ? <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View> :

        (<SafeAreaView >

          <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
            <ScrollView

            >

              <View>

                <View style={{ flexDirection: 'row', marginTop: 15, marginHorizontal: 25 }}>
                  {
                    state.profile.pic ? <Image style={{ height: 100, width: 100, backgroundColor: 'white', borderRadius: 200 }} source={{ uri: state.profile.pic }} />
                      : <Image style={{ height: 100, width: 100, backgroundColor: 'white', borderRadius: 200 }} source={require('../images/profpic.png')} />
                  }

                  <View style={{ marginTop: 5, marginHorizontal: 5 }}>
                    <Title style={{ color: '#3C3B3B' }}>{state.profile.name ? state.profile.name : ''}</Title>
                    <Caption style={{ color: '#3C3B3B', textAlign: 'justify', marginEnd: 75 }}>{state.profile.bio ? state.profile.bio : ''}</Caption>
                    {/* <Caption style={{fontSize:14,fontWeight:'bold'}}>Gender: {state.profile.gender?state.profile.gender:''}</Caption> */}
                  </View>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-around' }}>



                  <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginVertical: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Editprofile', { state })} style={{ width: 150, padding: 10, marginHorizontal: 3, backgroundColor: 'white', elevation: 7, borderRadius: 10 }}>
                      <Text style={{ textAlign: 'center', color: '#3C3B3B', fontSize: 16, fontFamily: 'Poppins-Regular' }}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={logout} style={{ width: 150, padding: 10, marginHorizontal: 3, backgroundColor: '#3C3B3B', borderRadius: 10 }}>
                      <Text style={{ textAlign: 'center', color: '#FCFCFF', fontSize: 16, fontFamily: 'Poppins-Regular' }}> Log Out</Text>
                    </TouchableOpacity>
                  </View>
                  {/* <TouchableOpacity onPress={openURLl} style={{height:45,width:150,padding:10,marginHorizontal:3 ,backgroundColor:'#3C3B3B',borderRadius:10}}>
                 <Text style={{textAlign:'center' ,color:'#FCFCFF',fontSize:16,fontFamily:'Poppins-Regular'}}> openurl</Text>
                 </TouchableOpacity> */}

                </View>


              </View>
              {/* <View style={{marginLeft:15,marginTop:10}}>
                   <IconButton name="md-add-circle-sharp" size={70} style={{alignSelf:'center'}}
                    onPress={()=>setModalOpen(true)}

                    
                    /> */}
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity onPress={() => setModalOpen(true)} style={{
                  alignItems: 'center',
                  justifyContent: 'center', borderRadius: 12, backgroundColor: '#758AF2', marginVertical: 5, height: 56, width: 56
                }}>
                  <Text style={{ textAlign: 'center', fontSize: 30, color: '#FFFFFF' }}>+</Text>
                </TouchableOpacity>
              </View>

              <Text style={{ textAlign: 'center', fontSize: 16, marginBottom: 8, fontFamily: 'Poppins-Medium', color: '#3C3B3B' }}>
                Add Account
              </Text>



              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {6 > state.account.length > 0 ? state.account.map((list) => {
                  return (<View Key={uuid()} style={styles.items}  ><TouchableOpacity style={{ justifyContent: 'flex-start', flexDirection: 'row' }} onPress={() => { navigation.navigate('Account2', { list }) }}>
                    <Image style={{ height: 72, width: 72, borderRadius: 12 }} source={{ uri: list.pic }} />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ color: '#3C3B3B', fontFamily: 'Poppins-Bold', textAlign: 'center', fontSize: 20, marginHorizontal: 30 }}>{list.accountuser}</Text>
                    </View>
                  </TouchableOpacity>

                  </View>)
                }) :

                  null}
              </View>
            </ScrollView>
            <Modal visible={modalOpen} animationType="slide" style={{ height: 100, width: 300 }}>
              <View>
                <ModalName setNewAccount={setNewAccount} setCheck={setCheck} handlemodal={handleModel} handleModelcut={handleModel2} />

              </View>
            </Modal>
            <View>

            </View>



          </ImageBackground>

        </SafeAreaView>)}

  </>)





}
const styles = StyleSheet.create({
  username: {
    width: 300, height: 40, borderWidth: 2, borderRadius: 5, marginLeft: 60, marginBottom: 5
  },
  image: {
    width: "100%",
    height: "100%"
  },

  items: {
    width: '95%',
    height: 72,
    backgroundColor: '#F6F6F6',


    marginVertical: 8,
    borderRadius: 15,
    borderColor: 'grey',
    fontSize: 20,
    justifyContent: 'flex-start',
    elevation: 2


  }
})
export default Profile
