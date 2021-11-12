import React,{useContext} from 'react';
import { View, StyleSheet,Image } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import Right from 'react-native-vector-icons/AntDesign'
import {NotesContext} from '../Reducers/Context'
import Iconyo from 'react-native-vector-icons/MaterialIcons'
import IconmAT from 'react-native-vector-icons/Ionicons' 
 function DrawerContent(props) {

    const paperTheme = useTheme();
    const {state,addProfile,adduserAccount}=useContext(NotesContext)
    const logout=()=>{
      AsyncStorage.removeItem('token').then(()=>{props.navigation.replace('SplashScreen')}).catch(err=>console.log('error'))
  }

    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF',elevation:10}}>
           
           <DrawerContentScrollView {...props}>
           <Drawer.Section >
               <View style={{justifyContent:'center',alignItems:'center'}}>
               <Image source={require('../images/widelogo.png')} style={{width: 160,marginVertical:20,resizeMode: 'stretch',alignSelf:'center',
    height: 35}} />
               </View>
               
            </Drawer.Section> 
 
           <Drawer.Section style={{marginTop:-8}}>
               
                       <DrawerItem style={{backgroundColor:'white',borderTopColor: '#E7E6E6', borderTopWidth: 1}}
                           
                            label="Home"
                            icon={() => (
                                <Icon 
                                name="chevron-right" 
                                color="black"
                                size={20}
                                />
                            )}
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            labelStyle={{color:'#3C3B3B',fontFamily:'Poppins-Regular',fontSize:16}}
                            onPress={() =>  {props.navigation.navigate('ProfileScreen')}}
                           
                        />
                        
                                
                          
                        <DrawerItem  style={{backgroundColor:'white',borderTopColor: '#E7E6E6',
        borderTopWidth: 1}}
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Edit Profile" 
                            labelStyle={{color:'#3C3B3B',fontFamily:'Poppins-Regular',fontSize:16}}
                            onPress={() => {props.navigation.navigate('Editprofile',{state})}}
                        />
                        {/* <DrawerItem style={{backgroundColor:'white',borderTopColor: '#E7E6E6',
        borderTopWidth: 1}}
                            icon={({color, size}) => (
                                <Icon 
                                name="share" 
                                color={color}
                                size={size}
                                />
                            )}
                            label=" How to swop "
                            labelStyle={{color:'#3C3B3B',fontFamily:'Poppins-Regular'}}
                            onPress={() =>{props.navigation.navigate('Refferal')}}
                        /> */}
                        <DrawerItem style={{backgroundColor:'white',borderTopColor: '#E7E6E6',
        borderTopWidth: 1}}
                            icon={({color, size}) => (
                                <Icon 
                                name="shopping" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Buy a SWOP "
                            labelStyle={{color:'#3C3B3B',fontFamily:'Poppins-Regular',fontSize:16}}
                            onPress={() =>{props.navigation.navigate('Buyswop')}}
                        />
                        <DrawerItem style={{backgroundColor:'white',borderTopColor: '#E7E6E6',
        borderTopWidth: 1}}
                            icon={({color, size}) => (
                                <Icon 
                                name="share-variant" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Refferal"
                            labelStyle={{color:'#3C3B3B',fontFamily:'Poppins-Regular',fontSize:16}}
                            onPress={() =>{props.navigation.navigate('Referral')}}
                        />
                        <DrawerItem style={{backgroundColor:'white',borderTopColor: '#E7E6E6',
        borderTopWidth: 1}}
                            icon={({color, size}) => (
                                <Icon 
                                name="information-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="About "
                            labelStyle={{color:'#3C3B3B',fontFamily:'Poppins-Regular',fontSize:16}}
                            onPress={() =>{props.navigation.navigate('About')}}
                        />
                      
                         {/* <DrawerItem style={{backgroundColor:'white',borderTopColor: '#E7E6E6',
        borderTopWidth: 1}}
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="SWOPing"
                            labelStyle={{color:'#3C3B3B',fontFamily:'Poppins-Regular',fontSize:16}}
                            onPress={() => {props.navigation.navigate('SlideScreen')}}
                        /> */}
                        <DrawerItem style={{backgroundColor:'white',borderTopColor: '#E7E6E6',
        borderTopWidth: 1}}
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Log Out"
                    labelStyle={{color:'#3C3B3B',fontFamily:'Poppins-Regular',fontSize:16}}
                    onPress={logout}
                />
                      
            </Drawer.Section>      
           </DrawerContentScrollView>
          
            {/* <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {console.log("yoyo")}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Edit Profile"
                            onPress={() => {console.log("yoyo")}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Buy Swop"
                            onPress={() => {console.log("yoyo")}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Refferal"
                            onPress={() => {console.log("yoyo")}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {console.log("yoyo")}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() =>{console.log("yoyo")}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
             </DrawerContentScrollView>
             
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={logout}
                />
            </Drawer.Section> */}
            <Drawer.Section style={styles.bottomDrawerSection}>
               <View style={{justifyContent:'center',alignItems:'center'}}>
               <Image source={require('../images/swopp.png')} style={{width: 165,resizeMode: 'stretch',alignSelf:'center',
    height: 30}} />
               </View>
               <View style={{justifyContent:'center',alignItems:'center',fontWeight:'bold',fontSize:25,marginTop:10}}>
                <Text style={{fontSize:15,color:'#9D9D9D'}}> Version 1.0.0</Text>
               </View>
            </Drawer.Section> 
           
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
       
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

  export default DrawerContent