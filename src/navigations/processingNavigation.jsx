
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApplicationScreen from "../screens/applicationScreen";
import SafetyAndSecurityScreen from "../screens/safetyAndSecurityScreen";
import DestinationCountryScreen from "../screens/destinationCountryScreen";
import PurposeOfTravelScreen from "../screens/purposeOfTravelScreen";

// const ProcessingStack = createStackNavigator();

const ProcessingStack = createNativeStackNavigator()

const ProcessingNavigation = () => {

    return (
        // <NavigationContainer>
            <ProcessingStack.Navigator screenOptions = {{animation : 'simple_push'}}>
                <ProcessingStack.Screen name="ApplicationScreen" component={ApplicationScreen}  options={{headerShown : false}} />
                <ProcessingStack.Screen name="SafetyAndSecurityScreen" component={SafetyAndSecurityScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="DestinationCountryScreen" component={DestinationCountryScreen} options={{headerShown : false}}/>
                <ProcessingStack.Screen name="PurposeOfTravelScreen" component={PurposeOfTravelScreen} options={{headerShown : false}}/>
            </ProcessingStack.Navigator>
        // </NavigationContainer>
       
    )
}

export default ProcessingNavigation