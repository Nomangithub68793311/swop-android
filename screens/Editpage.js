import React,{useState,useContext,useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from 'react-native-image-crop-picker';

import {Height} from './SplashScreen'


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Button,
    View,
    Modal,
    AlertIOS,
    ToastAndroid,
    Image,
    TextInput,
    Keyboard ,
    ImageBackground,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions,
    KeyboardAvoidingView,
    StatusBar,
    Platform,
   
    Alert
  } from 'react-native';
import {Avatar,Title,Caption,Text,TouchableRipple} from 'react-native-paper'
import { Input, Box, Center, NativeBaseProvider,
  Actionsheet,
  useDisclose, } from "native-base" 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import IconButton from 'react-native-vector-icons/Ionicons'
import {Surface} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NotesContext} from '../Reducers/Context'
import Iconyo from 'react-native-vector-icons/MaterialIcons'
import IconmAT from 'react-native-vector-icons/Ionicons' 
const image2 =require('../images/background.png')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.28;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.15;
function Editpage({handlemodal,handleModelcut,route,navigation}) {
    const getDetails=(type)=>{
        if (route.params){
          switch(type){
                case "username":
                  return route.params.list.accountuser;
                // case "account":
                //   return route.params.list.userLink;
                  case "fileUri":
                    return route.params.list.pic;  
                default:
                  return ""  
          }
        }
        return ""
      }
    const [username, setUsername] = useState(getDetails('username'))
    const [url,setUrl]=useState(getDetails('fileUri'))
    const [emptyuser,setEmptyuser]=useState('')
    const [emptyaccount,setEmptyaccount]=useState('')
    const[image,setImage]=useState(null)
    const[loading,setLoading]=useState(false)

    const [userlength,setUserlength]=useState()
    const[moreaccount,setMoreaccount]=useState('')
    const [iid, setId] = useState('')
    
    
    const [picwrong ,setPicwrong]=useState('')

    const {state,addAccount,addAccountEdit}=useContext(NotesContext)
    const fectData= async ()=>{ 
        const token=await AsyncStorage.getItem('token')
        fetch("https://travherswopapp.herokuapp.com/editaccount",{ 
          method: 'GET',
             headers: {
                Authorization:"Bearer "+token
            }
        
    }).then(data=>data.json()).then(data=>{console.log(data);setId(data.id)})
    .catch(err=>{console.log(err)})
    
    }
  
    useEffect(()=>{
      
        fectData();
        return()=>{
          console.log('profile')
      }
          
    }, [iid])
    
    const pickSingleWithCamera=(cropping, mediaType = 'photo')=> {
        ImagePicker.openCamera({
          cropping: cropping,
          compressImageMaxWidth:800,
          compressImageMaxHeight:800,
         includeExif: true,
         compressImageQuality:0.1,
         mediaType,
       })
         .then((image) => {
           
           
             setImage({
               uri: image.path,
               width: 200,
               height: 200,
              type: image.mime,
               name:'rana'+Math.random()*2
         })
              
                      
           // console.log(image.path)
           // console.log(image.width)
           // console.log(image.height)
           // console.log(image.mime)
           
        })
         .catch((e) => alert(e));
      }
     const renderImage=(url)=>  {
    return (
      <Image
        style={{ width: 150, height: 150,borderRadius:200 }}
       source={image?image:{uri:url}}
      />
    );
    }
    const renderAsset=(image) =>{
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }
    
    return renderImage(image);
    }
    const pickSingle=(cropit, circular = false, mediaType)=> {
        ImagePicker.openPicker({
          width: 500, 
         height: 500,
         cropping: cropit,
        cropperCircleOverlay: circular,
       sortOrder: 'none',
       compressImageMaxWidth:800,
       compressImageMaxHeight:800,
          compressImageQuality:0.1,
         compressVideoPreset: 'MediumQuality',
         includeExif: true,
          cropperStatusBarColor: 'white',
         cropperToolbarColor: 'white',
          cropperActiveWidgetColor: 'white',
          cropperToolbarWidgetColor: '#3498DB',
        })
          .then((image) => {
           setImage({
            uri: image.path,
            // width: image.width,
            // height: image.height,
           type: image.mime,
            name:'rana'+Math.random()*2
      })
           
               
          })
          .catch((e) => {
           Alert.alert(e.message ? e.message : e);
         });
      }
  const handleModel= ()=>{
  
    Keyboard.dismiss()
    if(username.length<1){
      if (Platform.OS === 'android') {
        return  ToastAndroid.show("Username can't be empty", ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("No Fields should be empty");
      }
    }
   else {setLoading(true)
        console.log("letxz see image",image)
        const data=new FormData();
       data.append("file",image)
        data.append("upload_preset","swopapp")
       data.append("cloud_name","bayshore")
        fetch("https://api.cloudinary.com/v1_1/bayshore/image/upload",{
        method:'post',
          body:data
        }).then(res=>res.json())
        .then(data=>{
          datafething(data.secure_url);
        }).catch(err=>console.log('error'))}
       
      
  }
  const datafething=(newurl)=>{
    
    fetch("https://travherswopapp.herokuapp.com/editaccount",{
      method:'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
         },
      body:JSON.stringify({
       
       accountuser:username,
       iid:iid,
       pic:newurl?newurl:url,
       id:route.params.list._id

         })
    }).then(res=>res.json()).then(data=>{ if(data.error){
      setLoading(false)
      setMoreaccount(data.error)
      setUsername('')
      setLoading(false)
      console.log(data.error)
      }
     
       else{
                console.log('yes hi',data.users.account)
                const newuser=data.users.account?data.users.account:[]
                // console.log('yes account',state.account)
                // const  objIndex = state.account.findIndex((obj => obj._id==data.user._id));
                // state.account[objIndex].accountuser=data.user.accountuser;
                // state.account[objIndex].pic=data.user.pic;
                // data.user? addAccountEdit(state.account):''


               addAccountEdit(newuser);
                navigation.navigate('ProfileScreen')
                setLoading(false)
                if (Platform.OS === 'android') {
                  return ToastAndroid.show("Account Editted Successfully ", ToastAndroid.SHORT);
                } else {
                  AlertIOS.alert("No Fields should be empty");
                } 
                setUsername('');
              
       
    
      
      
     }}).catch(err=>console.log(err))
    
  
   }
      
    
      
   
    

    return (
                  <ImageBackground source={image2} resizeMode="cover" style={styles.image}> 
 
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" >
          
        <ScrollView keyboardShouldPersistTaps="handled">
                       <IconmAT name="close-outline" size={40} color="#6C6C6C" style={{alignSelf:'flex-end',marginTop:
                       15,marginRight:15}}
                       onPress={()=>navigation.navigate('Account2')} />

                         
                    <View style={{alignItems:'center',marginTop:windowHeight*.05}}>
                    <Text style={{textAlign:'center',color:'#3C3B3B',fontSize:18,fontFamily:'Poppins-SemiBold',marginBottom:15}}>Edit Your Account</Text>

                      <Text style={{textAlign:'center',color:'#6C6C6C',fontSize:18,fontFamily:'Poppins-Bold',marginBottom:15}}>Account Name</Text>

                     
           <Box w="84%"  >
 <View style={{elevation:10,backgroundColor:'#F6F6F6',borderRadius:12,}}>
<Input
style={{height:56}}
value={username}
onChangeText={(val)=>setUsername(val)} 
 
 
 placeholder="Payment Adress" // mx={4}
 _light={{
   placeholderTextColor: "#9D9D9D",
 }}
 _dark={{
   placeholderTextColor: "blueGray.50",
 }}
/>
</View>
</Box>

                        {/* <TextInput  placeholder="Enter an account name" placeholderTextColor="#666666" style={styles.username} 

                         />  */}
                         
                         {(emptyuser)?( <Text style={{color:'black',textAlign:'center',fontSize:15,fontFamily:'Imbue-ExtraBold'}}>{emptyuser}</Text>):null} 
                         {/* <View style={{justifyContent:'center',alignItems:'center'}}> 
                        <TextInput  placeholder="Enter a username" placeholderTextColor="#666666"  style={styles.username} value={account} 
                          onChangeText={(val)=>setAccount(val)} 

                         />
                         </View>
                         {(emptyuser)?( <Text style={{color:'black',textAlign:'center',fontSize:15,fontFamily:'Imbue-ExtraBold'}}>{emptyaccount}</Text>):null} */}
                         
                         </View>  
                         
                         {(moreaccount)?( <Text style={{color:'red',textAlign:'center',fontSize:20,fontFamily:'Imbue-ExtraBold'}}>{moreaccount}</Text>):null}
                        
            <View style={styles.ImageSections}>
              {/* <View>
                {this.renderFileData()}
                <Text  style={{textAlign:'center'}}>Base 64 String</Text>
              </View> */}
              <View>
              {url ? renderImage(url) : <Image source={require('../images/profpic.png')}/>}
                {/* <Text style={{textAlign:'center'}}>File Uri</Text> */}
              </View>
            </View>

            <View style={styles.btnParentSection}>
              {/* <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
                <Text style={styles.btnText}>Choose File</Text>
              </TouchableOpacity> */}

              <TouchableOpacity onPress={()=>pickSingleWithCamera(false)} style={styles.btnSection}  >
              <IconmAT name="camera-outline" size={18}style={{marginRight:7}} color="grey"/>
               <Text style={styles.btnText2}>Open Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>pickSingle(false)} style={styles.btnSection2}  >
              <Iconyo name="photo-library" size={18} style={{marginRight:7}} color="grey"/>
               <Text style={styles.btnText2}>Open Gallery</Text>
              </TouchableOpacity>
             
           
            {(picwrong)?( <Text style={{color:'red',textAlign:'center',fontSize:20,fontFamily:'Imbue-ExtraBold'}}>{picwrong}</Text>):null}

            {loading? <View style={{alignItems:'center',marginTop:10}}>
   <TouchableOpacity  style={{alignItems: 'center',
     justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:16,height:56,width:343}}> 
            <ActivityIndicator size="large" color="black"/>
         </TouchableOpacity>
         </View>:
             <View style={{alignItems:'center',marginTop:10}}>
   <TouchableOpacity onPress={handleModel} style={{alignItems: 'center',marginBottom:30,
     justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:16,height:56,width:343}}> 
            <Text style={{textAlign:'center',fontSize:16,color:'#FCFCFF',fontFamily:'Poppins-Regular'}}>Continue</Text>
         </TouchableOpacity>
         </View>}
                           
                            
                            
                            
                            </View>
        
                            </ScrollView>
      </KeyboardAwareScrollView>
      </ImageBackground>
    )
}
const styles=StyleSheet.create({
    username:{
        width:300,height:40,borderWidth:2,borderRadius:5,marginBottom:2,marginTop:10
      },shadoww:{
        shadowOffset:{  width: 10,  height: 10  },
        shadowColor: 'black',
         shadowOpacity: 0.8
        
      },
      image: {
        width:"100%",
        height:"100%"
       },
    
      body: {
        
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: Dimensions.get('screen').height - 20,
        width: Dimensions.get('screen').width
      },
      ImageSections: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 8,
        justifyContent: 'center',
        marginTop:20
      },
      images: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
      },
      btnParentSection: {
        alignItems: 'center',
        marginTop:20
      },
      btnSection: {
        width: 343,
        height: 56,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        
        flexDirection:'row',
        elevation:20
      },
      
      btnSection2:{
        width: 343,
        height: 56,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom:10,
        flexDirection:'row',
        elevation:20,
        marginTop:10
      },
      btnText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 14,
        fontFamily:'Poppins-Regular'
      },
      btnText2: {
        textAlign: 'center',
        color: '#9D9D9D',
        fontSize: 14,
        fontFamily:'Poppins-Regular'
      },
      items:{
        width:100,
        height:100,
        backgroundColor:'white',
      //   borderWidth:0.5,
         marginHorizontal:10,
        marginVertical:5,
        borderRadius:15,
        borderColor:'grey',
        fontSize:20,
        flexDirection:'row',
        elevation:10
        

    }
})

export default Editpage
