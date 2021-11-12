import React,{useEffect,useState} from 'react'
import {View,Text,Image,StyleSheet,ImageBackground,Dimensions,Linking,Alert,TouchableOpacity,StatusBar ,Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconmAT from 'react-native-vector-icons/MaterialCommunityIcons' 
const image2 =require('../images/splashimage3.jpeg')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth=windowWidth*.30;
const imageWidth=viewWidth;
const imageHeight=windowHeight*.85;
function Instruction3({navigation}) {

const handleNext=()=>{
  navigation.replace('SplashScreen')
}

    return (
//         <Onboarding
//         // bottomBarHighlight ={false}
//         // bottomBarHeight={0}
//         showDone={false}
//         // showNext ={false}
//         // showSkip ={false}
//         // showPagination={false}
//         onSkip={ () => navigation.replace('SplashScreen')}
//         onDone={ () => navigation.replace('SplashScreen')}

//   pages={[
//     {
//       backgroundColor:'white',
//       image: <Image style={{height:"100%",width:"100%"}}source={require('../images/splashimage1.jpeg')} />,
//       title: 'Thats Enough',
//       subtitle: (
//         <Button
//           title={'Get Started'}
//           containerViewStyle={{ marginTop: 20 }}
//           backgroundColor={'white'}
//           borderRadius={5}
//           textStyle={{ color: '#003c8f' }}
//           onPress={() => {
//             Alert.alert('done');
//             StatusBar.setBarStyle('default');
//           }}
//         />
//         // <TouchableOpacity >
//         //   <Text>next</Text>
//         // </TouchableOpacity>
//       )
//     },
//     {
//         backgroundColor:'white',
//         image: <Image style={{height:"100%",width:"100%"}}source={require('../images/splashimage2.jpeg')} />,
//         title: '',
//         subtitle: '',
//       },
//       {
//         backgroundColor:'white',
//         image: <Image style={{height:"100%",width:"100%"}}source={require('../images/splashimage3.jpeg')} />,
//         title: '',
//         subtitle: '',
//       }
   
     
//   ]}
// />
<ImageBackground source={image2} resizeMode="cover" style={styles.image}>
  <View style={{alignItems:'center'}}>
<TouchableOpacity onPress={handleNext} style={{height:50,borderRadius:20,width:343,backgroundColor:'white',flexDirection:'row' ,alignItems:'center',justifyContent:'center',marginTop:imageHeight}}>
<Text style={{textAlign:'center',fontSize:20,fontFamily:"Poppins-Bold",color:'#3C3B3B'}}>
    Let's go!
  </Text>
  <IconmAT  name="arrow-right" size={30} color="black" style={{position:'absolute',right:10}} /> 
</TouchableOpacity>
</View>
</ImageBackground>
    )
}
const styles=StyleSheet.create({
    
  image: {
   width:"100%",
   height:"100%"
  }

  
})
export default Instruction3
