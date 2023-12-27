import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authNavigation";
import {auth} from '../firebase';
import { AuthContext } from '../config/AuthContext';
import ApplicationScreen from '../screens/applicationScreen';
import ProcessingNavigation from './processingNavigation';
import { Provider as PaperProvider } from 'react-native-paper';

const RootNavigation = () => {

  const { user, setUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        // onAuthStateChanged returns an unsubscriber
        const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
          try {
            await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
            setIsLoading(false);
          } catch (error) {
            console.log(error);
          }
        });
    
        // unsubscribe auth listener on unmount
        return unsubscribeAuth;
      }, []);

    return (


      <PaperProvider>
        <NavigationContainer>

            {user ? <ProcessingNavigation /> : <AuthNavigation />} 

            {/* <AuthNavigation/> */}

        </NavigationContainer>
      </PaperProvider>

    )

}

export default RootNavigation