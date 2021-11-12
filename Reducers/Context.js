import React,{createContext,useReducer} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Button,
    View,
    Modal,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar
    
    
  } from 'react-native';
import {initialState,Reducers} from './Reducers'
import {ADD_SIGNUP,ADD_LOAD,GET_PROFILE,ADD_ACCOUNT,ADD_BIO,EDIT_BIO,ADD_TOKEN,ADD_SOCIAL,GET_SOCIAL,GET_USER_ACCOUNT,GET_LINKS,EDIT_ACCOUNT,USER_AFTER_DELETE} from './action'

export const NotesContext=createContext()

export  const ContextProvider=({children})=> {
const [state,dispatch]=useReducer(Reducers,initialState)
const addUser=(user)=>{
    dispatch({type:ADD_SIGNUP,payload:user})
}
const addProfile=(profile)=>{
    dispatch({type:GET_PROFILE,payload:profile})
}
const addBio=(bio)=>{
    dispatch({type:ADD_BIO,payload:bio})
}
// getting accounts in profile page
const adduserAccount=(accountuser)=>{
    dispatch({type:GET_USER_ACCOUNT,payload:accountuser})
}


// for creating and saving account from modalname
const addAccount=(account)=>{
    dispatch({type:ADD_ACCOUNT,payload:account})
}

// for adding social links from modelopensave

const addsocialAcc=(social)=>{
    dispatch({type:ADD_SOCIAL,payload:social})
}

// for getting social link array in acccount.js page
const getsocialinks=(links)=>{
    dispatch({type:GET_SOCIAL,payload:links})
}
const getindividuallinks=(id)=>{
    dispatch({type:GET_LINKS,payload:id})
}
const addBioEdit=(bio)=>{
    dispatch({type:EDIT_BIO,payload:bio})
}
const addAccountEdit=(data)=>{
    dispatch({type:EDIT_ACCOUNT,payload:data})
}
const addToken=(data)=>{
    dispatch({type:ADD_TOKEN,payload:data})
}
const adduserAccountdelete=(data)=>{
    dispatch({type:USER_AFTER_DELETE,payload:data})
}
const addLoading=(data)=>{
    dispatch({type:ADD_LOAD,payload:data})
}
  
  



    return (
       <NotesContext.Provider value={{state,addLoading,addUser,addBio,adduserAccountdelete,addToken,addAccount,addProfile,addAccountEdit,addsocialAcc,getsocialinks,adduserAccount,getindividuallinks,addBioEdit}}>
           {children}
       </NotesContext.Provider> 
    )
}

 

  