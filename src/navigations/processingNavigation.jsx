
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InformationScreen from "../screens/informationScreen";
import SafetyAndSecurityScreen from "../screens/safetyAndSecurityScreen";
import DestinationCountryScreen from "../screens/destinationCountryScreen";
import VisaTypeScreen from "../screens/visaTypeScreen";
import PurposeOfTravelScreen from "../screens/purposeOfTravelScreen";
import AvailableDocumentScreen from "../screens/availableDocumentScreen";
import UserInformationScreen from "../screens/userInformationScreen";
import MaritalAndEmploymentScreen from "../screens/maritalAndEmploymentScreen";
import ParentScreen from "../screens/parentScreen";
import EducationScreen from "../screens/educationScreen";
import EmploymentScreen from "../screens/employmentScreen";
import TraveHistoryScreen from "../screens/TravelHistory";
import DocumentsAvailableScreen from "../screens/documentsAvailableScreen";
import CardPaymentScreen from "../screens/cardPaymentScreen";
import PaymentSuccessfulScreen from "../screens/paymentSuccessfulScreen";
import InternationalPassportImageScreen from "../screens/internationalPassportImage";
import BirthCertificateImageScreen from "../screens/birthCertificateImageScreen";
import LeaveApprovalLetterImageScreen from "../screens/leaveApprovalLetterImageScreen";
import MarriageCertificateImageScreen from "../screens/marriageCertificateImageScreen";
import PassportPhotographImageScreen from "../screens/passportPhotographImageScreen";
import SchoolCredentialsImageScreen from "../screens/schoolCredentialsImageScreen";
import SelfIntroductionImageScreen from "../screens/selfIntroductionImageScreen";
import StatementOfAccountImageScreen from "../screens/statementOfAccountImageScreen";
import EmploymentLetterImageScreen from "../screens/employmentLetterImageScreen";
import CompanyIntroductionImageScreen from "../screens/companyIntroductionImageScreen";

import React, {useContext, useState, useEffect} from 'react'
import { AuthContext } from '../config/AuthContext';
import {auth, db} from '../firebase.js';
import { collection, onSnapshot, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import Loading from "../components/loading/index.jsx";
import ServiceChargeScreen from "../screens/serviceChargeScreen/index.jsx";
// import MyProfileScreen from "../screens/myProfileScreen";

// const ProcessingStack = createStackNavigator();


const ProcessingStack = createNativeStackNavigator()

const ProcessingNavigation = () => {

    const { user } = useContext(AuthContext)

    const [userData, setUserData] = useState({}) 

    const [isLoading, setIsLoading] = useState(true);

    const getUserVisaInfo = async() => {
        const docRef = doc(db, "visa", user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
    
            setUserData(docSnap.data())
            
          } else {
    
            console.log("No such document!");
          }
      }
    
      useEffect(()=>{
        getUserVisaInfo()
      }, [])
    
      console.log('socials:',userData.socials)

    return (
            <ProcessingStack.Navigator screenOptions = {{animation : 'simple_push'}}>
                <ProcessingStack.Screen name="InformationScreen" component={InformationScreen}  options={{headerShown : false}} />
                <ProcessingStack.Screen name="SafetyAndSecurityScreen" component={SafetyAndSecurityScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="DestinationCountryScreen" component={DestinationCountryScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="PurposeOfTravelScreen" component={PurposeOfTravelScreen} options={{headerShown : false}}/> 
                <ProcessingStack.Screen name="VisaTypeScreen" component={VisaTypeScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="AvailableDocumentScreen" component={AvailableDocumentScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="UserInformationScreen" component={UserInformationScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="MaritalAndEmploymentScreen" component={MaritalAndEmploymentScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="ParentScreen" component={ParentScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="EducationScreen" component={EducationScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="EmploymentScreen" component={EmploymentScreen} options={{headerShown : false}}/> 
                <ProcessingStack.Screen name="TravelHistoryScreen" component={TraveHistoryScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="DocumentsAvailableScreen" component={DocumentsAvailableScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="InternationalPassportImageScreen" component={InternationalPassportImageScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="BirthCertificateImageScreen" component={BirthCertificateImageScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="LeaveApprovalLetterImageScreen" component={LeaveApprovalLetterImageScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="MarriageCertificateImageScreen" component={MarriageCertificateImageScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="PassportPhotographImageScreen" component={PassportPhotographImageScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="SchoolCredentialsImageScreen" component={SchoolCredentialsImageScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="SelfIntroductionImageScreen" component={SelfIntroductionImageScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="StatementOfAccountImageScreen" component={StatementOfAccountImageScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="CompanyIntroductionImageScreen" component={CompanyIntroductionImageScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="EmploymentLetterImageScreen" component={EmploymentLetterImageScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="ServiceChargeScreen" component={ServiceChargeScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="CardPaymentScreen" component={CardPaymentScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="PaymentSuccessfulScreen" component={PaymentSuccessfulScreen} options={{headerShown : false}}/>
                
            </ProcessingStack.Navigator>
       
    )
}

export default ProcessingNavigation