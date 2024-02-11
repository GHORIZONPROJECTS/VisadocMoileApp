import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registered, setRegistered] = useState(false)
  
  return (
    <AuthContext.Provider value={{ user, setUser, registered, setRegistered }}>
      {children}
    </AuthContext.Provider>
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