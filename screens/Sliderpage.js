import React,{useState,useEffect,useContext} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Button,
    View,
    Modal,
    TextInput,
    PanResponder,
    Animated,
    RefreshControl,
    ImageBackground,
    Image,
    FlatList,
    Dimensions,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    AlertIOS,
    Platform,
    ToastAndroid,
    
  } from 'react-native';
  import {
   
    
    Actionsheet,
    useDisclose,
    Icon,
    Center,
    NativeBaseProvider,
  } from "native-base" 
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'
  import Icofon from 'react-native-vector-icons/Fontisto' 
  import Tick from 'react-native-vector-icons/MaterialIcons'
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const viewWidth=windowWidth*.29;
  const imageWidth=viewWidth;
  const imageHeight=windowHeight*.15;
function Sliderpage({navigation,item,idd,setToken,setTokenoff,setActivateoffid,setId,setActivateid,setWarn,setUserAfterDelete, setOldtoken,socialid,setSocialid, setOldtokenid,list}) {
    const { isOpen, onOpen, onClose } = useDisclose()
    // const[socialid,setSocialid]=useState('')
    // const [token,setTokenn]=useState(item.active)
    // const[tokenhas,setTokemhas]=useState('')
    // const[activeid,setActiveid]=useState('');
    // const[oldtoken,setOldtoken]=useState();
    // const[oldtokenid,setOldtokenid]=useState('');
    // console.log("stauts",item.active)

    const handlepress=(num,token)=>{
    
    
        fetch('https://travherswopapp.herokuapp.com/updatedirecton',{
          method:'POST',
          headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
          body:JSON.stringify({  
           "active":!token,
           "id":num,
           "idd":idd
          })
    
          }).then(res=>res.json()).then((data)=>{
            if(data.errorac){
              setTokemhas(data.errorac)
            }
            else{
              
              // console.log('err' ,data.user)
              // console.log('socialuser._id' ,data.id2)
              setToken(data.user.active);
              
              setActivateid(data.user._id)
              setSocialid(data.socialuser._id)
              setOldtoken(false)
              setWarn(false)
              data.id2?setOldtokenid(data.id2):''
              onClose();
              
            }
          })
          .catch(err=>console.log(err))
    
        
       
      }
      const handlepressoff=(num,token)=>{
        
        fetch('https://travherswopapp.herokuapp.com/updatedirectonoff',{
          method:'POST',
          headers: {
           'Accept': 'application/json', 
           'Content-Type': 'application/json'
         },
          body:JSON.stringify({  
           "active":!token,
           "id":num,
           "idd":idd,
           "socailid":socialid
           
          })
    
          }).then(res=>res.json()).then((data)=>{
            if(data.error){
              console.log("yes hi",data.error)
            }
            else{
              // console.log("yes",data.user)
              setTokenoff(false)
              
              setActivateoffid(data.user._id)
              setWarn(true)
              onClose();
            
            }
          })
          .catch(err=>console.log(err))

    
        
       
      }

const SocialDelete= async(soaid)=>{
  fetch(`https://travherswopapp.herokuapp.com/deleteSocial/${soaid}/${idd}`,{
    method:"delete",
    headers: {
      Authorization:"Bearer "+await AsyncStorage.getItem('token'),
     }
}).then(res=>res.json()).then(data=>{
    if(data.error){
        console.log('error')
    }else{
      console.log('yess',data.users.accountlinks)
      const users=data.users.accountlinks?data.users.accountlinks:[]
      setUserAfterDelete(users)
     
      
      onClose();
      if (Platform.OS === 'android') {
        return ToastAndroid.show("Successfully Deleted", ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("No Fields should be empty");
      }  
    }
})
.catch(err=>console.log(err))

}
    return (
       
          <View>

   
      

      <TouchableOpacity  style={{width:viewWidth,margin:5}} onPress={onOpen}>
      {item.active?<Tick name="check-circle" size={20} color='green' style={{position:'absolute',top:-10,right:-8}}/>:null}

    <Image    style={{height:imageHeight,width:imageWidth,borderColor:item.active?'green':null,borderWidth:item.active?2:null,borderRadius:20}}
    source={item.src} />
    </TouchableOpacity>
    
     
              <Actionsheet isOpen={isOpen} onClose={onClose} size="full" style={{justifyContent:'center'}}>

<Actionsheet.Content >
{item.title=="ETH"||item.title=="BTC"||item.title=="USDC"||item.title=="CashApp"||item.title=="Venmo"?null:
  item.active?<Actionsheet.Item
    onPress={()=>handlepressoff(item._id,item.active)}
    style={{justifyContent:'center',alignItems:'center',borderTopWidth:2,borderTopColor:"#CECECE",fontFamily:'Poppins-Regular',fontSize:18,color:'#3C3B3B'}}
    >
    Direct Off
    </Actionsheet.Item>:
    <Actionsheet.Item
    onPress={()=>handlepress(item._id,item.active)}
    style={{justifyContent:'center',alignItems:'center',borderTopWidth:2,borderTopColor:"#CECECE",fontFamily:'Poppins-Regular',fontSize:18,color:'#3C3B3B'}}
    >
    Direct On
    </Actionsheet.Item>
  }
<Actionsheet.Item
onPress={()=>SocialDelete(item._id)}
style={{justifyContent:'center',alignItems:'center',fontFamily:'Poppins-Regular',fontSize:18,color:'#3C3B3B',borderTopWidth:2,borderTopColor:"#CECECE"}}
>
Delete
</Actionsheet.Item>
<Actionsheet.Item
onPress={()=>navigation.navigate('Linkmodal',{item:item,idd:list._id})}

style={{justifyContent:'center',alignItems:'center',fontFamily:'Poppins-Regular',fontSize:18,color:'#3C3B3B',borderTopWidth:2,borderTopColor:"#CECECE"}}
>
Edit
</Actionsheet.Item>
<Actionsheet.Item
onPress={()=>onClose()}
style={{justifyContent:'center',alignItems:'center',fontFamily:'Poppins-Regular',fontSize:18,color:'#3C3B3B',borderTopWidth:2,borderTopColor:"#CECECE"}}
>
Cancel
</Actionsheet.Item>
<Actionsheet.Item
style={{justifyContent:'center',alignItems:'center',fontFamily:'Poppins-Regular',fontSize:18,color:'#3C3B3B',borderTopWidth:2,borderTopColor:"#CECECE"}}
>
</Actionsheet.Item>
</Actionsheet.Content>
</Actionsheet>
    </View>
) 


    
}

export default Sliderpage
