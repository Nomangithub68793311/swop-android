import React, { useState, useEffect, useContext } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Height } from './SplashScreen'
import uuid from 'react-uuid'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  AlertIOS,
  Platform,
  ToastAndroid,
  Button,
  View,
  Modal,

  TextInput,
  PanResponder,
  Text,
  Animated,
  RefreshControl,
  ImageBackground,
  Image,
  FlatList,

  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar, Dimensions

} from 'react-native';
import {


  Actionsheet,
  useDisclose,
  Icon,
  Center,
  NativeBaseProvider,
} from "native-base"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sliderpage from './Sliderpage'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper'
import IconButton from 'react-native-vector-icons/Ionicons'
import Tick from 'react-native-vector-icons/MaterialIcons'
import QrModal from './QrModal'
import ActivateModal from './ActivateModal'
import { v4 as uuidv4 } from 'uuid';
import ContactModal from './ContactModal'
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'
import Icofon from 'react-native-vector-icons/Fontisto'
import IconIco from 'react-native-vector-icons/Ionicons'

import { Width } from './SplashScreen'
import { Surface } from 'react-native-paper'
import Linkmodal from './Linkmodal'
import Linkmodalcreate from './Linkmodalcreate'
import { NotesContext } from '../Reducers/Context'
import Nfcwrite from './Nfcwrite'
// import { FlatList } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const numColumns = 3;
const WIDTH = Dimensions.get('window').width
const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};
const image2 = require('../images/background.png')

const Account2 = ({ navigation, route }) => {
  const { list } = route.params
  const { useacc } = route.params
  const { user } = route.params


  const { state, getsocialinks, adduserAccount, getindividuallinks, addToken, adduserAccountdelete } = useContext(NotesContext)
  const [token, setToken] = useState(null)
  const [tokenoff, setTokenoff] = useState(null)
  const [activeid, setActivateid] = useState()
  const [activeoffid, setActivateoffid] = useState()
  const [oldtoken, setOldtoken] = useState(null)
  const [oldtokenid, setOldtokenid] = useState()
  const [userAfterDelete, setUserAfterDelete] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [qrOpen, setQrOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [accountsocial, setAccountsocial] = useState('')
  const [id, setId] = useState('')
  const [accounts, setAccounts] = useState([])
  const [linkModalopen, setLinkModalopen] = useState(false)
  const [linkModal, setLinkModal] = useState(false)
  const [name, setNmae] = useState(false)
  const [warn, setWarn] = useState(true)
  const [socialid, setSocialid] = useState('')





  // console.log("off direct",token ) 
  // console.log("active activeid ",activeid ) 

  useEffect(() => {
    const fetchData = async () => {
      const autho = await AsyncStorage.getItem('token')
      fetch(`https://travherswopapp.herokuapp.com/account/${list._id}`, {

        headers: {
          Authorization: "Bearer " + autho
        }

      }).then(res => res.json()).then((data) => {
        if (data.error) { console.log(data.error) } else {


          // data.account.accountlinks? 
          // setAccounts([...data.account.accountlinks]):setAccounts([])


          data.account.accountlinks ?
            setAccounts((pre) => {
              return [...data.account.accountlinks]
            }) : setAccounts([])
          // console.log("array",accounts,) 
          // console.log("array",typeof(state.link))


        }
      }).catch(err => { console.log(err); navigation.replace('Login') })
    }


    fetchData();
    return () => {

    }

  }, [])
  ////if user deleted    
  useEffect(() => {
    const hello = () => {
      userAfterDelete ? setAccounts((pre) => {
        return [...userAfterDelete]
      }) : setAccounts([])
    }
    hello()
  }, [userAfterDelete])

  useEffect(() => {
    const hello = () => {
      user ? setAccounts((pre) => {
        return [...pre, user]
      }) : setAccounts([])
    }
    hello()
  }, [user])

  ///////if user is direct on

  useEffect(() => {
    const hello = () => {
      const objIndex = accounts.findIndex((obj => obj._id.toString() == activeid.toString()));
      accounts[objIndex].active = true;
      setAccounts((pre) => {
        return [...accounts]
      })

    }
    (token == true && activeid) ? hello() : ''
  }, [token, activeid])

  ///// if user to direct off
  useEffect(() => {
    const hello = () => {
      const objIndex = accounts.findIndex((obj => obj._id.toString() == activeoffid.toString()));
      accounts[objIndex].active = false;
      setAccounts((pre) => {
        return [...accounts]
      })


    }
    (tokenoff == false && activeoffid) ? hello() : ''
  }, [tokenoff, activeoffid])

  /////old user direct on turned to direct off

  useEffect(() => {
    const hello = () => {
      const objIndex = accounts.findIndex((obj => obj._id.toString() == oldtokenid.toString()));
      accounts[objIndex].active = false;
      setAccounts((pre) => {
        return [...accounts]
      })
    }
    (oldtoken == false && oldtokenid) ? hello() : ''
  }, [oldtoken, oldtokenid])
  /////if user eidted
  useEffect(() => {
    const hello = () => {
      const objIndex = accounts.findIndex((obj => obj._id.toString() == useacc._id.toString()));
      // newaccount.active=token;
      accounts[objIndex].usernam = useacc.usernam;
      setAccounts((pre) => {
        return [...accounts]
      })
    }

    useacc ? hello() : ''
  }, [useacc])



  const handleModel2 = () => {
    setModalOpen(false)
    setQrOpen(false)
    setContactOpen(false)
    setLinkModal(false)
  }





  const handlemodal = () => {
    console.log('yooy')
  }


  const handlemodel = () => {
    console.log('yooy')
  }
  const accountDelete = async (accid) => {
    fetch(`https://travherswopapp.herokuapp.com/deleteaccount/${accid}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + await AsyncStorage.getItem('token'),
      }
    }).then(res => res.json()).then(data => {
      if (data.error) {
        console.log('error')
      } else {
        // console.log('yess',data.users.account)
        const users = data.users.account ? data.users.account : []
        adduserAccountdelete(users)

        navigation.navigate('Profile')
        if (Platform.OS === 'android') {
          return ToastAndroid.show("Your Account Successfully Deleted", ToastAndroid.SHORT);
        } else {
          AlertIOS.alert("No Fields should be empty");
        }

      }
    })
      .catch(err => console.log(err))
  }
  const editPage = () => {
    navigation.navigate('Editpage', { list })
  }
  return (

    <ImageBackground source={image2} resizeMode="cover" style={styles.image}>

      {/* <ScrollView style={{backgroundColor:'white'}}> */}

      <ScrollView

      >
        <View style={{ marginTop: 10 }}>


          {/* <View style={{flexDirection:'row'}}> */}
          {/* <IconIco name="arrow-back" size={25} color="#6C6C6C" style={{alignSelf:'flex-start',marginTop:
                       1,marginRight:100,marginLeft:10}}
                       onPress={()=>navigation.goBack()} /> */}
          {list.pic ? <Image source={{ uri: list.pic }} style={{
            width: 150, alignSelf: 'center', borderRadius: 200,
            height: 150
          }} /> : <Image style={{ height: 150, width: 150, borderRadius: 200, alignSelf: 'center' }} source={require('../images/propic.png')} />}
          {/* </View> */}
          <View>
            <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Poppins- ld', marginTop: 15 }} >{list.accountuser.charAt(0).toUpperCase() + list.accountuser.slice(1)}</Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
            <TouchableOpacity onPress={() => setModalOpen(true)} style={{ width: 130, padding: 10, marginHorizontal: 3, backgroundColor: '#F6F6F6', elevation: 7, borderRadius: 12 }}>
              <Text style={{ textAlign: 'center', color: '#3C3B3B', fontSize: 16, fontFamily: 'Poppins-Regular' }}>Activate</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setQrOpen(true)} style={{ width: 130, padding: 10, marginHorizontal: 3, backgroundColor: '#3C3B3B', borderRadius: 12 }}>
              <Text style={{ textAlign: 'center', color: '#FCFCFF', fontSize: 16, fontFamily: 'Poppins-Regular' }}>QR Code</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginVertical: 10 }}>
            <TouchableOpacity onPress={editPage} style={{ width: 130, padding: 10, marginHorizontal: 3, backgroundColor: '#F6F6F6', elevation: 7, borderRadius: 12 }}>
              <Text style={{ textAlign: 'center', color: '#3C3B3B', fontSize: 16, fontFamily: 'Poppins-Regular' }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => accountDelete(list._id)} style={{ width: 130, padding: 10, marginHorizontal: 3, backgroundColor: '#3C3B3B', borderRadius: 12 }}>
              <Text style={{ textAlign: 'center', color: '#FCFCFF', fontSize: 16, fontFamily: 'Poppins-Regular' }}> Delete</Text>
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            {warn ? <Text style={{ fontFamily: 'Poppins-Regular', color: '#6C6C6C' }} >
              Your SWOP directly opens to your Account
            </Text> :
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#6C6C6C' }} >
                Your SWOP directly opens to your selected link
              </Text>}

          </View>

          {/* <View style={{marginLeft:15,marginTop:10}}>
                       <IconButton name="md-add-circle-sharp" size={70} style={{alignSelf:'center'}}
                        onPress={()=>navigation.navigate('ContactModal',{list})}/>
                    </View> */}
          <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('ContactModal', { list })} style={{
              alignItems: 'center',
              justifyContent: 'center', borderRadius: 12, backgroundColor: '#758AF2', marginVertical: 5, height: 56, width: 56
            }}>
              <Text style={{ textAlign: 'center', fontSize: 30, color: '#FFFFFF' }}>+</Text>
            </TouchableOpacity>
          </View>
          {/* <FlatList
                    data={Array.from( state.link)}
                    renderItem={({item})=>{
                        return(
                            <>
                            <Linkmodalcreate   handleModelcut={handleModel2}nameIcon={item.nameIcon}color={item.color}url={item.url}title={item.title}usernam={item.usernam}id={item._id}/>
                            </>
                        )
                    }}
                    
                     style={{flexDirection:'row',marginTop:5,flexGrow:1,flexWrap:'wrap',justifyContent:'space-evenly'}}
                     style={{flexDirection:'row',marginTop:5,flexGrow:1,flexWrap:'wrap',justifyContent:'space-evenly'}}
                    /> */}


          <View style={{ flexDirection: 'row', marginTop: 5, flexWrap: 'wrap', justifyContent: 'space-evenly', flexGrow: 1 }}>
            {accounts ? accounts.map(item => { return < Sliderpage Key={uuid()} setTokenoff={setTokenoff} socialid={socialid} setId={setId} setToken={setToken} setActivateoffid={setActivateoffid} setUserAfterDelete={setUserAfterDelete} setActivateid={setActivateid} setWarn={setWarn} setOldtoken={setOldtoken} setSocialid={setSocialid} setOldtokenid={setOldtokenid} item={item} list={list} accusername={list.username} idd={list._id} navigation={navigation} /> }) : null}
          </View>
          <View style={{ marginTop: 40 }}></View>

          <Modal visible={modalOpen} animationType="slide" style={{ height: 100, width: 300 }}>
            <View>
              <ActivateModal handlemodalActive={handlemodel} handleModelcut={handleModel2} username={list.username} />

            </View>
          </Modal>
          <Modal visible={qrOpen} animationType="slide" style={{ height: 100, width: 300 }}>
            <View>
              <QrModal handlemodalQr={handlemodel} handleModelcut={handleModel2} username={list.username} />

            </View>
          </Modal>

          <View>

          </View>


        </View>
      </ScrollView>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({

  image: {
    width: "100%",
    height: "100%"
  },


})

export default Account2



