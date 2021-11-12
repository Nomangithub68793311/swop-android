import React, { useState,useEffect,useContext }from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from 'react-native-image-crop-picker';
import {Height} from './SplashScreen'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Button,
    View,
    Dimensions,
    TextInput,
    Text,
    Image,
    Platform,
    AlertIOS,
    ToastAndroid,
    Keyboard ,
    ActivityIndicator,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    Alert,
  } from 'react-native';
import {Avatar,Title,Caption,TouchableRipple} from 'react-native-paper'
import { Input, Box, Center, NativeBaseProvider,
  Actionsheet,
  useDisclose, } from "native-base" 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NotesContext} from '../Reducers/Context'
import Iconyo from 'react-native-vector-icons/MaterialIcons'
import IconmAT from 'react-native-vector-icons/Ionicons' 
import { alignItems } from 'styled-system';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.28;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.15;
const image2 =require('../images/background.png')
function Editprofile({navigation,route}) {
  const{state}=route.params
  const getDetails=(type)=>{
    if (state.profile){
      switch(type){
            case "bio":
              return state.profile.bio;
            case "pic":
              return state.profile.pic;
            
            default:
              return ""  
      }

    }
    return ""
  }
    
    const [bio, setBio] = useState(getDetails('bio'))
    // const [fileUri, setFileUri] = useState(getDetails('pic'))
    const[image,setImage]=useState(null)
    // const[images,setImages]=useState(null)
   const [iid, setId] = useState('')
   const [file, setFile] = useState('')
   const[show,setShow]=useState(false)
   const[loading,setLoading]=useState(false)

    const[url,setUrl]=useState(getDetails('pic'))
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    
    const {addBioEdit,addLoading}=useContext(NotesContext)

     
    const fectData= async ()=>{ 
      const token=await AsyncStorage.getItem('token')
      fetch("https://travherswopapp.herokuapp.com/editprofile",{ 
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
        
  }, [])

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
          
     console.log("hum",image)         
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
    style={{ width: 150, height: 150,borderRadius:200  }}
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
  const savetocloud=()=>{
    Keyboard.dismiss()
    setLoading(true)
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
        }).catch(err=>console.log('error'))
       
      }
    

    
 const datafething=(newurl)=>{
  fetch("https://travherswopapp.herokuapp.com/editprofile",{
    method:'POST',
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
    body:JSON.stringify({
       bio:bio?bio:'',
      pic:newurl?newurl:url,
     
     id:iid

    })
  }).then(res=> res.json()).then( (data)=>{if(data.error){ console.log("yes me",data.error); setLoading(false);
    }
    else{
      console.log( "data",data.user)

      const bio={
        bio:data.user.bio,
       
        pic:data.user.pic,
        
        

      }
      bio?addBioEdit(bio):''
      console.log('letz see',state.loading)
      // addLoading(true)
      
      navigation.navigate('ProfileScreen')
      setLoading(false)
      if (Platform.OS === 'android') {
        return ToastAndroid.show("User Editted Successfully", ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("No Fields should be empty");
      }  
     
    }})
  .catch(err=>console.log('errou',err))

 }
 
 
 
 
  
 
     
   

  


     
  //  var bs=React.createRef();


    return (
      <ImageBackground source={image2} resizeMode="cover" style={styles.image}> 

        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" >
        <ScrollView keyboardShouldPersistTaps="handled">
            <View style={{alignItems:'center',marginTop:windowHeight*.10}}>
            {/* <Text style={{textAlign:'center',fontSize:20,paddingBottom:5,fontFamily:'Poppins-SemiBold',marginTop:10,color:'#3C3B3B'}}>Edit Your Profile</Text> */}

           
<Text style={{textAlign:'center',fontSize:18,paddingBottom:5,fontFamily:'Poppins-Medium',color:'#6C6C6C'}}>Bio</Text>
            <Box w="84%"  >
 <View style={{elevation:10,backgroundColor:'#F6F6F6',borderRadius:12}}>
<Input
style={{height:56}}
value={bio}
onChangeText={(val)=>setBio(val)} 
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
</Box>


            <View style={styles.ImageSections}>
            {(url?url:image)? renderImage(url) : <Image source={require('../images/profpic.png')}/>}
         
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
         
                 
              </View>

            
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            
            
            {loading? <View style={{alignItems:'center'}}>
   <TouchableOpacity  style={{alignItems: 'center',
     justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:10,height:56,width:343}}> 
            <ActivityIndicator size="large" color="black"/>
         </TouchableOpacity>
         </View>:
             <View style={{alignItems:'center'}}>
   <TouchableOpacity onPress={savetocloud} style={{alignItems: 'center',marginBottom:10,
     justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:8,height:56,width:343}}> 
            <Text style={{textAlign:'center',fontSize:16,color:'#FCFCFF',fontFamily:'Poppins-Regular'}}>Save</Text>
         </TouchableOpacity>
         </View>} 
                 
         {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{alignItems: 'center',marginTop:5,marginBottom:30,
      justifyContent: 'center'}}>
          <Text style={{fontSize:16,color:'#6C6C6C',fontFamily:'Poppins-Regular',textAlign:'center'}} >
      Back 
    </Text>
    </TouchableOpacity> */}
            </View>
            </View>
            </ScrollView>
        </KeyboardAwareScrollView>
        </ImageBackground>
    )
}
const styles=StyleSheet.create({
    
    bio:{
        borderWidth:2,
        width:300,
        height:70,
        borderRadius:5,
         marginTop:10,
         marginBottom:10
         

    },
    image: {
      width:"100%",
      height:"100%"
     },
    fonts:{
        //  fontWeight:'',
        fontSize:15,
        textAlign:'center',
        marginTop:4,
        fontFamily:'Poppins-Regular'

        // fontFamily:"Imbue_96pt-Black",
       //  color:''
       },
    gender:{
        borderWidth:2,
        width:300,
        height:40,
        borderRadius:5,
        marginTop:10
    },
    dob:{
        borderWidth:2,
        width:300,
        height:40,
        borderRadius:5,
        marginTop:20
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20
    },
      panelTitle: {
        fontSize: 27,
        fontFamily:'Imbue-Bold',
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontFamily:'',
      color: 'white',
    },
   
  
   
    ImageSections: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 8,
      paddingVertical: 8,
      justifyContent: 'center',
      marginTop:windowHeight*.03    },
    images: {
      width: 150,
      height: 150,
      borderColor: 'black',
      borderWidth: 1,
      marginHorizontal: 3
    },
    btnParentSection: {
      alignItems: 'center',
      marginTop:10
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
      marginTop:20
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
      fontSize: 14,
      fontFamily:'Poppins-Regular'
    },
    btnText2: {
    textAlign: 'center',
    color: '#9D9D9D',
    fontSize: 14,
    fontFamily:'Poppins-Regular'
  },

})

export default Editprofile
