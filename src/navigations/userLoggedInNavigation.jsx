import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserBottomTabNavigation from './userBottomTabNavigation';
import NotificationScreen from '../screens/notificationScreen';
import ProfileScreen from '../screens/profileScreen';
import PersonalInformationScreen from '../screens/personalInformationScreen';
import EducationInformationScreen from '../screens/EducationInformationScreen';
import EmploymentDetailsScreen from '../screens/EmploymentDetailsScreen';
import ContactSupportScreen from '../screens/contactSupportScreen';

const userloggedInStack = createNativeStackNavigator()

const UserLoggedInNavigation = () => {

    return(

        <userloggedInStack.Navigator>
                 <userloggedInStack.Screen 
                    name='bottomTab' 
                    component={UserBottomTabNavigation}
                    options={
                        {
                            headerShown:false
                        }
                    } 
                />
                <userloggedInStack.Screen 
                    name="NotificationScreen" 
                    component={NotificationScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                <userloggedInStack.Screen 
                    name="ProfileScreen" 
                    component={ProfileScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                  <userloggedInStack.Screen 
                    name="PersonalInformationScreen" 
                    component={PersonalInformationScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                  />

                  <userloggedInStack.Screen 
                    name="EducationInformationScreen" 
                    component={EducationInformationScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                  />

                  <userloggedInStack.Screen 
                    name="EmploymentDetailsScreen" 
                    component={EmploymentDetailsScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                  />

                  <userloggedInStack.Screen 
                    name="ContactSupportScreen" 
                    component={ContactSupportScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                  />
                

                                   
        </userloggedInStack.Navigator>

    )
}

export default UserLoggedInNavigation

