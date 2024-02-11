import React, { useState, createContext, useReducer } from 'react';
import VisaReducer from './VisaReducer';

const INITIAL_STATE = {
    currentUser : null,
}

export const VisaContext = createContext(INITIAL_STATE);

export const VisaProvider = ({ children }) => {

    const [ state, dispatch] = useReducer(VisaReducer, INITIAL_STATE);
  
  
  return (
    <VisaContext.Provider value={{ visaId:state.visaId, dispatch }}>
      {children}
    </VisaContext.Provider>
  );
};




// import { createContext, useEffect, useReducer } from "react";
// import AuthReducer from "./AuthReducer";
// import AsyncStorage from '@react-native-async-storage/async-storage'

// const INITIAL_STATE = {

//     // currentUser : JSON.parse(AsyncStorage.getItem("user")) || null,

//     currentUser : AsyncStorage.getItem("user") || null,

// }

// export const AuthContext = createContext(INITIAL_STATE)

// export const AuthenticatedUserProvider = ({children}) => {

//     const [user, setUser] = useState(null);

//     const [ state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);


//     useEffect(() => {

//       AsyncStorage.setItem("user", state.currentUser)

//       // AsyncStorage.setItem("user", JSON.stringify(state.currentUser))

//     }, [state.currentUser])

//     return(

//         <AuthContext.Provider value={{currentUser: state.currentUser, dispatch}}>

//             {children}

//         </AuthContext.Provider>

//     );
// }