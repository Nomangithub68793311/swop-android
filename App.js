
import 'react-native-gesture-handler';
import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Linking,
  Alert,
} from 'react-native';
   
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {  NativeBaseProvider,useDisclose, } from "native-base"
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/Login'
import Signup from './screens/Signup'
import SplashScreen from './screens/SplashScreen'
import Profile from './screens/Profile'
import Photo from './screens/Photo'
import Instruction from './screens/Instruction'
import Instruction2 from './screens/Instruction2'
import Instruction3 from './screens/Instruction3'
import Terms from './screens/Terms'
import Privacy from './screens/Privacy'
import Onboadring from './screens/Onboadring'
import ForgotPassword from './screens/ForgotPassword'
import Verificationcode from './screens/Verificationcode'
import Setpass from './screens/Setpass'
import Account2 from './screens/Account2'
import ModalName from './screens/ModalName'
import Buyswop from './screens/Buyswop'
import About from './screens/About'
import Editprofile from './screens/Editprofile'
import Support from './screens/Support'
import {NotesContext,ContextProvider} from './Reducers/Context'
import Linkmodal from './screens/Linkmodal'
import Modalopensave from './screens/Modalopensave'
import ContactModal from './screens/ContactModal'
import ContactModalcreate from './screens/ContactModalcreate'
import Referral from './screens/refferal/Referral'
import Pic from './screens/Pic'
import Editpage from './screens/Editpage'
import Dashboard from './screens/refferal/Dashboard'
import Accountpage from './screens/Accountpage'
import EditBioPage from './screens/EditBioPage'
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import EmailVerification from './screens/EmailVerification'
import AsyncStorage from '@react-native-async-storage/async-storage';
import  DrawerContent from './screens/Maintabscreen'
import Icon from 'react-native-vector-icons/Ionicons'
import IconMAT from 'react-native-vector-icons/MaterialCommunityIcons'
import codePush from "react-native-code-push";
import IconEnt from 'react-native-vector-icons/Entypo'
const stack =createStackNavigator();
const LoginStack = createStackNavigator();
const SplashStack = createStackNavigator();
const SignupStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Mainstack=createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabb = createMaterialBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();





const BottomTabScreen=()=>{
  return (
      <>
      <Tab.Navigator
        initialRouteName="Profile"
        
        inactiveColor="yellow"
        
        barStyle={{ backgroundColor: '#F6F6F6' ,height:83,justifyContent:'center'}}
        // shifting={true}
       
      >
        <Tab.Screen
          name="Profile"
          component={Profilescreen}
          options={{
            tabBarLabel: '',
            tabStyle: {
              justifyContent: 'center'
            },
            tabBarColor:'white',
            tabBarIcon: ({color}) => (
              <IconMAT name="home-outline"
               color="#9D9D9D" size={26} style={{alignSelf:'center'}}/>
            )
          }}
        />
        <Tab.Screen
          name="Support"
          component={Support}
          options={{
            tabBarLabel: '',
            tabBarColor:'white',
            tabBarIcon: ({color}) => (
              <IconMAT name="account-check-outline" color='#9D9D9D' size={25} />
            )
          }}
        />
       
        <Tab.Screen
          name="Buyswop"
          component={BuyswopScreen}
          options={{
            tabBarLabel: '',
            tabBarColor:'',
            tabBarIcon: ({color}) => (
              <IconMAT name="shopping" color='#9D9D9D' size={25} />
            )
          }}
        />
      </Tab.Navigator>
      </>
    );
  }

const Profilescreen =({navigation})=>{
  return(
    <ProfileStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#F6F6F6',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        },
      
          
      },
      
      headerTitleAlign:'center',
      headerTintColor:'#3C3B3B',
      headerTitleStyle:{
        fontFamily: 'Poppins-SemiBold',
        

      }

    }}>
      <ProfileStack.Screen  name="Profile" component={Profile} options={{
        title:'Profile',
        headerTintColor: '#3C3B3B',
        headerTitleAlign:'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold',
          },
          headerStyle: {
           
            backgroundColor:'#F6F6F6'
          },
        headerLeft:()=> (
          <Icon name="reorder-three-sharp" size={40} style={{marginLeft:10}}
          onPress={()=>
            {navigation.openDrawer()}}/>
          
        )
        
      
    }}
         />
             
    </ProfileStack.Navigator>
  )
}

const loginscreen =({navigation})=>{
  return(
    <LoginStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#009387'
          
      },
      headerTitleAlign:'center',
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
       

      }

    }}>
      <LoginStack.Screen  name="Login" component={Login} options={{
        title:'login',
        headerLeft:()=> (
         <Icon name="reorder-three-sharp" size={30}
         onPress={()=>
           navigation.openDrawer()}/>
           ),
           headerRight:()=> (
            <Icon name="reorder-three-sharp" size={30}
            onPress={()=>
              navigation.openDrawer()}/>
              )
      
    }}
         />
             
    </LoginStack.Navigator>
  )
}
const BuyswopScreen =({navigation})=>{
      return(
      <SignupStack.Navigator screenOptions={{
           headerStyle:{
           backgroundColor:'#009387'
          
                },
          headerShown: false,
          headerTintColor:'#fff',
         headerTitleAlign:'center',
         headerTitleStyle:{
         fontWeight:'bold'
       
          }
  
      }}>
        <SignupStack.Screen  name="Buyswop" component={Buyswop}  options={{
              title:'Signup',
  //  headerLeft:()=> (
  //    <Icon name="reorder-three-sharp" size={30}
  //    onPress={()=>
  //      navigation.openDrawer()
  //    }/>
  //     )
  

  
      }}/> 
       </SignupStack.Navigator>
     )
}
const Splashscreen =({navigation})=>{
return(
<SplashStack.Navigator screenOptions={{
 headerStyle:{
   backgroundColor:'#009387',
   
     
 },
 headerTintColor:'#fff',
 headerTitleAlign:'center',
 headerTitleStyle:{
   fontWeight:'bold'
   
 }

}} >
 <SplashStack.Screen  name="SplashScreen" component={SplashScreen}  options={{
  title:'overview',
   headerLeft:()=>{ return (
     <Icon name="reorder-three-sharp" size={30}
     onPress={()=>
       navigation.openDrawer()}/>
   )}
   
  
}}/> 
</SplashStack.Navigator>
)
}
export const MyDrawer=({navigation})=>{
  return(<>
         <Drawer.Navigator  drawerContent={(props) => <DrawerContent {...props}/>} drawerStyle={{
       backgroundColor: '#E7E6DD',
    width: 240
        }}>
           
         <Drawer.Screen name="ProfileScreen" component={BottomTabScreen}  />
         <Drawer.Screen name="About" options={{headerShown:true,title:'About',
         headerStyle:{
         
        
            
        },
          headerTitleAlign:'center',
          headerLeft:()=> (
            <IconMAT name="arrow-left" size={30} style={{marginLeft:10}}
            onPress={()=>
              navigation.navigate('ProfileScreen')}/>
              ),
          headerTitleStyle: {
           fontFamily: 'Poppins-SemiBold',
           color:'#3C3B3B',
           fontSize:18,
         }
         
         
         }} component={About}  />
         <Drawer.Screen name="Editprofile" options={{headerShown:true,title:'Edit Your Profile',
        headerLeft:()=> (
          <IconMAT name="arrow-left" size={30} style={{marginLeft:10}}
          onPress={()=>
            navigation.navigate('ProfileScreen')}/>
            ),
        headerTitleAlign:'center',
          headerTitleStyle: {
           fontFamily: 'Poppins-SemiBold',
           color:'#3C3B3B',
           fontSize:18
         }
        
        
        }} component={Editprofile} />
       
         <Drawer.Screen name="Buyswop" options={{headerShown:true,title:'Buy a SWOP',
         headerLeft:()=> (
          <IconMAT name="arrow-left" size={30} style={{marginLeft:10}}
          onPress={()=>
            navigation.navigate('ProfileScreen')}/>
            ),
         headerTitleAlign:'center',
         headerTitleStyle: {
          fontFamily: 'Poppins-SemiBold',
          color:'#3C3B3B',
          fontSize:18
        }
        }} component={Buyswop} /> 
         <Drawer.Screen name="Referral" options={{headerShown:true,title:'Referral', headerTitleAlign:'center',
         headerLeft:()=> (
          <IconMAT name="arrow-left" size={30} style={{marginLeft:10}}
          onPress={()=>
            navigation.navigate('ProfileScreen')}/>
            ),
         headerTitleStyle: {
          fontFamily: 'Poppins-SemiBold',
          color:'#3C3B3B',
          fontSize:18
        }
        }}  component={Referral} /> 
          </Drawer.Navigator>

  </>
  )
}

const App = ({navigation}) => {
  const [isloggedin, setIsloggedin] = useState(null)
useEffect(()=>{
  codePush.sync({ updateDialog: true,installMode:codePush.InstallMode.IMMEDIATE})
  },[])
  // const linking={
  //   prefixes: ['https://swopme.app', 'swopapp://']
  // }

 
  return (
      <>
         <NativeBaseProvider>
      <ContextProvider>

          <NavigationContainer >
                      <Mainstack.Navigator  
                      // linking={linking} 
                      screenOptions={{
                           headerShown: false,
                           headerStyle: {
                            elevation: 0,
                            shadowOpacity: 0
                          }
                           }} >
                 
                               <Mainstack.Screen name="Onboadring" component={Onboadring}/>
                               <Mainstack.Screen name="Instruction" component={Instruction}/>
                               <Mainstack.Screen name="Instruction2" component={Instruction2}/>
                               <Mainstack.Screen name="Instruction3" component={Instruction3}/>
                              <Mainstack.Screen name="SplashScreen" component={SplashScreen}/>
                              <Mainstack.Screen name="Photo" component={Photo}/>
                              <Mainstack.Screen name="ContactModal" component={ContactModal}/>
                              <Mainstack.Screen name="ContactModalcreate" component={ContactModalcreate}/>
                              <Mainstack.Screen name="ForgotPassword" component={ForgotPassword}/>
                              <Mainstack.Screen name="ModalName" component={ModalName}/>
                              <Mainstack.Screen name="Modalopensave" component={Modalopensave}/>

                              <Mainstack.Screen name="Accountpage" 
                              
                              options={{headerShown:true,
                                title:  <Image source={require('./images/widelogo.png')} style={{width: 90,resizeMode: 'stretch',alignSelf:'center',
                                height: 17}} />,

                                headerTitleStyle: {  textAlign: 'center',flex:1 },
                                headerStyle: {
                                  height: 80
                                },
                                headerLeft: ()=> null,
                                 
                              }} 
                              component={Accountpage}/>
                             <Mainstack.Screen name="DrawerContent" component={DrawerContent}/>
                              <Mainstack.Screen name="EmailVerification" component={EmailVerification}/>
                              <Mainstack.Screen name="Verificationcode" component={Verificationcode}/>
                              <Mainstack.Screen name="Setpass" component={Setpass}/>
                              <Mainstack.Screen name="Profile" component={MyDrawer}/>
                              <Mainstack.Screen name="Signup" component={Signup}/>
                              <Mainstack.Screen name="Login" component={Login}/>
                              <Mainstack.Screen name="Dashboard" options={{headerShown:true,
                                title:'Dashboard',
                                headerTitleAlign:'center',
                                headerTitleStyle: {
                                 fontFamily: 'Poppins-SemiBold',
                                 color:'#3C3B3B',
                                 fontSize:18
                               }
                               
                                 
                              }} 
                              
                              component={Dashboard}/>
                             
                                <Mainstack.Screen name="Account2" options={{headerShown:true,headerTitleAlign:'center',
                                title:''
                                // headerShadowVisible: false,
                                // headerStyle: {
                                //   elevation: 0,
                                //   shadowOpacity: 0,
                                //   borderBottomWidth: 0,
                                // }
                                // headerLeft: () => (
                                //   <Button
                                //     onPress={() => alert('This is a button!')}
                                //     title="back"
                                //     color=""
                                //   />)
                                 
                              }} 
                                
                                
                                component={Account2}/>
                              {/* <Mainstack.Screen name="SocialPics" component={SocialPics}/> */}
                              <Mainstack.Screen name="Linkmodal" component={Linkmodal}/>
                              <Mainstack.Screen name="EditBioPage" component={EditBioPage}/>
                              <Mainstack.Screen name="Pic" component={Pic}/>
                              <Mainstack.Screen name="Privacy"
                               options={{headerShown:true,  headerTitleAlign:'center',
                                title:'PRIVACY POLICY',
                                headerTitleStyle: {
                                  fontFamily: 'Poppins-SemiBold',
                                  color:'#3C3B3B',
                                  fontSize:14
                                }
                                // headerLeft: () => (
                                //   <Button
                                //     onPress={() => alert('This is a button!')}
                                //     title="back"
                                //     color=""
                                //   />)
                                 
                              }}
                              component={Privacy}/>
                              <Mainstack.Screen name="Terms" options={{headerShown:true, headerTitleAlign:'center',
                          
                                title:'TERMS & CONDITION',
                                headerTitleStyle: {
                                  fontFamily: 'Poppins-SemiBold',
                                  color:'#3C3B3B',
                                  fontSize:14
                                }
                                // headerLeft: () => (
                                //   <Button
                                //     onPress={() => alert('This is a button!')}
                                //     title="back"
                                //     color=""
                                //   />)
                                 
                              }}  component={Terms}/>
                              <Mainstack.Screen name="Editpage" component={Editpage}/>
                              
                     </Mainstack.Navigator> 
          </NavigationContainer>
          </ContextProvider>
    </NativeBaseProvider>
        </>
  )  
  }
// const App= ()=>{
//     return(
//       <NativeBaseProvider>
//       <ContextProvider>
//         <WholeApp/>
//     </ContextProvider>
//     </NativeBaseProvider>
//     ) 
// }
const codePushOptions={
  checkFrequency:codePush.CheckFrequency.ON_APP_START,
};

export default  codePush(codePushOptions)(App)


         
       