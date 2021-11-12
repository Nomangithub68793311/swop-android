import React, {useEffect,useState,Fragment } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  Button,
  Dimensions,
  Alert,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Iconyo from 'react-native-vector-icons/MaterialIcons'
import IconmAT from 'react-native-vector-icons/Ionicons' 
const image2 =require('../images/background.png')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.28;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.15;
const Pic =({navigation})=> {
  const [id ,setId]=useState()
  const[image,setImage]=useState(null)
  const [notimage,setNotimage]=useState(null)
    const[images,setImages]=useState(null)
    const[url,setUrl]=useState(null)
    const[loading,setLoading]=useState(false)
  //   useEffect(()=>{
  // setTimeout(()=>{
  //   setShow(false)
  // },2000)
  //   },[])
  
///////////camera
const pickSingleWithCamera=(cropping, mediaType = 'photo')=> {
         ImagePicker.openCamera({
           cropping: cropping,
           width: 200,
           height: 200,
           compressImageMaxWidth:800,
           compressImageMaxHeight:800,
           compressImageQuality:0.1,
          includeExif: true,
          mediaType,
        })
          .then((image) => {
            
             
              setImage({
                uri: image.path,
                width: 200,
                height: 200,
               type: image.mime,
                name:'rana'+Math.random()*2
              });
               setImages(null)
                       
            
            
         })
          .catch((e) => alert(e));
       }
      const renderImage=(image)=>  {
    return (
       <Image
         style={{ width: 150, height: 150,borderRadius:200 }}
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

  ///////gallery
  const pickSingle=(cropit, circular = false, mediaType)=> {
         ImagePicker.openPicker({
           width: 200, 
          height: 200,
          cropping: cropit,
         cropperCircleOverlay: circular,
        sortOrder: 'none',
          compressImageMaxWidth: 800,
           compressImageMaxHeight: 800,
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
              
               type: image.mime,
              name:'rana'+ Math.random()*2,
              size:2000
            });
            setImages(null)
               
           })
           .catch((e) => {
            Alert.alert(e.message ? e.message : e);
          });
       }
       const savetocloud=()=>{
        
         if(!image){
          navigation.replace('Photo')
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
              setLoading(false)
              console.log('err',data)
              navigation.replace('Photo',{url:data.secure_url})
            
             }).catch(err=>{
              setLoading(false) 
              console.log('err',err)})
            }
            
           }

        
  

 


  
    return (
      
       
        
      
     
      <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
        {/* {show?<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator size="large" color="#ff0000"/></View>: */}
        <KeyboardAwareScrollView>
        
      <ScrollView style={{width:"100%",height:"100%"}} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
         <View style={styles.body}>
             <View style={{alignItems:'center'}}>
           <Text style={{textAlign:'center',fontSize:20,paddingBottom:1,fontFamily:'Poppins-SemiBold',color:'#6C6C6C'}} >Add a Profile Picture </Text>
           </View>
           <View style={styles.ImageSections}>

           {image ? renderAsset(image) : <Image source={require('../images/profpic.png')}/>}
          {images
             ? images.map((i) => (
                 <View key={i.uri}>{renderAsset(i)}</View>
               ))
             : null}     
           {/* <Image source={require('../images/profpic.png')}/> */}
       
           </View>
          

           <View style={styles.btnParentSection}>
            

             <TouchableOpacity onPress={()=>pickSingleWithCamera(false)}  style={styles.btnSection}  >
                 <IconmAT name="camera-outline" size={18}style={{marginRight:7}} color="grey"/>
               <Text style={styles.btnText2}>Open Camera</Text>
             </TouchableOpacity>

             <TouchableOpacity onPress={() => pickSingle(false)}style={styles.btnSection2}  >
             <Iconyo name="photo-library" size={18} style={{marginRight:7}} color="grey"/>
               <Text style={styles.btnText2}>Open Gallery</Text>
             </TouchableOpacity>
             {loading? <View style={{alignItems:'center'}}>
   <TouchableOpacity  style={{alignItems: 'center',
     justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:8,height:56,width:343}}> 
            <ActivityIndicator size="large" color="black"/>
         </TouchableOpacity>
         </View>:
             <View style={{alignItems:'center'}}>
   <TouchableOpacity onPress={savetocloud} style={{alignItems: 'center',marginBottom:30,
     justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:8,height:56,width:343}}> 
            <Text style={{textAlign:'center',fontSize:16,color:'#FCFCFF',fontFamily:'Poppins-Regular'}}>Continue</Text>
         </TouchableOpacity>
         </View>}

           </View>
           

             
         </View>
         </ScrollView>
         </KeyboardAwareScrollView>
</ImageBackground>
        )
  
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  body: {
   
    alignItems:'center',
    marginTop:windowHeight*.15
   
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
    width: 100,
    height: 100,
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
    elevation:20
  },
  btnSectioncon:{
    width: 300,
    height: 40,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:10
  },
  
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily:'Poppins-Regular'
  },
  btnText2: {
    textAlign: 'center',
    color: '#9D9D9D',
    fontSize: 14,
    fontFamily:'Poppins-Regular'
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
  image: {
      width:"100%",
      height:"100%"
     }
});
export default Pic