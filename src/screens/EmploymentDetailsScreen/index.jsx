import { StyleSheet, Text, View, StatusBar, Pressable, ScrollView, Image, ImageBackground, ActivityIndicator  } from 'react-native'
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES, COLORS } from '../../constants/theme'
import { Ionicons, FontAwesome5, Feather, MaterialCommunityIcons, MaterialIcons, Fontisto } from '@expo/vector-icons';
import { NotificationListData, ProfileListData, documentsCardData } from '../../data';
import { Button, MD3Colors, ProgressBar, TextInput, Divider, RadioButton } from "react-native-paper";
// import  DateTimePicker  from '@react-native-community/datetimepicker';
// import { SelectList } from 'react-native-select-bottom-list';
// import Loader from "../../components/loader";
// import Constants from "expo-constants";
// import { SubmitHandler, useForm, Controller } from "react-hook-form";
// import { WizardStore } from "../../store";
// import { useIsFocused } from "@react-navigation/native";





export default function EmploymentDetailsScreen({navigation}) {

const [expiration, setExpiration] = useState('');

const [dateOfBirth, setDateOfBirth] = useState('');

const [formReady, setFormReady] = useState(false);

const [dateError, setDateError] = useState('');

const [error, setError] = useState('');

const [date, setDate] = useState(new Date());

const [state, setState] = useState('Choose a state');

// const [dateExp, setDateExp] = useState(new Date());
const [loading, setLoading ] = useState(false)

const [showPicker, setShowPicker] = useState(false);

const [value, setValue] = React.useState('male');



  return (
    <SafeAreaView style={{flex:1, alignItems:'center'}}>

      <StatusBar translucent={true} backgroundColor={COLORS.main}  barStyle="light-content" />

      <View style={{width:SIZES.width, height:60, backgroundColor:COLORS.main, alignItems:'center', justifyContent:'space-between', flexDirection:'row', paddingHorizontal:20}}> 
      
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Pressable onPress={() => navigation.goBack()}>
                  <Ionicons name="ios-arrow-back" size={28} color="white" />
                </Pressable>
                <View style={{flexDirection:'column', marginLeft:10}}>
                    <Text style={{fontSize:16, color:COLORS.white}}>Employment Details</Text>
                </View>
              </View>

                {/* <Text style={{fontSize:16, color:COLORS.white}}>Mark as read</Text> */}
    
      
      {/* <Pressable onPress={() => (navigation.navigate('NotificationScreen'))}>
          <View>
            <Ionicons name="ios-notifications-outline" size={24} color="white" />
            <View style={{position:'absolute', right:-5, top:-5, width:16, height:16, borderRadius:8, backgroundColor:'red', alignItems:'center', justifyContent:'center' }}><Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>3</Text></View>
          </View>
      </Pressable> */}
        
      
      </View>
      {/* <View style={{flexDirection:'column', justifyContent:'space-between', height:SIZES.height}}> */}
      <ScrollView showsVerticalScrollIndicator={false} style={{width:SIZES.width, paddingHorizontal:20}}>

      <View style={{marginVertical:20, width: 120, height:120, backgroundColor:'#00000033', alignItems:'center', justifyContent:'center', borderRadius:10, position:'relative'}}>
        <ImageBackground
            source= {require('../../../assets/images/user.png')}
            alt=''
            resizeMode='contain'
            style = {{ width : 100, height : 100, }}

        /> 
        <Pressable style={{position:'absolute', backgroundColor:'white', bottom:0,right:0, width: 40, height:40, borderBottomRightRadius:10, alignItems:'center', justifyContent:'center'}} >
            <MaterialIcons name="mode-edit" size={24} color="#00000088" />

        </Pressable>
      </View>  


     
      
      <View style={{width:'100%', marginTop:20, marginBottom:5}}>
      <TextInput
            mode="flat"
            label="Firstname"
            backgroundColor="white"
            
            // onBlur={onBlur}
            // onChangeText={onChange}
            value="Godwin"
           
        />

            {error.lastname && (
             <Text style={{ margin: 8, marginLeft: 16, color: "red" }}>
               This is a required field.
             </Text>
           )}

      </View>

      <View style={{width:'100%', marginTop:20, marginBottom:5}}>
      <TextInput
            mode="flat"
            label="Lastname"
            backgroundColor="white"
            
            // onBlur={onBlur}
            // onChangeText={onChange}
            // value={value}
           
        />

            {error.lastname && (
             <Text style={{ margin: 8, marginLeft: 16, color: "red" }}>
               This is a required field.
             </Text>
           )}

      </View>

      <View style={{width:'100%', marginTop:20, marginBottom:5}}>
      <TextInput
            mode="flat"
            label="Phone Number"
            backgroundColor="white"
            disabled = "true"
            
            // onBlur={onBlur}
            // onChangeText={onChange}
            value="+234 8139444402"
           
        />

            {error.lastname && (
             <Text style={{ margin: 8, marginLeft: 16, color: "red" }}>
               This is a required field.
             </Text>
           )}

      </View>


      <View style={{width:'100%', marginTop:20, marginBottom:5}}>
      <TextInput
            mode="flat"
            label="Email"
            backgroundColor="white"
            disabled="true"
            
            // onBlur={onBlur}
            // onChangeText={onChange}
            value="ghorizongroups@gmail.com"
           
        />

            {error.lastname && (
             <Text style={{ margin: 8, marginLeft: 16, color: "red" }}>
               This is a required field.
             </Text>
           )}

      </View>

        <View style={{  width:'100%', minHeight:60, backgroundColor:'#D9E7EE', borderRadius:5,  flexDirection:'row', paddingHorizontal:20, alignItems:'center', marginVertical:20}}>
        
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                <View style={{flexDirection:'row', alignItems:'center', marginRight:50}}>
                    <RadioButton value="male" />
                    <Text>Male</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <RadioButton value="female" />  
                    <Text>Female</Text>
                </View>
            </View>
            
        </RadioButton.Group>
         
          
        </View>

        <View style={{width:'100%', marginTop:20, marginBottom:5, position:'relative'}}>
        <TextInput
                mode="flat"
                label="Date of Birth"
                backgroundColor="white"
                // disabled="true"
                
                // onBlur={onBlur}
                // onChangeText={onChange}
                value="June 24, 1991"
            
            />
            <Pressable style={{position:'absolute', left:280, top:10}}>
                <Fontisto name="date" size={24} color="#00000077" />
            </Pressable>
            

            {error.lastname && (
             <Text style={{ margin: 8, marginLeft: 16, color: "red" }}>
               This is a required field.
             </Text>
           )}

      </View>

     
      {/* <Pressable onPress={() => navigation.goBack()} style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:300}}>
            <Ionicons name='ios-arrow-back-outline' size={24} color="#00000099"/>
            <Text  style={{color:COLORS.main, marginLeft:10, fontSize:18, }}>Back to Home</Text>
      </Pressable> */}
      
     
      
      </ScrollView>

    
      
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

// import { StyleSheet, Text, Pressable, View } from 'react-native'
// import React from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'


// const HomeScreen = () => {

//   const clearOnboarding = async() => {

//     try {

//       await AsyncStorage.removeItem('@viewedOnboarding')
      
//       return true;

//     } catch (error) {
      
//       console.log('Error @remeoveItem :', error)

//     }

//   }

//   return (

//     <View>

//       <Text>Home</Text>

//       <Pressable onPress={clearOnboarding}>
      
//         <Text>Clear Onboarding</Text>
        
//       </Pressable>

//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({})