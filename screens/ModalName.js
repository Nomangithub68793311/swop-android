import React,{useState,useContext} from 'react'
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
    Image,
 
    TextInput,
    ActivityIndicator,
    Text,
    Keyboard,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    StatusBar,
    Alert,
    Platform,
    ToastAndroid,
    AlertIOS

  } from 'react-native';
import { Input, Box, Center, NativeBaseProvider,
    Actionsheet,
    useDisclose, } from "native-base" 
import {Avatar,Title,Caption,TouchableRipple} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import IconButton from 'react-native-vector-icons/Ionicons'
import {Surface} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Iconyo from 'react-native-vector-icons/MaterialIcons'
import IconmAT from 'react-native-vector-icons/Ionicons' 
import {NotesContext} from '../Reducers/Context'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.28;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.15;
const imageBackground =require('../images/background.png')

function ModalName({handlemodal,handleModelcut,setNewAccount,setCheck}) {
    const [username, setUsername] = useState('')
    const [account, setAccount] = useState('')
    const[fullname,setFullname]=useState('')

    const [emptyuser,setEmptyuser]=useState('')
    const [emptyaccount,setEmptyaccount]=useState('')
    const [userlength,setUserlength]=useState()
    const[moreaccount,setMoreaccount]=useState('')
    const[flag,setFlag]=useState([])
    const[image,setImage]=useState(null)
    const[images,setImages]=useState(null)
    const[url,setUrl]=useState(null)
    const [picwrong ,setPicwrong]=useState('')
    const[loading,setLoading]=useState(false)
    const [bio,setBio]=useState('')
    const [calar,setCalar]=useState(false)


    const {state,addAccount,addLoading}=useContext(NotesContext)
    // console.log(' name is', state.profile.name+Math.floor(Math.random()*100));
    
    const pickSingleWithCamera=(cropping, mediaType = 'photo')=> {
        ImagePicker.openCamera({
          cropping: cropping,
          compressImageMaxWidth:800,
          compressImageMaxHeight:800,
          compressImageQuality:0.1,
          width: 200,
          height: 200,
         includeExif: true,
         mediaType,
       })
         .then((image) => {
            console.log('received image', image);
           
            
             setImage({
               uri: image.path,
               width: 200,
                height: 200,
              type: image.mime,
               name:'rana'+Math.random()*2
             });
              setImages(null)
                     
           // console.log(image.path)
           // console.log(image.width)
           // console.log(image.height)
           // console.log(image.mime)
           
        })
         .catch((e) => alert(e));
      }
     const renderImage=(image)=>  {
   return (
      <Image
        style={{  width: 150, height: 150,borderRadius:200 }}
       source={image}
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
           console.log('received image', image);
          setImage({
             uri: image.path,
             width: 200,
             height: 200,
              type: image.mime,
             name:'rana'+ Math.random()*2
           });
           setImages(null)
               
          })
          .catch((e) => {
           console.log(e);
           Alert.alert(e.message ? e.message : e);
         });
      }
      // const savetocloud=()=>{
      //   console.log("letxz see image",image)
      //   const data=new FormData();
      //  data.append("file",image)
      //   data.append("upload_preset","swopapp")
      //  data.append("cloud_name","bayshore")
      //   fetch("https://api.cloudinary.com/v1_1/bayshore/image/upload",{
      //   method:'post',
      //     body:data
      //   }).then(res=>res.json())
      //   .then(data=>{
      //    setUrl(data.url);
      //   }).catch(err=>console.log('error'))
       
      // }

  const handleModel= ()=>{
  
    Keyboard.dismiss()
    if(!account){
      if (Platform.OS === 'android') {
       return ToastAndroid.show("Please Enter an Account", ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("Please Enter an Account");
      }
   
    }
    if(!image){
      if (Platform.OS === 'android') {
        return ToastAndroid.show("Please Choose a Picture", ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("Please Choose a Picture");
      }
    }
   
    
    
   else{
    setLoading(true)
    const data=new FormData();
    data.append("file",image)
     data.append("upload_preset","swopapp")
    data.append("cloud_name","bayshore")
     fetch("https://api.cloudinary.com/v1_1/bayshore/image/upload",{
     method:'post',
       body:data
     }).then(res=>res.json())
     .then(data=>{
      console.log('err',data)
      datafething(data.secure_url);
     }).catch(err=>console.log('error'))
   
  }
}
  const datafething=async(url)=>{
    
    fetch("https://travherswopapp.herokuapp.com/profile/createaccount",{
      method:'POST',
      headers: {
          Authorization:"Bearer "+await AsyncStorage.getItem('token'),
       'Accept': 'application/json',
       'Content-Type': 'application/json'
         },
      body:JSON.stringify({
       
       "accountuser":account.charAt(0).toUpperCase()+account.slice(1),

       "pic":url,
        "username":account.replace(/\s/g,'')+Math.floor(Math.random()*10000)
         })
    }).then(res=>res.json()).then(data=>{ if(data.error){
      setLoading(false)
      if (Platform.OS === 'android') {
        return ToastAndroid.show(data.error, ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("Please Choose a Picture");
      }
      // setMoreaccount(data.error)
      // setEmptyuser(data.error)
      setUsername('')
      setLoading(false)
      console.log(data.error)
      }
     
       else{
                console.log('yes',data.useracc)
                
                
                setLoading(false)
                // setNewAccount(data.useracc)
                addAccount(data.useracc);
                addLoading(true)
                
                ;handleModelcut()
                if (Platform.OS === 'android') {
                  return ToastAndroid.show("Account Created Successfully", ToastAndroid.SHORT);
                 } else {
                   AlertIOS.alert("Please Enter an Account");
                 }
              
       
    
      
      
     }}).catch(err=>console.log(err))
    
  } 
   
      
    
      
   
    

    return (
      
             
         <ImageBackground source={imageBackground} resizeMode="cover" style={styles.image}>

       <KeyboardAwareScrollView keyboardShouldPersistTaps="handled"> 
          
                    <ScrollView keyboardShouldPersistTaps="handled">
                       <IconmAT name="close-outline" size={40} color="#6C6C6C" style={{alignSelf:'flex-end',marginTop:
                       15,marginRight:15}}
                       onPress={handleModelcut} />
                  <View style={{alignItems:'center',flex:1,justifyContent:'center',marginTop:windowHeight*.05}} >
                                    
                          <Text style={{textAlign:'center',fontSize:20,fontFamily:"Poppins-Bold",color:'#3C3B3B'}} >Create Your Account </Text>
                    {/* <View style={{alignItems:'center',elevation:2}}>
                      
                        <TextInput  placeholder="Enter an Account Name"  placeholderTextColor='#3C3B3B' style={{width:343,height:56,borderWidth:1,borderRadius:5,marginTop:30,borderColor:calar?"#ADD8E6":"#CECECE",color:'#3C3B3B'}} 
                          onChangeText={(val)=>setAccount(val)} value={account}
                          onFocus={()=>setCalar(true)}
                          onBlur={ () => setCalar(false) }
                         /> 
                         </View> */}
                         <Box w="83%" style={{marginTop:10}}>

                

 <View style={{elevation:2,backgroundColor:'white',borderRadius:10}}>
<Input
value={account}
onChangeText={val=>setAccount(val)}
onSubmitEditing={Keyboard.dismiss} 
 placeholder="Enter an Account Name" // mx={4}
 _light={{
   placeholderTextColor: "#9D9D9D",
 }}
 _dark={{
   placeholderTextColor: "blueGray.50",
 }}
/>
</View>
</Box>
                         {(emptyaccount)?( <Text style={{color:'#3C3B3B',textAlign:'center',fontSize:16,fontFamily:'Poppins-Bold'}}>{emptyaccount}</Text>):null} 
                         {/* <View style={{justifyContent:'center',alignItems:'center'}}> 
                        <TextInput  placeholder="Enter a username" placeholderTextColor="#666666"  style={styles.username}  
                          onChangeText={(val)=>setUsername(val)} value={username}

                         />
                         </View> */}
                         {/* {(emptyuser)?( <Text style={{color:'black',textAlign:'center',fontSize:15,fontFamily:'Poppins-Bold'}}>{emptyaccount}</Text>):null} */}
                         
                      
                         
                         {(moreaccount)?( <Text style={{color:'black',textAlign:'center',fontSize:15,fontFamily:'Poppins-Bold'}}>{moreaccount}</Text>):null}
                        
            
            <View style={styles.ImageSections}>
              
              
              {image ? renderAsset(image) : <Image source={require('../images/profpic.png')}/>}
          {images
             ? images.map((i) => (
                 <View key={i.uri}>{renderAsset(i)}</View>
               ))
             : null}
              
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

            {loading? <View style={{alignItems:'center'}}>
   <TouchableOpacity  style={{alignItems: 'center',
     justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:5,height:56,width:343}}> 
            <ActivityIndicator size="large" color="black"/>
         </TouchableOpacity>
         </View>:
             <View style={{alignItems:'center'}}>
   <TouchableOpacity onPress={handleModel} style={{alignItems: 'center',marginBottom:30,
     justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:5,height:56,width:343}}> 
            <Text style={{textAlign:'center',fontSize:16,color:'#FCFCFF',fontFamily:'Poppins-Regular'}}>Continue</Text>
         </TouchableOpacity>
         </View>}
                           
                            
                            
                          
                            </View>
                            
        
                       {/* <TouchableOpacity onPress={sendDetails}><Text style={{textAlign:'center', borderRadius:20,marginTop:10, alignSelf:'center', fontSize:25,height:50,width:300,backgroundColor:'grey'}}>Save Profile
                       </Text>
                       </TouchableOpacity> */}
        </View> 
        </ScrollView> 
        </KeyboardAwareScrollView>
      </ImageBackground>
    
      
                
    )
}
const styles=StyleSheet.create({ 
    username:{
        
      },
      
      shadoww:{
        shadowOffset:{  width: 10,  height: 10  },
        shadowColor: 'black',
         shadowOpacity: 0.8
        
      },
      
    
      body: {
        
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: Dimensions.get('screen').height - 100,
        width: Dimensions.get('screen').width
      },
      ImageSections: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 8,
        justifyContent: 'center',
        marginTop:windowHeight*.03
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
        marginTop:windowHeight*.03
      },
      
      btnSection: {
        width: 343,
        height: 56,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
       
        flexDirection:'row',
        elevation:20,
      },
      image: {
       
     width:"100%",
     height:"100%"
    },
      btnSection2:{
        width: 343,
        height: 56,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom:windowHeight*.03,
        flexDirection:'row',
        elevation:20,
        marginTop:12
      },
      btnText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 15,
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

export default ModalName