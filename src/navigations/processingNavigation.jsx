
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApplicationScreen from "../screens/applicationScreen";
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
// import MyProfileScreen from "../screens/myProfileScreen";

// const ProcessingStack = createStackNavigator();


const ProcessingStack = createNativeStackNavigator()

const ProcessingNavigation = () => {

    return (
        // <NavigationContainer>
            <ProcessingStack.Navigator screenOptions = {{animation : 'simple_push'}}>
                {/* <ProcessingStack.Screen name="ApplicationScreen" component={ApplicationScreen}  options={{headerShown : false}} />
                <ProcessingStack.Screen name="SafetyAndSecurityScreen" component={SafetyAndSecurityScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="DestinationCountryScreen" component={DestinationCountryScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="PurposeOfTravelScreen" component={PurposeOfTravelScreen} options={{headerShown : false}}/> 
                <ProcessingStack.Screen name="VisaTypeScreen" component={VisaTypeScreen} options={{headerShown : false}}/> */}
                <ProcessingStack.Screen name="AvailableDocumentScreen" component={AvailableDocumentScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="UserInformationScreen" component={UserInformationScreen} options={{headerShown : false}}/>
                {/* <ProcessingStack.Screen name="MyProfileScreen" component={MyProfileScreenScreen} options={{headerShown : false}}/> */}
                <ProcessingStack.Screen name="MaritalAndEmploymentScreen" component={MaritalAndEmploymentScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="ParentScreen" component={ParentScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="EducationScreen" component={EducationScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="EmploymentScreen" component={EmploymentScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="TravelHistoryScreen" component={TraveHistoryScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="DocumentsAvailableScreen" component={DocumentsAvailableScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="CardPaymentScreen" component={CardPaymentScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="PaymentSuccessfulScreen" component={PaymentSuccessfulScreen} options={{headerShown : false}}/>
                
            </ProcessingStack.Navigator>
        // </NavigationContainer>
       
    )
}

export default ProcessingNavigation