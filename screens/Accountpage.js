import React, { useState,useEffect,useContext }from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Height} from './SplashScreen'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    View,
    TextInput,Linking,
    Dimensions,
    Image,
    Text,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    Alert,
  } from 'react-native';
  import { Input, Icon, Box, Center, NativeBaseProvider, Button,
    Actionsheet,
    useDisclose, } from "native-base"
import IconmAT from 'react-native-vector-icons/MaterialIcons'
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'
import Icofon from 'react-native-vector-icons/Fontisto'
import Share from 'react-native-share';
import {Map,Pdf} from 'react-native-openanything';
const image =require('../images/background.png')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.29;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.15;
function Accountpage({navigation,route}) {
    
    const[user,setUser]=useState('')
    const[url,setUrl]=useState('')
    const [pic,setPic]=useState('')
    const [username,setUsername]=useState('')
    const [links,setLinks]=useState([])
    const[placeholder,setPlaceholder]=useState('')
    const[group,setGroup]=useState('')
    const [userid,sstUserId]=useState('')
    const {initialUrl}=route.params;
    const urls=initialUrl.split( 'app/' )
   
    const path =urls[1];
    console.log('path')
  
    useEffect(()=>{
        fetch(`https://travherswopapp.herokuapp.com/${path}`).then(res=> res.json()).then(data=>{
          if(data.error){
            console.log('nothing')
        
          }else if(data.user.direct){
            setUser(data.user.direct.usernam);
            setUrl(data.user.direct.url)
            setPlaceholder(data.user.direct.placeholder)
            setGroup(data.user.direct.group)
          }
        
          else{
           
            console.log("ids are",data.user.accountlinks)
            data.user.accountlinks.map(item=>console.log("ids are",item._id))
            setPic(data.user.pic);setUsername(data.user.accountuser);
            data.user.accountlinks? 
            // setLinks(data.user.accountlinks)
            setLinks((pre)=>{
                return[...pre,...data.user.accountlinks]
            })
            :setLinks([])
            console.log('arry',links)
           
          }
           
        }).catch(err=>{
          console.log('error no')
        })
        },[])
        const handleSubmit=()=>{
          Linking.openURL('https://swopme.app/');
        }
        
        const openUrl=async(url,username,group,placeholder)=>{
          // console.log(" worked",group) 
          // console.log(" worked",username) 
          // console.log(" worked",placeholder) 

          if(url=='mailto:'||url=='sms:'||url=='tel:'){
            const newUrl=`${url}${username}`
            // console.log(" newworked",newUrl) 
            const checkUr= await Linking.canOpenURL(newUrl)
            // console.log("what",checkUr)
             if(checkUr){
              await Linking.openURL(newUrl);
             }else{
              await  Linking.openURL(`${url}${username}`);
             }


          }
        else if(url=='https://OnlyFans.com/'||url=='https://instagram.com/'||url=='https://twitter.com/'||url=='https://snapchat.com/'||url=='https://pinterest.com/'||url=='https://facebook.com/'){
            const url1=url.split( 'https://' )[1]
            const url2=url1.split( '.com/' )[0]
            // const url3=	 username.split( '/' )[3]
            const url4=`${url2}://user?username=${username}`
            const checkUr= await Linking.canOpenURL(url4)
          
             if(checkUr){
              await Linking.openURL(url4);
             }else{
              await Linking.openURL(`${url}${username}`);
             }
            
          }
          else if(url=="https://youtube.com/"||url=='https://Linkedin.com/'){
            
            await Linking.openURL(username);
          }
          else if(url=="https://tiktok.com/"){
            const url1=url.split( 'https://' )[1]
            const url2=url1.split( '.com/' )[0]
            // const url3=	 username.split( '/' )[3]
           const urll1=`https://www.tiktok.com/@${username}?`
            // const url4=`tiktok://user?username=${url3}`
            // console.log("tiktiok",url4)
            await Linking.openURL(urll1);
          }
          else if(placeholder=="WhatsApp Number"){
            const url1=   `WhatsApp://send?phone=${username}&text=hi`
         
            // window.open(`${url}${username}`,'')
            await Linking.openURL(url1);
          }
          else if(placeholder=="FaceTime"){
            const sharedOption={
              title: 'facetime',
              url: `${username}`,
              subject: 'Share Link', //  for email
            }
            Share.open(sharedOption).catch(error => console.log(error));
          }
        else if(placeholder=="Address"){
         
          Map(username);
            
          }
          else if(group=="crypto"){
            const sharedOption={
              title: 'crypto type',
              url: `${username}`,
              subject: 'Share Link', //  for email
            }
            Share.open(sharedOption).catch(error => console.log(error));


          }
          else if(group=="payment"){
            const sharedOption={
              title: 'payment type',
              url: `${username}`,
              subject: 'Share Link', //  for email
            }
            Share.open(sharedOption).catch(error => console.log(error));
          }
          else if(group=="music"){
            const sharedOption={
              title: 'music type',
              url: `${username}${url}`,
              subject: 'Share Link', //  for email
            }
            Share.open(sharedOption).catch(error => console.log(error));
          }
          else if(group=='more'){

            if(placeholder=='File Link'){
              Pdf(username)
            }
            if(placeholder=='Website URL'|| placeholder=='URL'){
              await Linking.openURL(`${username}`);
            }
            else{

             
                const sharedOption={
                  title: 'more type',
                  url: `${username}`,
                  subject: 'Share Link', //  for email
                }
                Share.open(sharedOption).catch(error => console.log(error));
            }
           
        
           
          }
          else{
            Linking.openURL(`${username}`);

          }

     }

    return (
        <>
       {(url && user)?  openUrl(url,user,group,placeholder)
        :(<ImageBackground source={image} resizeMode="cover" style={styles.image}>
              <ScrollView style={{width:"100%",height:"100%"}} >
  <View style={{alignItems:'center'}}>
  <View >
  {/* <Image source={require('../images/widelogo.png')} style={{width: 108,resizeMode: 'stretch',alignSelf:'center',marginBottom:10,marginTop:30,
         height: 38}} /> */}
        </View>
         {
                    pic?<Image style={{height:130,width:130,backgroundColor:'white',
                    marginTop:20,
                    borderRadius:200}}source={{uri:pic}} />
                    :<Image style={{height:130,width:130,backgroundColor:'white',marginTop:20,borderRadius:200}}source={require('../images/profpic.png')} />
                   }
                   <Text style={{textAlign:'center',fontSize:18,marginTop:10,fontFamily:"Poppins-Bold",color:'#6C6C6C'}}>
      SWOP	
      </Text>
      <Text style={{textAlign:'center',fontSize:16,fontFamily:"Poppins-Regular",color:'#6C6C6C'}}>
      swopme.app/{initialUrl.split( 'app/' )[1]}	
      </Text>

      <View  style={{flexDirection:'row',marginTop:5,flexGrow:1,flexWrap:'wrap',marginLeft:10,marginTop:20}}>
                        {links?links.map(item=>{
                               return(
                                
                                  <View >

                                      <TouchableOpacity  style={{width:viewWidth,margin:5}} onPress={()=>openUrl(item.url,item.usernam,item.group,item.placeholder)} >

                                        <Image style={{height:imageHeight,width:imageWidth,borderRadius:20}}
                                                           source={item.src} />
                                      </TouchableOpacity>
                              
                                  </View>
    
                                      ) 
                             }) :null}
        </View>
   
      <View style={{alignItems:'center',marginTop:20}}>
    <TouchableOpacity onPress={handleSubmit} style={{alignItems: 'center',
      justifyContent: 'center',borderRadius:12, backgroundColor:'#536DEF',marginVertical:10,height:56,width:343}}> 
             <Text style={{textAlign:'center',fontSize:16,color:'#FCFCFF',fontFamily:'Poppins-Regular'}}>Get SWOP</Text>
          </TouchableOpacity>
          </View>
         
  </View>

       </ScrollView>
            
        </ImageBackground>)}
    </> )
}

const styles=StyleSheet.create({
   
    image: {
        
     width:"100%",
     height:"100%"
    }
  
    
  })

export default Accountpage
