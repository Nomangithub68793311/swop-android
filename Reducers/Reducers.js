import React from 'react'

import {ADD_SIGNUP,ADD_LOAD,GET_PROFILE,ADD_BIO,ADD_ACCOUNT,ADD_SOCIAL,ADD_TOKEN,GET_SOCIAL,GET_USER_ACCOUNT,GET_LINKS,EDIT_BIO,EDIT_ACCOUNT,USER_AFTER_DELETE} from './action'
export const initialState={
       account:[],
        link:[],
        indilinks:[],
        socialAccount:[],
        loading:false,
        token:{
           
        },
        profile:{
           
        }
}



export const Reducers=(state=initialState,action)=> {
   switch(action.type){
    case ADD_SIGNUP:
        return{
          ...state,
          profile:{...state.profile,name:action.payload.name ,email:action.payload.email }
               
           
        };
        case ADD_BIO:
        return{  
            ...state,
            profile:{...state.profile,bio:action.payload.bio ,address:action.payload.address,pic:action.payload.pic ,
                city:action.payload.city ,zipcode:action.payload.zipcode ,state:action.payload.state ,country:action.payload.country
            }
        };
       
        case GET_PROFILE:
        return{
            ...state,
            profile:{...state.profile,name:action.payload.name ,email:action.payload.email ,bio:action.payload.bio ,pic:action.payload.pic,referralCode:action.payload.referralCode,
                totalAmount:action.payload.totalAmount, nfcGet:action.payload.nfcGet,
            }
        };
        case EDIT_BIO:
        return{
            ...state,
            profile:{...state.profile,bio:action.payload.bio,pic:action.payload.pic}   
        };
        case ADD_ACCOUNT:
            return{
                ...state,
                account:[...state.account,action.payload ]
            };
            case ADD_LOAD:
                return{
                    ...state,
                    loading:action.payload
                };
            case EDIT_ACCOUNT:
            return{
                ...state,
                
                account:[...action.payload]
                       
                       
                    
            };
        case GET_USER_ACCOUNT:
                return{
                     ...state,
                    account:[...state.account,...action.payload  ]
                };
                case USER_AFTER_DELETE:
                return{
                     ...state,
                    account:[...action.payload  ]
                };
        case ADD_SOCIAL:
                return{
                    ...state,
                    link:[...state.link, action.payload ]
                    

                    };      
         case GET_SOCIAL:
            return{
                ...state,
                link:[...state.link, ...action.payload ]
              
                
            };
            case GET_LINKS:
            return{
                ...state,
                token:{...state.token,...state.link.filter(item=>item.accountowner===action.payload)}
              
                
            };
            case ADD_TOKEN:
            return{
                ...state,
                token:{...state.token,param:action.payload.param,id:action.payload.id,notify:action.payload.notify}
              
                
            };



                    
                 
               
             


       default:
           return state
   }
        
    
}

   